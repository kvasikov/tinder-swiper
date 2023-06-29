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
    if (isInit) {
      this.profileList = profileList;
      return;
    }

    this.profileList = [...toJS(this.profileList), ...profileList];
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

  get currentDescriptorList() {
    const profileData = toJS(this.currentProfileData);

    const sectionData =
      profileData?.infoData?.selectedDescriptors?.reduce((result, item) => {
        return {
          ...result,
          [item.sectionId]: result[item.sectionId] ? [...result[item.sectionId], item] : [item],
        };
      }, {}) || {};

    const sectionDataList = Object.values(sectionData);
    const activePhotoIndex = profileData?.activePhotoIndex || 0;

    const index = activePhotoIndex <= 1 ? 0 : activePhotoIndex - 1;
    let currentList = sectionDataList[index] || [];

    return currentList;
  }
}

export default new SwiperStore();
