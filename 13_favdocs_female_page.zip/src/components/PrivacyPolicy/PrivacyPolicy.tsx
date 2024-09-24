import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import classes from './PrivacyPolicy.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 27:216 */
export const PrivacyPolicy: FC<Props> = memo(function PrivacyPolicy(props = {}) {
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
      <div className={classes.privacyPolicy}>Privacy Policy</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.termsConditions}>terms &amp; conditions</div>
      <div className={classes.lastUpdate1482024}>last update: 14/08/2024</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        <div className={classes.textBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
          tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque,
          sed accumsan metus.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at,
          volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque
          auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque
          tincidunt porta.
        </div>
      </div>
      <div className={classes.utLaciniaJustoSitAmetLoremSoda}>
        <ol className={classes.list}>
          <li>
            <div className={classes.textBlock4}>
              Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum,
              nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.
              Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel
              facilisis nisi tellus ac turpis.{' '}
            </div>
          </li>
          <li>
            <div className={classes.textBlock5}>
              Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum,
              nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.
              Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel
              facilisis nisi tellus.{' '}
            </div>
          </li>
          <li>
            <div className={classes.textBlock6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
              tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
            </div>
          </li>
          <li>
            <div className={classes.textBlock7}>
              Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus
              at, volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel
              neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla
              posuere neque.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
});
