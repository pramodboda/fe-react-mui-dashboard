import React, { useEffect } from 'react';
import { ToastContainer, toast, cssTransition, ToastContentProps } from 'react-toastify';
import Alert from '@mui/material/Alert';
const AutoLoadToastDrawer = () => {


  const slide = cssTransition({
    enter: 'slide-in-blurred-top',
    exit:'slide-out-blurred-top'
  });


  useEffect(()=>{
  

    toast(Welcome,{
      position: 'top-center',
      delay: 1000,
      autoClose: 8000,
      transition: slide
    });
    toast('Wow so easy !', {position: 'top-center', delay: 2000, autoClose: 7000, transition:slide});
    toast('Wow so easy !',{position: 'top-center', delay: 3000, autoClose: 6000, transition:slide});

 
  },[]);

  return (
    <div className="">
      <ToastContainer newestOnTop/>
    </div>
  );


  function Welcome({ closeToast }: ToastContentProps) {
    return (
   <Alert variant="filled" severity="success">
  This is a filled success Alert.
</Alert>
    );

    }
};

export default AutoLoadToastDrawer;