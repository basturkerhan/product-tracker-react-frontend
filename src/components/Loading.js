import React from 'react'
import LoadingScreen from "react-loading-screen";
import spinner from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="loading-screen">
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={spinner}
          text="Loading..."
        />
    </div>
  )
}

export default Loading;
