import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Details.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group14Icon } from './Group14Icon.js';
import { Group18Icon } from './Group18Icon.js';
import { Group26Icon } from './Group26Icon.js';
import { Group49Icon } from './Group49Icon.js';
import { Vector158StrokeIcon } from './Vector158StrokeIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:8 */
export const Details: FC<Props> = memo(function Details(props = {}) {
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
      <div className={classes.rectangle33}></div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.group49}>
        <Group49Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle32}></div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle53}></div>
      <div className={classes.rectangle54}></div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.dermatoEndocrinology}>Dermato-Endocrinology</div>
      <div className={classes._5}>5 </div>
      <div className={classes._60}>60</div>
      <div className={classes.djvstock_Create_a_professional}></div>
      <div className={classes.vector158Stroke}>
        <Vector158StrokeIcon className={classes.icon6} />
      </div>
      <div className={classes.group26}>
        <Group26Icon className={classes.icon7} />
      </div>
      <div className={classes.group14}>
        <Group14Icon className={classes.icon8} />
      </div>
      <div className={classes.group18}>
        <Group18Icon className={classes.icon9} />
      </div>
      <div className={classes.fullName}>Full Name</div>
      <div className={classes.janeDoe}>Jane Doe</div>
      <div className={classes._30}>30</div>
      <div className={classes.problem}>Problem</div>
      <div className={classes.age}>Age</div>
      <div className={classes.gender}>Gender</div>
      <div className={classes.female}>female</div>
      <div className={classes.anotherPerson}>another person</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.month24Year}>Month 24, Year</div>
      <div className={classes.wed100AM}>Wed, 10:00 AM </div>
      <div className={classes.bookingFor}>Booking for</div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon10} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon11} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon12} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon13} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon14} />
      </div>
      <div className={classes.yourAppointment}>Your appointment</div>
    </div>
  );
});
