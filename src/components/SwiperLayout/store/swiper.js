import { configure, makeAutoObservable, toJS } from 'mobx';
import { TAB_LIST } from '../../../constants/tabs';
import { getDescriptorList, getStatusData, ORGANIZATION_DATA } from './utils';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

export class SwiperStore {
  swiper = null;

  profileList = [];
  currentProfileDataId = {};
  offsetData = {
    top: 0,
  };
  isFetchingList = true;
  activeTabValue = TAB_LIST[0].value;

  constructor() {
    makeAutoObservable(this);
  }

  setSwiperInstance = (swiper) => {
    this.swiper = swiper;
  };

  setFetchingList = (isFetching) => {
    this.isFetchingList = isFetching;
  };

  setCurrentProfileId = (profileId) => {
    this.currentProfileDataId = profileId;
  };

  setProfileList = (profileList = [], isInit) => {
    const dataProfileList = profileList.map((profile) => ({
      ...profile,
      isTweet: null, // null | boolean
      activePhotoIndex: 0,
      isStatusShow: false,
      isOrgProfileShow: false,
      statusData: getStatusData(profile),
      organizationData: ORGANIZATION_DATA,
      isHideMoreProfileInfo: true,
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

  setOffsetData = (offsetData) => {
    this.offsetData = {
      ...this.offsetData,
      ...offsetData,
    };
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
    return profileData || {};
  }

  updateTabValue = (tabValue) => {
    this.activeTabValue = tabValue;
  };
}

export default new SwiperStore();
