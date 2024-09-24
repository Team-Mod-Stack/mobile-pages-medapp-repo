import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import classes from './HelpCenterFAQ.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon10 } from './VectorIcon10.js';
import { VectorIcon11 } from './VectorIcon11.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 31:289 */
export const HelpCenterFAQ: FC<Props> = memo(function HelpCenterFAQ(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.rectangle373}></div>
      <div className={classes.rectangle374}></div>
      <div className={classes.rectangle375}></div>
      <div className={classes.rectangle376}></div>
      <div className={classes.rectangle377}></div>
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
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle120}></div>
      <div className={classes.rectangle121}></div>
      <div className={classes.rectangle122}></div>
      <div className={classes.rectangle97}></div>
      <div className={classes.rectangle119}></div>
      <div className={classes.contactUs}>Contact us</div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.helpCenter}>Help center</div>
      <div className={classes.howCanWeHelpYou}>how can we help you?</div>
      <div className={classes.search}>Search...</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
      </div>
      <div className={classes.loremIpsumDolorSitAmet}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.popularTopic}>Popular Topic</div>
      <div className={classes.general}>General</div>
      <div className={classes.services}>Services</div>
      <div className={classes.loremIpsumDolorSitAmet2}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmet3}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmet4}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmet5}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmet6}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmet7}>Lorem ipsum dolor sit amet?</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
        tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon6} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon7} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon8} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon9} />
      </div>
      <div className={classes.vector9}>
        <VectorIcon9 className={classes.icon10} />
      </div>
      <div className={classes.vector10}>
        <VectorIcon10 className={classes.icon11} />
      </div>
      <div className={classes.vector11}>
        <VectorIcon11 className={classes.icon12} />
      </div>
    </div>
  );
});
