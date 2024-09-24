import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import classes from './Settings.module.css';
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
/* @figmaId 22:675 */
export const Settings: FC<Props> = memo(function Settings(props = {}) {
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
      <div className={classes.settings}>Settings</div>
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
      <div className={classes.frame4}>
        <div className={classes.notificationSetting}>
          <div className={classes.textBlock}>notification setting</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.passwordManager}>
          <div className={classes.textBlock3}>password manager</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes.deleteAccount}>delete account</div>
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
    </div>
  );
});
