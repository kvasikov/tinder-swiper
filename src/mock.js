import woman01 from './assets/photos/woman-photo-01.png';
import woman02 from './assets/photos/woman-photo-02.png';
import man01 from './assets/photos/man-photo-01.png';
import man02 from './assets/photos/man-photo-02.png';

/**
 * поле relationshipIntent
 * 'longTermPartner' - долгосрочный партнер
 * 'justHaveFun' - просто повеселиться
 * 'longOrShortTermPartner' - долго или краткосрочно
 * 'lookingForFriends' - ищу друзей
 * 'stillFiguringItOut' - все еще разбираюсь
 * 'expressRelationship' - экспресс отношения
 */

export const PROFILE_LIST = [
  {
    id: '1',
    distance: 7, // километр
    infoData: {
      name: 'Мария',
      isVerified: true,
      photoList: [woman01, woman02, man02],
      bio: 'По фото не реально понять нравится тебе человек или нет. Хочу живые свидания!!!',
      birthDate: '1996-06-26T04:57:48.779Z',
      gender: 'female',
      city: {
        name: 'Красноярск',
      },
      jobs: [
        {
          company: {
            name: 'Вэри Грин',
          },
          title: {
            name: 'Шеф-флорист, декоратор студии Вэри Грин',
          },
        },
      ],
      schools: [
        {
          name: 'Школа 32 Красноярск',
        },
      ],
      recentlyActive: true,
      selectedDescriptors: [
        {
          id: 'de_1',
          name: 'Знак зодиака',
          prompt: 'Какой у тебя знак зодиака?',
          choiceSelections: [
            {
              id: '7',
              name: 'Рак',
            },
          ],
          sectionDd: 'sec_4',
          sectionName: 'Основное',
        },
        {
          id: 'de_9',
          name: 'Образование',
          prompt: 'Твое образование?',
          choiceSelections: [
            {
              id: '1',
              name: 'Бакалавриат',
            },
          ],
          sectionId: 'sec_4',
          sectionName: 'Основное',
        },
        {
          id: 'de_33',
          name: 'Планы на семью',
          prompt: 'Ты хочешь детей?',
          choiceSelections: [
            {
              id: '1',
              name: 'Я хочу детей',
            },
          ],
          sectionId: 'sec_4',
          sectionName: 'Основное',
        },
        {
          id: 'de_34',
          name: 'Вакцина от COVID',
          prompt: 'У тебя есть прививка?',
          choiceSelections: [
            {
              id: '2',
              name: 'Нет прививки',
            },
          ],
          sectionId: 'sec_4',
          sectionName: 'Основное',
        },
        {
          id: 'de_35',
          name: 'Язык любви',
          prompt: 'Какие проявления любви тебе нравятся?',
          choiceSelections: [
            {
              id: '5',
              name: 'Время вместе',
            },
          ],
          sectionId: 'sec_4',
          sectionName: 'Основное',
        },
        {
          id: 'de_3',
          name: 'Питомцы',
          prompt: 'У тебя есть питомцы?',
          choiceSelections: [
            {
              id: '6',
              name: 'Нет питомцев',
            },
          ],
          sectionId: 'sec_1',
          sectionName: 'Стиль жизнь',
        },
        {
          id: 'de_22',
          name: 'Алкоголь',
          prompt: 'Как часто ты пьешь?',
          choiceSelections: [
            {
              id: '11',
              name: 'По особым случаям',
            },
          ],
          sectionId: 'sec_1',
          sectionName: 'Стиль жизнь',
        },
        {
          id: 'de_10',
          name: 'Тренировка',
          prompt: 'Ты занимаешься спортом?',
          choiceSelections: [
            {
              id: '5',
              name: 'Часто',
            },
          ],
          sectionId: 'sec_1',
          sectionName: 'Стиль жизнь',
        },
        {
          id: 'de_4',
          name: 'Соцсети',
          prompt: 'Какая у тебя активность в соцсетях?',
          choiceSelections: [
            {
              id: '2',
              name: 'Активный пользователь',
            },
          ],
          sectionId: 'sec_1',
          sectionName: 'Стиль жизнь',
        },
      ],
      relationshipIntent: {
        descriptorChoiceId: 'justHaveFun',
        title: 'Просто повеселиться',
      },
    },
  },
  {
    id: '2',
    distance: 2,
    infoData: {
      name: 'Валерия',
      isVerified: false,
      photoList: [woman02, man02],
      bio: 'inst: @insta',
      birthDate: '1992-06-26T04:57:48.779Z',
      gender: 'female',
      city: {
        name: 'Томск',
      },
      jobs: [],
      schools: [],
      recentlyActive: false,
      selectedDescriptors: [],
      relationshipIntent: {
        descriptorChoiceId: 'longTermPartner',
        title: 'Долгосрочный партнер',
      },
    },
  },
  {
    id: '3',
    distance: 14,
    infoData: {
      name: 'Максим',
      isVerified: true,
      photoList: [man01],
      bio: '',
      birthDate: '1998-02-26T04:57:48.779Z',
      gender: 'male',
      city: {
        name: 'Красноярск',
      },
      jobs: [],
      schools: [],
      recentlyActive: false,
      selectedDescriptors: [
        {
          id: 'de_35',
          name: 'Язык любви',
          prompt: 'Какие проявления любви тебе нравятся?',
          choiceSelections: [
            {
              id: '5',
              name: 'Время вместе',
            },
          ],
          sectionId: 'sec_4',
          sectionName: 'Основное',
        },
      ],
      relationshipIntent: {
        descriptorChoiceId: 'longTermPartner',
        title: 'Долгосрочный партнер',
      },
    },
  },
];
