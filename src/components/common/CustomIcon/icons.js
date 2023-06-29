import { ReactComponent as LightningIcon } from '../../../assets/icons/lightning.svg';
import { ReactComponent as ArrowUpIcon } from '../../../assets/icons/arrow-up.svg';
import { ReactComponent as TweetIcon } from '../../../assets/icons/tweet.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/chat.svg';
import { ReactComponent as VerifyIcon } from '../../../assets/icons/verify.svg';
import { ReactComponent as BusinessIcon } from '../../../assets/icons/business.svg';
import { ReactComponent as EducationIcon } from '../../../assets/icons/education.svg';
import { ReactComponent as GeoIcon } from '../../../assets/icons/geo.svg';
import { ReactComponent as HeightIcon } from '../../../assets/icons/height.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';

const Empty = () => null;

export const ICON_LIST = {
  undefined: Empty,
  lightning: LightningIcon,
  arrowUp: ArrowUpIcon,
  tweet: TweetIcon,
  chat: ChatIcon,
  verify: VerifyIcon,
  business: BusinessIcon,
  education: EducationIcon,
  geo: GeoIcon,
  height: HeightIcon,
  home: HomeIcon,
};
