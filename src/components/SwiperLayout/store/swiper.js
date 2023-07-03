import { configure, makeAutoObservable, toJS } from 'mobx';
import { getDescriptorList, getStatusData } from './utils';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

export class SwiperStore {
  profileList = [];
  currentProfileDataId = {};
  isHideMoreProfileInfo = true;
  offsetTop = 0;
  isFetchingList = true;

  constructor() {
    makeAutoObservable(this);
  }

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

  setMoreInfoStatus = (status) => {
    this.isHideMoreProfileInfo = status;
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
    return profileData || {};
  }
}

export default new SwiperStore();
