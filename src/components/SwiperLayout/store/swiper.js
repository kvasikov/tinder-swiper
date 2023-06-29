import { configure, makeAutoObservable, toJS } from 'mobx';
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

const getProfileIdByDataAttr = (slideEl, defaultProfileId) => {
  if (!slideEl) {
    return defaultProfileId;
  }

  const profileId = slideEl.getAttribute(DATA_ATTR_PROFILE_ID);
  return profileId || defaultProfileId;
};

export const MAX_DESCRIPTOR_COUNT = 4;

const getDescriptorList = (profileData) => {
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

const getStatusData = (profileData) => {
  const statusId = profileData?.infoData?.relationshipIntent?.descriptorChoiceId;

  if (!statusId) {
    return null;
  }

  return STATUS_DATA[statusId];
};

export class SwiperStore {
  profileList = [];
  currentProfileDataId = null;
  isSwiperEnable = true;
  offsetTop = 0;
  isFetchingList = true;

  constructor() {
    makeAutoObservable(this);
  }

  setFetchingList = (isFetching) => {
    this.isFetchingList = isFetching;
  };

  setCurrentProfileId = (visibleSlide) => {
    this.currentProfileDataId = getProfileIdByDataAttr(visibleSlide, this.profileList?.[0]?.id);
  };

  setProfileList = (profileList = [], isInit) => {
    const dataProfileList = profileList.map((profile) => ({
      ...profile,
      activePhotoIndex: 0,
      isStatusShow: false,
      statusData: getStatusData(profile),
      infoData: {
        ...profile.infoData,
        sectionDataList: getDescriptorList(profile),
      },
    }));

    if (isInit) {
      this.profileList = dataProfileList;
      return;
    }

    this.profileList = [...toJS(this.profileList), ...dataProfileList];
  };

  setSwiperStatus = (status) => {
    this.isSwiperEnable = status;
  };

  setOffsetTop = (offsetTop) => {
    this.offsetTop = offsetTop;
  };

  updateProfileData = (profileId, newProfileData) => {
    this.profileList = this.profileList.map((profile) => {
      if (profile.id === profileId) {
        return { ...profile, ...newProfileData };
      }

      return profile;
    });
  };

  get currentProfileData() {
    const profileId = this.currentProfileDataId;
    const profileData = this.profileList.find((profile) => profile.id === profileId);
    return profileData || null;
  }
}

export default new SwiperStore();
