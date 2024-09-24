import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group12Icon } from './Group12Icon.js';
import { Group49Icon } from './Group49Icon.js';
import { Group50Icon } from './Group50Icon.js';
import { Group51Icon } from './Group51Icon.js';
import { Group52Icon } from './Group52Icon.js';
import { Group60Icon } from './Group60Icon.js';
import classes from './Schedule.module.css';
import { Vector158StrokeIcon } from './Vector158StrokeIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 13:752 */
export const Schedule: FC<Props> = memo(function Schedule(props = {}) {
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
      <div className={classes.rectangle33}></div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.rectangle78}></div>
      <div className={classes.rectangle79}></div>
      <div className={classes.rectangle80}></div>
      <div className={classes.vector158Stroke}>
        <Vector158StrokeIcon className={classes.icon5} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon6} />
      </div>
      <div className={classes.group49}>
        <Group49Icon className={classes.icon7} />
      </div>
      <div className={classes.group50}>
        <Group50Icon className={classes.icon8} />
      </div>
      <div className={classes.group51}>
        <Group51Icon className={classes.icon9} />
      </div>
      <div className={classes.group52}>
        <Group52Icon className={classes.icon10} />
      </div>
      <div className={classes.drOliviaTurnerMD}>Dr. Olivia Turner, M.D.</div>
      <div className={classes.rectangle70}></div>
      <div className={classes.group60}>
        <Group60Icon className={classes.icon11} />
      </div>
      <div className={classes.rectangle87}></div>
      <div className={classes.rectangle93}></div>
      <div className={classes.rectangle84}></div>
      <div className={classes.rectangle94}></div>
      <div className={classes.rectangle90}></div>
      <div className={classes.rectangle91}></div>
      <div className={classes.rectangle82}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.rectangle83}></div>
      <div className={classes.rectangle88}></div>
      <div className={classes.rectangle89}></div>
      <div className={classes.rectangle85}></div>
      <div className={classes.rectangle95}></div>
      <div className={classes.rectangle86}></div>
      <div className={classes.rectangle96}></div>
      <div className={classes._90Am}>9:00 am</div>
      <div className={classes._1130Am}>11:30 am</div>
      <div className={classes._20Pm}>2:00 pm</div>
      <div className={classes._930Am}>9:30 am</div>
      <div className={classes._120M}>12:00 m</div>
      <div className={classes._230Pm}>2:30 pm</div>
      <div className={classes._100Am}>10:00 am</div>
      <div className={classes._1230M}>12:30 m</div>
      <div className={classes._30Pm}>3:00 pm</div>
      <div className={classes._1930Am}>19:30 am</div>
      <div className={classes._10Pm}>1:00 pm</div>
      <div className={classes._330Pm}>3:30 pm</div>
      <div className={classes._110Am}>11:00 am</div>
      <div className={classes._130Pm}>1:30 pm</div>
      <div className={classes._40Pm}>4:00 pm</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes._22}>22</div>
      <div className={classes._23}>23</div>
      <div className={classes._24}>24</div>
      <div className={classes._25}>25</div>
      <div className={classes._26}>26</div>
      <div className={classes._27}>27</div>
      <div className={classes.mon}>Mon</div>
      <div className={classes.tue}>Tue</div>
      <div className={classes.wed}>Wed</div>
      <div className={classes.thu}>thu</div>
      <div className={classes.fri}>fri</div>
      <div className={classes.sat}>sat</div>
      <div className={classes.rectangle182}></div>
      <div className={classes.rectangle832}></div>
      <div className={classes.rectangle842}></div>
      <div className={classes.rectangle862}></div>
      <div className={classes.rectangle872}></div>
      <div className={classes.rectangle852}></div>
      <div className={classes.patientDetails}>Patient Details</div>
      <div className={classes.fullName}>Full Name</div>
      <div className={classes.describeYourProblem}>Describe your problem</div>
      <div className={classes.age}>Age</div>
      <div className={classes.gender}>Gender</div>
      <div className={classes.female}>female</div>
      <div className={classes.male}>male</div>
      <div className={classes.yourself}>yourself</div>
      <div className={classes.anotherPerson}>another person</div>
      <div className={classes.other}>Other</div>
      <div className={classes.enterYourProblemHere}>enter your Problem here...</div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon12} />
      </div>
      <div className={classes.month}>Month</div>
      <div className={classes.availableTime}>Available Time</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle372}></div>
      <div className={classes.janeDoe}>Jane Doe</div>
      <div className={classes._30}>30</div>
    </div>
  );
});
