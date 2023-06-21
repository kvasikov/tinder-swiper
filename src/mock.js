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
    photoList: ['https://www.photo1.png', 'https://www.photo2.png'],
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
    photoList: ['https://www.photo1.png', 'https://www.photo2.png'],
    infoData: {
      name: 'Валерия',
      age: 28,
      status: 'justHaveFun',
      location: 'Санкт-Петербург',
      typeOfActivity: 'Фотограф',
    },
  },
];
