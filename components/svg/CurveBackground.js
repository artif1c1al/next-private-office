// import React from "react";
import { CurveSvg, CurvePath } from "../styled";

export default function CurveBackground() {
  return (
    <CurveSvg
      viewBox="0 0 1481 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="40vh"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1481"
          y1="235.001"
          x2="-15.6763"
          y2="235.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2196F3" />
          <stop offset="1" stopColor="#1EC3AF" />
        </linearGradient>
      </defs>
    </CurveSvg>
  );
}
