import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './FirstScreen.module.css';
import { Group89Icon } from './Group89Icon';
import { Group90Icon } from './Group90Icon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 21:455 */
export const FirstScreen: FC<Props> = memo(function FirstScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.dermatologyCenter}>Dermatology center</div>
      <div className={classes.skin}>Skin</div>
      <div className={classes.firts}>Firts</div>
      <div className={classes.rectangle116}></div>
      <div className={classes.rectangle117}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.group89}>
        <Group89Icon className={classes.icon2} />
      </div>
      <div className={classes.group90}>
        <Group90Icon className={classes.icon3} />
      </div>
    </div>
  );
});
