import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import classes from './PasswordManager.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 23:781 */
export const PasswordManager: FC<Props> = memo(function PasswordManager(props = {}) {
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
      <div className={classes.passwordManager}>password manager</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.currentPassword}>
        <div className={classes.textBlock}>Current Password</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.forgotPassword}>forgot password?</div>
      <div className={classes.newPassword}>
        <div className={classes.textBlock3}>New Password</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.confirmNewPassword}>Confirm New Password</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon5} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon6} />
      </div>
      <div className={classes.rectangle373}></div>
      <div className={classes.unnamed}>*************</div>
      <div className={classes.unnamed2}>*************</div>
      <div className={classes.unnamed3}>*************</div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon7} />
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.changePassword}>Change Password</div>
    </div>
  );
});
