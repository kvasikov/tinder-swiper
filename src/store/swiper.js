import { action, configure, makeAutoObservable, computed, observable, runInAction } from 'mobx';
import { DATA_ATTR_PROFILE_ID } from '../constants/attributes';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

const getProfileIdByDataAttr = (swiperInstance) => {
  const slideEl = swiperInstance.slides[swiperInstance.activeIndex];

  if (!slideEl) {
    return null;
  }

  const profileId = slideEl.getAttribute(DATA_ATTR_PROFILE_ID);
  return profileId || null;
};

export class SwiperStore {
  profileList = [];
  currentProfileDataId = null;
  swiperInstance = null;
  isSwiperEnable = true;

  constructor() {
    makeAutoObservable(this, {
      profileList: observable,
      swiperInstance: observable,
      isSwiperEnable: observable,
      currentProfileDataId: observable,
      currentProfileData: computed,
      setSwiperInstance: action,
      setCurrentProfileId: action,
      setProfileList: action,
      setSwiperStatus: action,
    });
  }

  setSwiperInstance = (swiperInstance) => {
    runInAction(() => {
      this.swiperInstance = swiperInstance;
    });
  };

  setCurrentProfileId = (swiperInstance) => {
    runInAction(() => {
      this.currentProfileDataId = getProfileIdByDataAttr(swiperInstance);
    });
  };

  setProfileList = (profileList = []) => {
    runInAction(() => {
      this.profileList = profileList;
    });
  };

  setSwiperStatus = (status) => {
    runInAction(() => {
      this.isSwiperEnable = status;
    });
  };

  get currentProfileData() {
    const profileId = this.currentProfileDataId;
    const profileData = this.profileList.find((profile) => profile.id === profileId);
    return profileData || null;
  }
}

export default new SwiperStore();
