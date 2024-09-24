import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group14Icon } from './Group14Icon.js';
import { Group18Icon } from './Group18Icon.js';
import { Group55Icon } from './Group55Icon.js';
import classes from './ReviewSummary.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 42:1424 */
export const ReviewSummary: FC<Props> = memo(function ReviewSummary(props = {}) {
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
      <div className={classes.rectangle118}></div>
      <div className={classes.payment}>Payment</div>
      <div className={classes._1000}>$ 100.00</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.rectangle127}></div>
      <div className={classes.payNow}>Pay now</div>
      <div className={classes.group55}>
        <Group55Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle53}></div>
      <div className={classes.rectangle54}></div>
      <div className={classes._5}>5 </div>
      <div className={classes._60}>60</div>
      <div className={classes.group14}>
        <Group14Icon className={classes.icon6} />
      </div>
      <div className={classes.group18}>
        <Group18Icon className={classes.icon7} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.dermatoEndocrinology}>Dermato-Endocrinology</div>
      <div className={classes.dateHour}>Date / Hour</div>
      <div className={classes.amount}>Amount</div>
      <div className={classes.month24Year100AM}>Month 24, Year / 10:00 aM</div>
      <div className={classes._10002}>$100.00</div>
      <div className={classes.duration}>Duration</div>
      <div className={classes._30Minutes}>30 minutes</div>
      <div className={classes.bookingFor}>Booking for</div>
      <div className={classes.duration2}>Duration</div>
      <div className={classes.total}>Total</div>
      <div className={classes.paymentMethod}>Payment Method</div>
      <div className={classes.change}>Change</div>
      <div className={classes.anotherPerson}>another person</div>
      <div className={classes._30Minutes2}>30 minutes</div>
      <div className={classes._100}>$100</div>
      <div className={classes.card}>Card</div>
      <div className={classes.text}> </div>
      <div className={classes.text2}> </div>
      <div className={classes.djvstock_Create_a_professional}></div>
    </div>
  );
});
