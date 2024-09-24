import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import { MaskGroupIcon } from './MaskGroupIcon.js';
import classes from './PaymentMethod.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 39:1277 */
export const PaymentMethod: FC<Props> = memo(function PaymentMethod(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle124}></div>
      <div className={classes.maskGroup}>
        <MaskGroupIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle38}></div>
      <div className={classes._164}>16:04</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon3} />
      </div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon4} />
      </div>
      <div className={classes.addCard}>Add Card</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon5} />
      </div>
      <div className={classes.cardHolderName}>Card holder name</div>
      <div className={classes.cardHolderName2}>Card holder name</div>
      <div className={classes.expiryDate}>Expiry date</div>
      <div className={classes.johnDoe}>John Doe</div>
      <div className={classes._428}>04/28</div>
      <div className={classes.cardNumber}>card number</div>
      <div className={classes.expiryDate2}>Expiry date</div>
      <div className={classes.rectangle127}></div>
      <div className={classes.saveCard}>save card</div>
      <div className={classes.cVV}>CVV</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.rectangle125}></div>
      <div className={classes.rectangle126}></div>
      <div className={classes._0000000}>000 000 000 00</div>
      <div className={classes._00000002}>000 000 000 00</div>
      <div className={classes._4282}>04/28</div>
      <div className={classes._000}>0000</div>
      <div className={classes.johnDoe2}>John Doe</div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon6} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon7} />
      </div>
    </div>
  );
});
