import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse26Icon } from './Ellipse26Icon.js';
import { Ellipse27Icon } from './Ellipse27Icon.js';
import { Ellipse28Icon } from './Ellipse28Icon.js';
import { Ellipse29Icon } from './Ellipse29Icon.js';
import { Ellipse30Icon } from './Ellipse30Icon.js';
import { Ellipse31Icon } from './Ellipse31Icon.js';
import { Ellipse32Icon } from './Ellipse32Icon.js';
import { Ellipse33Icon } from './Ellipse33Icon.js';
import { Group12Icon } from './Group12Icon.js';
import classes from './NotificationSetting.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 23:753 */
export const NotificationSetting: FC<Props> = memo(function NotificationSetting(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle38}></div>
      <div className={classes._164}>16:04</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon3} />
      </div>
      <div className={classes.notificationSetting}>notification setting</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.generalNotification}>General Notification</div>
      <div className={classes.sound}>Sound</div>
      <div className={classes.soundCall}>Sound Call</div>
      <div className={classes.vibrate}>vibrate</div>
      <div className={classes.specialOffers}>Special Offers</div>
      <div className={classes.payments}>Payments</div>
      <div className={classes.promoAndDiscount}>Promo and discount</div>
      <div className={classes.cashback}>cashback</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.rectangle373}></div>
      <div className={classes.rectangle374}></div>
      <div className={classes.rectangle375}></div>
      <div className={classes.rectangle376}></div>
      <div className={classes.rectangle377}></div>
      <div className={classes.rectangle378}></div>
      <div className={classes.ellipse26}>
        <Ellipse26Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse28}>
        <Ellipse28Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse31}>
        <Ellipse31Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse33}>
        <Ellipse33Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse27}>
        <Ellipse27Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse29}>
        <Ellipse29Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse30}>
        <Ellipse30Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse32}>
        <Ellipse32Icon className={classes.icon12} />
      </div>
    </div>
  );
});
