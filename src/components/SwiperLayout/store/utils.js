/** INFO START
 * Пришлось вместо svg иконок для вывода "статуса" профиля использовать png картинки
 * В макете эти иконки все-равно растровые, а не векторные.
 * Также даже если их экспортировать как svg и использовать как иконки, то браузер
 * не позволяет их рендерить в более чем двух местах одну и ту же иконку в рамках одной страницы (из-за использования id в fill)
 */
import FireImg from '../../../assets/images/fire.png';
import FunImg from '../../../assets/images/fun.png';
import HandsImg from '../../../assets/images/hands.png';
import HeartImg from '../../../assets/images/heart.png';
import ManyHeartImg from '../../../assets/images/many-heart.png';
import MonkeyImg from '../../../assets/images/monkey.png';
/** INFO END */
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';

export const getProfileIdByDataAttr = (slideEl, defaultProfileId) => {
  if (!slideEl) {
    return defaultProfileId;
  }

  const profileId = slideEl.getAttribute(DATA_ATTR_PROFILE_ID);
  return profileId || defaultProfileId;
};

export const MAX_DESCRIPTOR_COUNT = 4;

export const getDescriptorList = (profileData) => {
  const selectedDescriptors = profileData?.infoData?.selectedDescriptors;

  if (
    !selectedDescriptors ||
    (Array.isArray(selectedDescriptors) && selectedDescriptors.length === 0)
  ) {
    return [];
  }

  const sectionData =
    selectedDescriptors.reduce((result, item) => {
      return {
        ...result,
        [item.sectionId]: result[item.sectionId] ? [...result[item.sectionId], item] : [item],
      };
    }, {}) || {};

  const sectionDataList = Object.values(sectionData);
  return sectionDataList;
};

const STATUS_DATA = {
  longTermPartner: {
    text: 'Долгосрочный партнер',
    imgPath: HeartImg,
    design: 'pink',
  },
  justHaveFun: {
    text: 'Просто повеселиться',
    imgPath: FunImg,
    design: 'yellow',
  },
  longOrShortTermPartner: {
    text: 'Долго или краткосрочно',
    imgPath: ManyHeartImg,
    design: 'purple',
  },
  lookingForFriends: {
    text: 'Ищу друзей',
    imgPath: HandsImg,
    design: 'green',
  },
  stillFiguringItOut: {
    text: 'Все еще разбираюсь',
    imgPath: MonkeyImg,
    design: 'blue',
  },
  expressRelationship: {
    text: 'Экспресс отношения',
    imgPath: FireImg,
    design: 'orange',
  },
};

export const getStatusData = (profileData) => {
  const statusId = profileData?.infoData?.relationshipIntent?.descriptorChoiceId;

  if (!statusId) {
    return null;
  }

  return STATUS_DATA[statusId];
};
