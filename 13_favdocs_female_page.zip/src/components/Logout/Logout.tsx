import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Frame2Icon } from './Frame2Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group13Icon } from './Group13Icon.js';
import classes from './Logout.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 31:551 */
export const Logout: FC<Props> = memo(function Logout(props = {}) {
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
      <div className={classes.johnDoe}>John Doe</div>
      <div className={classes.profile}>Profile</div>
      <div className={classes.favourite}>favourite</div>
      <div className={classes.paymentMethod}>Payment Method</div>
      <div className={classes.privacyPolicy}>Privacy Policy</div>
      <div className={classes.settings}>Settings</div>
      <div className={classes.help}>Help</div>
      <div className={classes.logout}>Logout</div>
      <div className={classes.myProfile}>my Profile</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
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
      <div className={classes.frame2}>
        <Frame2Icon className={classes.icon11} />
      </div>
      <div className={classes.djvstock_Create_a_photo_of_a_y}></div>
      <div className={classes.group13}>
        <Group13Icon className={classes.icon12} />
      </div>
      <div className={classes.rectangle123}></div>
      <div className={classes.rectangle83}></div>
      <div className={classes.logout2}>Logout</div>
      <div className={classes.areYouSureYouWantToLogOut}>are you sure you want to log out?</div>
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle97}></div>
      <div className={classes.yesLogout}>yes, logout</div>
      <div className={classes.cancel}>cancel</div>
    </div>
  );
});
