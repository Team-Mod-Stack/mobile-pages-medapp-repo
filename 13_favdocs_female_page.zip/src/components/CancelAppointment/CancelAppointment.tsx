import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './CancelAppointment.module.css';
import { Ellipse18Icon } from './Ellipse18Icon.js';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import { Ellipse20Icon } from './Ellipse20Icon.js';
import { Ellipse21Icon } from './Ellipse21Icon.js';
import { Ellipse22Icon } from './Ellipse22Icon.js';
import { Ellipse23Icon } from './Ellipse23Icon.js';
import { Ellipse24Icon } from './Ellipse24Icon.js';
import { Ellipse25Icon } from './Ellipse25Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group80Icon } from './Group80Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 18:416 */
export const CancelAppointment: FC<Props> = memo(function CancelAppointment(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle97}></div>
      <div className={classes.rectangle98}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes._164}>16:04</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
      </div>
      <div className={classes.cancelAppointment}>Cancel Appointment</div>
      <div className={classes.ellipse18}>
        <Ellipse18Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse20}>
        <Ellipse20Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse22}>
        <Ellipse22Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse24}>
        <Ellipse24Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse21}>
        <Ellipse21Icon className={classes.icon11} />
      </div>
      <div className={classes.ellipse23}>
        <Ellipse23Icon className={classes.icon12} />
      </div>
      <div className={classes.ellipse25}>
        <Ellipse25Icon className={classes.icon13} />
      </div>
      <div className={classes.rescheduling}>rescheduling</div>
      <div className={classes.weatherConditions}>
        <div className={classes.textBlock}>weather conditions</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.unexpectedWork}>
        <div className={classes.textBlock3}>unexpected work</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.others}>others</div>
      <div className={classes.enterYourReasonHere}>enter your reason here...</div>
      <div className={classes.group80}>
        <Group80Icon className={classes.icon14} />
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.cancelAppointment2}>Cancel Appointment</div>
    </div>
  );
});
