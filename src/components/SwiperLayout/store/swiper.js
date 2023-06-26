import { configure, makeAutoObservable, toJS } from 'mobx';
import { DATA_ATTR_PROFILE_ID } from '../../../constants/attributes';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

const getProfileIdByDataAttr = (visibleSlides) => {
  const slideEl = visibleSlides?.[0];

  if (!slideEl) {
    return null;
  }

  const profileId = slideEl.getAttribute(DATA_ATTR_PROFILE_ID);
  return profileId || null;
};

export class SwiperStore {
  profileList = [];
  currentProfileDataId = null;
  swiperInstance = null; // TODO: удалить - использовать вместо этого useSwiper
  isSwiperEnable = true;
  offsetTop = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setSwiperInstance = (swiperInstance) => {
    this.swiperInstance = swiperInstance;
  };

  setCurrentProfileId = (visibleSlides) => {
    this.currentProfileDataId = getProfileIdByDataAttr(visibleSlides);
  };

  setProfileList = (profileList = [], isInit) => {
    if (isInit) {
      this.profileList = profileList;
      return;
    }

    this.profileList = [...toJS(this.profileList), ...profileList];
  };

  setSwiperStatus = (status) => {
    if (status) {
      this.swiperInstance.enable();
    } else {
      this.swiperInstance.disable();
    }

    this.isSwiperEnable = status;
  };

  setOffsetTop = (offsetTop) => {
    this.offsetTop = offsetTop;
  };

  get currentProfileData() {
    const profileId = this.currentProfileDataId;
    const profileData = this.profileList.find((profile) => profile.id === profileId);
    return profileData || null;
  }
}

export default new SwiperStore();
