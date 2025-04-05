import React, { useEffect } from "react";
import {
  ToastContainer,
  toast,
  cssTransition,
  ToastContentProps,
} from "react-toastify";
import Alert from "@mui/material/Alert";
import { px } from "framer-motion";
const AutoLoadToastDrawer = () => {
  const slide = cssTransition({
    enter: "slide-in-blurred-top",
    exit: "slide-out-blurred-top",
  });

  useEffect(() => {
    toast.success(Welcome, {
      position: "top-center",
      delay: 10000,
      autoClose: 6000,
      transition: slide,
      theme: "colored",
    });
    toast(SettingsToast, {
      position: "top-right",
      delay: 20000,
      autoClose: 6000,
      transition: slide,
      className: "Settings__toast",
    });
    // toast("Wow so easy !", {
    //   position: "top-center",
    //   delay: 3000,
    //   autoClose: 6000,
    //   transition: slide,
    // });
  }, []);

  return (
    <div className="">
      <ToastContainer newestOnTop />
    </div>
  );

  function Welcome({ closeToast }: ToastContentProps) {
    return <p>Welcome to Codevik!</p>;
  }

  function SettingsToast({ closeToast }: ToastContentProps) {
    return <div>Click on the gear icon to explore the settings! </div>;
  }
};

export default AutoLoadToastDrawer;
