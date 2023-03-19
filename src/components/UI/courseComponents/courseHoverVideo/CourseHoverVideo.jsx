import React, { useRef } from "react";
import "./CourseHoverVideo.scss";

function CourseHoverVideo({ vidRef, vidSrc }) {
  return (
    <video
      className="preview-video"
      ref={vidRef}
      muted
      loop
    >
      <source
        src={vidSrc}
        type="application/x-mpegURL"
      />
    </video>
  );
}

export default CourseHoverVideo;
