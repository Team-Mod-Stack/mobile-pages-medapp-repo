import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group18Icon } from './Group18Icon.js';
import { Group80Icon } from './Group80Icon.js';
import { Group81Icon } from './Group81Icon.js';
import { Group82Icon } from './Group82Icon.js';
import { Group83Icon } from './Group83Icon.js';
import { Group84Icon } from './Group84Icon.js';
import { Group85Icon } from './Group85Icon.js';
import classes from './Review.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 18:497 */
export const Review: FC<Props> = memo(function Review(props = {}) {
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
      <div className={classes.addReview}>Add Review</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.review}>Review</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.group81}>
        <Group81Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle99}></div>
      <div className={classes.rectangle35}></div>
      <div className={classes.enterYourCommentHere}>enter your comment here...</div>
      <div className={classes.group80}>
        <Group80Icon className={classes.icon6} />
      </div>
      <div className={classes.group85}>
        <Group85Icon className={classes.icon7} />
      </div>
      <div className={classes.group84}>
        <Group84Icon className={classes.icon8} />
      </div>
      <div className={classes.group83}>
        <Group83Icon className={classes.icon9} />
      </div>
      <div className={classes.group82}>
        <Group82Icon className={classes.icon10} />
      </div>
      <div className={classes.group18}>
        <Group18Icon className={classes.icon11} />
      </div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.dermatoEndocrinology}>Dermato-Endocrinology</div>
      <div className={classes.djvstock_Create_a_professional}></div>
    </div>
  );
});
