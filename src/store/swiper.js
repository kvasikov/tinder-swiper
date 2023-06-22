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

  constructor() {
    makeAutoObservable(
      this,
      {
        profileList: observable,
        swiperInstance: observable,
        setSwiperInstance: action,
        setProfileList: action,
      },
      { autoBind: true },
    );
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
}

export default new SwiperStore();
