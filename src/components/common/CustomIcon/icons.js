import { ReactComponent as LightningIcon } from '../../../assets/icons/lightning.svg';
import { ReactComponent as ArrowUpIcon } from '../../../assets/icons/arrow-up.svg';
import { ReactComponent as TweetIcon } from '../../../assets/icons/tweet.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/chat.svg';

const Empty = () => null;

export const ICON_LIST = {
  undefined: Empty,
  lightning: LightningIcon,
  arrowUp: ArrowUpIcon,
  tweet: TweetIcon,
  chat: ChatIcon,
};
