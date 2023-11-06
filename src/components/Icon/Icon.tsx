import { Color, FontSize } from '@/types';
import classNames from 'classnames';
import './index.scss';

type IconName =
  | 'CREATE_NEW_PLAN'
  | 'NOTIFICATION_ON'
  | 'NOTIFICATION_OFF'
  | 'PLAN_OPEN'
  | 'PLAN_CLOSE'
  | 'ITEM_OPEN'
  | 'ITEM_CLOSE'
  | 'OTHER_PLAN'
  | 'PROFILE'
  | 'WARNING'
  | 'AJAJA'
  | 'REFRESH'
  | 'HELP'
  | 'DROP_DOWN';

const ICON_NAME_MAP = {
  CREATE_NEW_PLAN: 'add',
  NOTIFICATION_ON: 'notifications',
  NOTIFICATION_OFF: 'notifications_off',
  PLAN_OPEN: 'lock_open',
  PLAN_CLOSE: 'lock',
  ITEM_OPEN: 'expand_more',
  ITEM_CLOSE: 'expand_less',
  OTHER_PLAN: 'calendar_month',
  PROFILE: 'account_circle',
  WARNING: 'error',
  AJAJA: 'local_fire_department',
  REFRESH: 'refresh',
  HELP: 'help',
  DROP_DOWN: 'arrow_drop_down',
};

interface IconProps {
  name: IconName;
  size?: FontSize;
  color?: Color;
  isFilled?: boolean;
}

export default function Icon({
  name,
  size = '2xl',
  color = 'orange-300',
  isFilled = false,
}: IconProps) {
  return (
    <span
      className={classNames(
        'material-symbols-outlined',
        `font-size-${size}`,
        `color-origin-${color}`,
        { 'icon--isFilled': isFilled },
      )}>
      {ICON_NAME_MAP[name]}
    </span>
  );
}