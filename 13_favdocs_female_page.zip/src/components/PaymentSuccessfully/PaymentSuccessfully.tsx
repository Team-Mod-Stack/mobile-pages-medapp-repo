import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import classes from './PaymentSuccessfully.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 42:1465 */
export const PaymentSuccessfully: FC<Props> = memo(function PaymentSuccessfully(props = {}) {
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
      <div className={classes.payment}>Payment</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
      </div>
      <div className={classes.congratulation}>Congratulation</div>
      <div className={classes.paymentIsSuccessfully}>Payment is Successfully</div>
      <div className={classes.youHaveSuccessfullyBookedAnApp}>You have successfully booked an appointment with</div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon6} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon7} />
      </div>
      <div className={classes._100AM}>10:00 aM</div>
      <div className={classes.month24Year}>Month 24, Year</div>
      <div className={classes.rectangle129}></div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon8} />
      </div>
    </div>
  );
});
