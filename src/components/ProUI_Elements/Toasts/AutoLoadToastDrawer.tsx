import React, { useEffect } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import type { ToastContentProps } from "react-toastify"; // ✅ Type-only import


function Welcome({ closeToast }: ToastContentProps) {
  return <p>Welcome to Codevik!</p>;
}

function SettingsToast({ closeToast }: ToastContentProps) {
  return <div>Click on the gear icon to explore the settings!</div>;
}

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
  }, []);

  return (
    <div>
      <ToastContainer newestOnTop />
    </div>
  );


};

export default AutoLoadToastDrawer;
