import { action, configure, makeAutoObservable, observable } from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

export class SwiperStore {
  profileList = [];
  swiperInstance = null;

  constructor() {
    makeAutoObservable(this, {
      profileList: observable,
      swiperInstance: observable,
      setSwiperInstance: action,
      setProfileList: action,
    });
  }

  setSwiperInstance = (swiperInstance) => {
    this.swiperInstance = swiperInstance;
  };

  setProfileList = (profileList = []) => {
    this.profileList = profileList;
  };
}

export default new SwiperStore();
