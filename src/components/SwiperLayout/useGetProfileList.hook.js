import { useEffect } from 'react';
// TODO: start - при реальном АПИ удалить
import woman01 from '../../assets/photos/woman-photo-01.png';
import woman02 from '../../assets/photos/woman-photo-02.png';
import man01 from '../../assets/photos/man-photo-01.png';
import man02 from '../../assets/photos/man-photo-02.png';
// end
import { useFetchReturn } from '../../hooks';
import { swiperStore } from './store';

// TODO: start - при реальном АПИ удалить
const generateKey = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const IMG_PHOTO_LIST = [woman01, woman02, man01, man02];
const NAME_LIST = ['Мария', 'Александр', 'Ибрагим', 'Ася', 'Dream', 'Толик', 'Евгения'];

const getGenerateNextList = (profileList) => {
  return profileList.map((profile) => ({
    ...profile,
    id: generateKey(),
    infoData: {
      ...profile.infoData,
      name: NAME_LIST[randomIntFromInterval(1, NAME_LIST.length - 1)],
      photoList: getMultipleRandom(
        IMG_PHOTO_LIST,
        randomIntFromInterval(1, IMG_PHOTO_LIST.length - 1),
      ),
    },
  }));
};
// end

export const useGetProfileList = () => {
  const [fetchList, isFetching] = useFetchReturn('/profile-list-mock.json');

  const { setProfileList } = swiperStore;

  useEffect(() => {
    const fetchDataList = async () => {
      const { response, error } = await fetchList();
      if (!response || error) {
        // TODO: обработать ошибку
        return;
      }

      const profileList = getGenerateNextList(response.list); // TODO: при реальном апи удалить генерацию
      setProfileList(profileList);
    };

    fetchDataList();
  }, [fetchList, setProfileList]);

  return { isFetching };
};
