import React, { useEffect } from 'react';
import { ToastContainer, toast, cssTransition } from 'react-toastify';

const AutoLoadToastDrawer = () => {


  const swing = cssTransition({
    enter: 'fade-in',
    exit:'slide-out-blurred-top'
  });


  useEffect(()=>{
  

   
    toast('Wow so easy !', {position: 'top-center', delay: 2500, transition:swing});
    toast('Wow so easy !',{position: 'top-center', delay: 3000, transition:swing});
    toast('Wow so easy !',{position: 'top-center', delay: 3500, transition:swing});
    toast('Welcome User!',{
      position: 'top-center',
      delay: 2000,
      transition: swing
    });
 
  },[]);

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <ToastContainer />
    </div>
  );
};

export default AutoLoadToastDrawer;