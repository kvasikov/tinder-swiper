import woman01 from './assets/photos/woman-photo-01.png';
import woman02 from './assets/photos/woman-photo-02.png';
import man01 from './assets/photos/man-photo-01.png';

/**
 * STATUS
 * 'longTermPartner' - долгосрочный партнер
 * 'justHaveFun' - просто повеселиться
 * 'longOrShortTermPartner' - долго или краткосрочно
 * 'lookingForFriends' - ищу друзей
 * 'stillFiguringItOut' - все еще разбираюсь
 * 'expressRelationship' - экспресс отношения
 */

export const PROFILE_LIST = [
  {
    id: 1,
    webStatus: 'online', // статус профиля - в сети или не в сети [online | offline]
    photoList: [woman01, woman02],
    infoData: {
      name: 'Мария',
      age: 34,
      status: 'longTermPartner',
      tagList: ['Путешествия', 'Языковой обмен', 'Мотоциклы', 'Спорт', 'Сериалы'],
      growth: 182, // см
      location: 'Москва',
      education: 'Российский университет дружбы народов',
      typeOfActivity: 'Предприниматель',
    },
  },
  {
    id: 2,
    webStatus: 'offline',
    photoList: [woman02, man01],
    infoData: {
      name: 'Валерия',
      age: 28,
      status: 'justHaveFun',
      location: 'Санкт-Петербург',
      typeOfActivity: 'Фотограф',
    },
  },
  {
    id: 3,
    webStatus: 'offline',
    photoList: [man01],
    infoData: {
      name: 'Максим',
      age: 23,
      status: 'justHaveFun',
      location: 'Томск',
      typeOfActivity: 'Ресторатор',
    },
  },
];
