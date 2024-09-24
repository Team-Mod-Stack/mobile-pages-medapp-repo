import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './EditProfile.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group13Icon } from './Group13Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 15:638 */
export const EditProfile: FC<Props> = memo(function EditProfile(props = {}) {
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
      <div className={classes.profile}>Profile</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.fullName}>Full Name</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.phoneNumber}>Phone number</div>
      <div className={classes.rectangle372}></div>
      <div className={classes.email}>email</div>
      <div className={classes.rectangle373}></div>
      <div className={classes.dateOfBirth}>Date of birth</div>
      <div className={classes.rectangle374}></div>
      <div className={classes.rectangle375}></div>
      <div className={classes.johnDoe}>John Doe</div>
      <div className={classes.johndoeExampleCom}>
        <a href='mailto:Johndoe@example.com' target='_blank' rel='noreferrer' className={classes.textBlock}>
          Johndoe@example.com
        </a>
      </div>
      <div className={classes._12356789000}>+123 567 89000</div>
      <div className={classes.dDMMYYY}>DD / MM /YYY</div>
      <div className={classes.updateProfile}>Update Profile</div>
      <div className={classes.rectangle83}></div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
      </div>
      <div className={classes.djvstock_Create_a_photo_of_a_y}></div>
      <div className={classes.group13}>
        <Group13Icon className={classes.icon6} />
      </div>
    </div>
  );
});
