import React, { useEffect } from "react";
import AutoLoadToastDrawer from "../../components/ProUI_Elements/Toasts/AutoLoadToastDrawer";
import MainGrid from "./MainGrid";

const Dashboard_Home1: React.FC = () => {
  return (
    <>
      {/* Key Metrics Summary - Start */}
      <AutoLoadToastDrawer />
      <MainGrid />
      {/* Key Metrics Summary - End */}
    </>
  );
};

export default Dashboard_Home1;
