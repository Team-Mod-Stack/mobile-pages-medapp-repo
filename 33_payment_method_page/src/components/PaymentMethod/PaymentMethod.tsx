import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse18Icon } from './Ellipse18Icon.js';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import { Ellipse20Icon } from './Ellipse20Icon.js';
import { Ellipse21Icon } from './Ellipse21Icon.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import { Ellipse37Icon } from './Ellipse37Icon.js';
import { Ellipse38Icon } from './Ellipse38Icon.js';
import { Ellipse39Icon } from './Ellipse39Icon.js';
import { Group12Icon } from './Group12Icon.js';
import classes from './PaymentMethod.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 37:1160 */
export const PaymentMethod: FC<Props> = memo(function PaymentMethod(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle40}></div>
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
      <div className={classes.paymentMethod}>Payment Method</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.creditDebitCard}>
        <div className={classes.textBlock}>credit &amp; debit card</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.morePaymentOption}>more payment option</div>
      <div className={classes.ellipse35}>
        <Ellipse35Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.rectangle39}></div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon6} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon7} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon8} />
      </div>
      <div className={classes.applePlay}>apple play</div>
      <div className={classes.addNewCard}>add new card</div>
      <div className={classes.paypal}>paypal</div>
      <div className={classes.googlePlay}>google play</div>
      <div className={classes.ellipse18}>
        <Ellipse18Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse36}>
        <Ellipse36Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse38}>
        <Ellipse38Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse20}>
        <Ellipse20Icon className={classes.icon12} />
      </div>
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon13} />
      </div>
      <div className={classes.ellipse37}>
        <Ellipse37Icon className={classes.icon14} />
      </div>
      <div className={classes.ellipse39}>
        <Ellipse39Icon className={classes.icon15} />
      </div>
      <div className={classes.ellipse21}>
        <Ellipse21Icon className={classes.icon16} />
      </div>
    </div>
  );
});
