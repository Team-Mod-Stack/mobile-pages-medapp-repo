import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon';
import { Group99Icon } from './Group99Icon';
import classes from './SignUp.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';

interface Props {
  className?: string;
}
/* @figmaId 36:186 */
export const SignUp: FC<Props> = memo(function SignUp(props = {}) {
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
      <div className={classes.newAccount}>New Account</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.fullName}>Full name</div>
      <div className={classes.password}>Password </div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.exampleExampleCom}>example@example.com</div>
      <div className={classes.email}>Email</div>
      <div className={classes.rectangle373}></div>
      <div className={classes.exampleExampleCom2}>example@example.com</div>
      <div className={classes.mobileNumber}>Mobile Number</div>
      <div className={classes.rectangle374}></div>
      <div className={classes.exampleExampleCom3}>example@example.com</div>
      <div className={classes.byContinuingYouAgreeToTermsOfU}>
        <div className={classes.textBlock}>By continuing, you agree to </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}> </span>
            <span className={classes.label2}>Terms of Use</span>
            <span className={classes.label3}> and </span>
            <span className={classes.label4}>Privacy Policy.</span>
          </p>
        </div>
      </div>
      <div className={classes.rectangle375}></div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.group99}>
        <Group99Icon className={classes.icon5} />
      </div>
      <div className={classes.orSignUpWith}>or sign up with</div>
      <div className={classes.alreadyHaveAnAccountLogIn}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label5}>already have an account? </span>
          <span className={classes.label6}>Log in</span>
        </p>
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon6} />
      </div>
      <div className={classes.unnamed}>*************</div>
      <div className={classes.dateOfBirth}>Date of birth</div>
      <div className={classes.rectangle376}></div>
      <div className={classes.dDMMYYY}>DD / MM /YYY</div>
    </div>
  );
});
