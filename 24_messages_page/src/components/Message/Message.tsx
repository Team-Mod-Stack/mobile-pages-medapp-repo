import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse15Icon } from './Ellipse15Icon.js';
import { Ellipse16Icon } from './Ellipse16Icon.js';
import { Ellipse17Icon } from './Ellipse17Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group49Icon } from './Group49Icon.js';
import { Group50Icon } from './Group50Icon.js';
import { Group51Icon } from './Group51Icon.js';
import classes from './Message.module.css';
import { Rectangle77Icon } from './Rectangle77Icon.js';
import { Rectangle79Icon } from './Rectangle79Icon.js';
import { Rectangle80Icon } from './Rectangle80Icon.js';
import { Rectangle81Icon } from './Rectangle81Icon.js';
import { Rectangle98Icon } from './Rectangle98Icon.js';
import { Vector45Icon } from './Vector45Icon.js';
import { Vector159Icon } from './Vector159Icon.js';
import { Vector160Icon } from './Vector160Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 14:453 */
export const Message: FC<Props> = memo(function Message(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle118}></div>
      <div className={classes.rectangle74}></div>
      <div className={classes.ellipse15}>
        <Ellipse15Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse16}>
        <Ellipse16Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle38}></div>
      <div className={classes._164}>16:04</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon3} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon4} />
      </div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon6} />
      </div>
      <div className={classes.group49}>
        <Group49Icon className={classes.icon7} />
      </div>
      <div className={classes.group50}>
        <Group50Icon className={classes.icon8} />
      </div>
      <div className={classes.group51}>
        <Group51Icon className={classes.icon9} />
      </div>
      <div className={classes.drOliviaTurner}>Dr. Olivia Turner</div>
      <div className={classes.drOliviaIsTyping}>Dr. Olivia is typing...</div>
      <div className={classes.rectangle77}>
        <Rectangle77Icon className={classes.icon10} />
      </div>
      <div className={classes.rectangle98}>
        <Rectangle98Icon className={classes.icon11} />
      </div>
      <div className={classes.rectangle78}></div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon12} />
      </div>
      <div className={classes.vector45}>
        <Vector45Icon className={classes.icon13} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon14} />
      </div>
      <div className={classes._90}>09:00</div>
      <div className={classes._943}>09:43</div>
      <div className={classes._955}>09:55</div>
      <div className={classes._930}>09:30</div>
      <div className={classes._950}>09:50</div>
      <div className={classes.rectangle79}>
        <Rectangle79Icon className={classes.icon15} />
      </div>
      <div className={classes.rectangle80}>
        <Rectangle80Icon className={classes.icon16} />
      </div>
      <div className={classes.rectangle81}>
        <Rectangle81Icon className={classes.icon17} />
      </div>
      <div className={classes.djvstock_Create_a_professional}></div>
      <div className={classes.rectangle71}></div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon18} />
      </div>
      <div className={classes.vector159}>
        <Vector159Icon className={classes.icon19} />
      </div>
      <div className={classes.vector160}>
        <Vector160Icon className={classes.icon20} />
      </div>
      <div className={classes.ellipse17}>
        <Ellipse17Icon className={classes.icon21} />
      </div>
      <div className={classes._250}>02:50</div>
      <div className={classes.writeHere}>Write Here...</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className={classes.loremIpsumDolorSitAmetConsecte4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
    </div>
  );
});
