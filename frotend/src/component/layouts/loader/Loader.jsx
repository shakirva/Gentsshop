import React from "react";
import { ReactComponent as CricketBall } from "../../../Image/Loader-svg/LoaderBlackk.svg";
import "./Loader.css";

const CricketBallLoader = () => (
  <div className="cricket-ball-loader">
    <CricketBall className="spinner" />
  </div>
);

export default CricketBallLoader;