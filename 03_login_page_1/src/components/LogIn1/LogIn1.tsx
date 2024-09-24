import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon';
import { Group99Icon } from './Group99Icon';
import classes from './LogIn1.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';

interface Props {
  className?: string;
}
/* @figmaId 21:739 */
export const LogIn1: FC<Props> = memo(function LogIn1(props = {}) {
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
      <div className={classes.logIn}>Log In</div>
      <div className={classes.welcome}>Welcome</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.emailOrMobileNumber}>Email or Mobile Number</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.password}>Password </div>
      <div className={classes.rectangle372}></div>
      <div className={classes.forgetPassword}>Forget Password</div>
      <div className={classes.exampleExampleCom}>example@example.com</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{' '}
      </div>
      <div className={classes.rectangle373}></div>
      <div className={classes.logIn2}>Log In</div>
      <div className={classes.group99}>
        <Group99Icon className={classes.icon5} />
      </div>
      <div className={classes.orSignUpWith}>or sign up with</div>
      <div className={classes.donTHaveAnAccountSignUp}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Don’t have an account? </span>
          <span className={classes.label2}>Sign Up</span>
        </p>
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon6} />
      </div>
      <div className={classes.unnamed}>*************</div>
    </div>
  );
});
