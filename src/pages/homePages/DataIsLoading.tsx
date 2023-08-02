// import React from "react";

import { RotatingLines } from "react-loader-spinner";

const DatasIsaLoading = () => {
  return (
    <>
      <RotatingLines
        strokeColor="#8A2BE2"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </>
  );
};

export default DatasIsaLoading;
