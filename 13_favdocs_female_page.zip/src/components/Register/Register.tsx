import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group93Icon } from './Group93Icon';
import classes from './Register.module.css';

interface Props {
  className?: string;
}
/* @figmaId 21:710 */
export const Register: FC<Props> = memo(function Register(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{' '}
      </div>
      <div className={classes.group93}>
        <Group93Icon className={classes.icon} />
      </div>
      <div className={classes.dermatologyCenter}>Dermatology center</div>
      <div className={classes.skin}>Skin</div>
      <div className={classes.firts}>Firts</div>
    </div>
  );
});
