import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.menu}>Menu</div>
      <div className={classes.aboutUs}>About Us</div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes.kantinku}>Kantinku</div>
      <div className={classes.weDeliverDeliciousHealthyFood}>
        <div className={classes.textBlock}>We deliver </div>
        <div className={classes.textBlock2}>delicious &amp; </div>
        <div className={classes.textBlock3}>healthy food</div>
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.downloadRemovebgPreview1}></div>
      <div className={classes.unnamed_1_RemovebgPreview1}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.daftarMenu}>Daftar Menu</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
    </div>
  );
});
