import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AllAppointmentCancelled.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group71Icon } from './Group71Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 18:204 */
export const AllAppointmentCancelled: FC<Props> = memo(function AllAppointmentCancelled(props = {}) {
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
      <div className={classes.allAppointment}>All appointment</div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle97}></div>
      <div className={classes.rectangle95}></div>
      <div className={classes.rectangle96}></div>
      <div className={classes.upcoming}>Upcoming</div>
      <div className={classes.complete}>Complete</div>
      <div className={classes.cancelled}>Cancelled</div>
      <div className={classes.rectangle83}></div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.dermatoEndocrinology}>Dermato-Endocrinology</div>
      <div className={classes.djvstock_Create_a_professional}></div>
      <div className={classes.rectangle98}></div>
      <div className={classes.addReview}>Add Review</div>
      <div className={classes.rectangle99}></div>
      <div className={classes.drAlexanderBennettPhD}>Dr. Alexander Bennett, Ph.D.</div>
      <div className={classes.dermatoGenetics}>Dermato-Genetics</div>
      <div className={classes.djvstock_Create_a_professional2}></div>
      <div className={classes.djvstock_Create_a_professional3}></div>
      <div className={classes.rectangle100}></div>
      <div className={classes.addReview2}>Add Review</div>
      <div className={classes.rectangle103}></div>
      <div className={classes.drAlexanderBennettPhD2}>Dr. Alexander Bennett, Ph.D.</div>
      <div className={classes.dermatoGenetics2}>Dermato-Genetics</div>
      <div className={classes.djvstock_Create_a_professional4}></div>
      <div className={classes.djvstock_Create_a_professional5}></div>
      <div className={classes.rectangle104}></div>
      <div className={classes.addReview3}>Add Review</div>
      <div className={classes.rectangle115}></div>
      <div className={classes.group71}>
        <Group71Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle101}></div>
      <div className={classes.drSophiaMartinezPhD}>Dr. Sophia Martinez, Ph.D.</div>
      <div className={classes.cosmeticBioengineering}>Cosmetic Bioengineering</div>
      <div className={classes.djvstock_Create_a_professional6}></div>
      <div className={classes.rectangle102}></div>
      <div className={classes.addReview4}>Add Review</div>
    </div>
  );
});
