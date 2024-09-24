import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse9Icon } from './Ellipse9Icon.js';
import { Ellipse10Icon } from './Ellipse10Icon.js';
import { Ellipse11Icon } from './Ellipse11Icon.js';
import { Ellipse12Icon } from './Ellipse12Icon.js';
import { Ellipse13Icon } from './Ellipse13Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group49Icon } from './Group49Icon.js';
import classes from './Notification.module.css';
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
/* @figmaId 14:299 */
export const Notification: FC<Props> = memo(function Notification(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle36}></div>
      <div className={classes.rectangle72}></div>
      <div className={classes.rectangle73}></div>
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
      <div className={classes.notification}>Notification</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.news}>News </div>
      <div className={classes.rectangle71}></div>
      <div className={classes._2M}>2 m</div>
      <div className={classes.markAll}>Mark all </div>
      <div className={classes.today}>Today</div>
      <div className={classes.yesterday}>Yesterday</div>
      <div className={classes._15April}>15 April</div>
      <div className={classes._3H}>3 h</div>
      <div className={classes._2H}>2 h</div>
      <div className={classes._1D}>1 d</div>
      <div className={classes._5D}>5 d</div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon10} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon11} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon12} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon13} />
      </div>
      <div className={classes.scheduledAppointment}>scheduled appointment</div>
      <div className={classes.medicalNotes}>medical notes</div>
      <div className={classes.scheduledChange}>scheduled Change</div>
      <div className={classes.scheduledAppointment2}>scheduled appointment</div>
      <div className={classes.medicalHistoryUpdate}>medical history update</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon14} />
      </div>
      <div className={classes.group49}>
        <Group49Icon className={classes.icon15} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon16} />
      </div>
    </div>
  );
});
