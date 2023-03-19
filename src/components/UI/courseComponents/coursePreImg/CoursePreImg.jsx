import React, { useState, useRef, useEffect } from "react";
import CourseHoverVideo from "../courseHoverVideo/CourseHoverVideo";
import classes from "./CoursePreImg.module.scss";
import Hls from "hls.js";

function CoursePreImg({ course }) {
  const [isHover, setIsHover] = useState(false);
  const vidRef = useRef(null);
  const vidLink = course.meta.courseVideoPreview?.link;
  const vidDuration = course.meta.courseVideoPreview?.duration;

  const mouseEnter = () => {
    setIsHover(true);
    if (vidLink && vidRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(vidLink);
        hls.attachMedia(vidRef.current);
        vidRef.current.play();
      } else if (vidRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        vidRef.current.src = vidLink;
        vidRef.current.play();
      } else {
        console.error("HLS is not supported in this browser.");
      }
    }
  };

  const mouseLeave = () => {
    setIsHover(false);
    if (vidLink && vidRef.current) {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  };

  const previewClasses = [classes.preview_image];
  if (!vidLink || vidDuration < 1) {
    previewClasses.push(classes.preview_image_disable_video);
  }

  return (
    <div
      className={previewClasses.join(" ")}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {isHover && vidLink && vidDuration > 0 ? (
        <CourseHoverVideo
          vidRef={vidRef}
          vidSrc={vidLink}
        />
      ) : (
        <img
          className={classes.preview_image__img}
          src={course.previewImageLink + "/cover.webp"}
          alt="imageCourse"
        />
      )}
    </div>
  );
}

export default CoursePreImg;
