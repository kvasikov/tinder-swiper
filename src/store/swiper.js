import { action, configure, makeAutoObservable, observable, runInAction } from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: false,
  disableErrorBoundaries: true,
});

export class SwiperStore {
  profileList = [];
  swiperInstance = null;
  isSwiperEnable = true;

  constructor() {
    makeAutoObservable(this, {
      profileList: observable,
      swiperInstance: observable,
      isSwiperEnable: observable,
      setSwiperInstance: action,
      setProfileList: action,
      setSwiperStatus: action,
    });
  }

  setSwiperInstance = (swiperInstance) => {
    runInAction(() => {
      this.swiperInstance = swiperInstance;
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
}

export default new SwiperStore();
