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
    iconKind: 'heart',
    design: 'pink',
  },
  justHaveFun: {
    text: 'Просто повеселиться',
    iconKind: 'fun',
    design: 'yellow',
  },
  longOrShortTermPartner: {
    text: 'Долго или краткосрочно',
    iconKind: 'manyHeart',
    design: 'purple',
  },
  lookingForFriends: {
    text: 'Ищу друзей',
    iconKind: 'hands',
    design: 'green',
  },
  stillFiguringItOut: {
    text: 'Все еще разбираюсь',
    iconKind: 'monkey',
    design: 'blue',
  },
  expressRelationship: {
    text: 'Экспресс отношения',
    iconKind: 'fire',
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
