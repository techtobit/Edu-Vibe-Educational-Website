import React from 'react';
import { Comet, Ellipsis, Ring, Ripple } from 'react-load-animations';

const ReloadAnimation = () => {
 return (
  <>
   {/* react spiner  */}
   <div className="reload  w-full flex justify-center">
    <Ripple width={200} height={200} />
   </div>

  </>

 );
};

export default ReloadAnimation;