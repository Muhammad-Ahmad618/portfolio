import React, { useEffect, useRef } from 'react';
import { RiReactjsFill } from "react-icons/ri"

const TagSphere = () => {
  const isInitialized = useRef(false); // <-- flag

  useEffect(() => {
    if (isInitialized.current) return; // prevent double init
    isInitialized.current = true;

    const container = '.tagcloud';
    const texts = [
      'JavaScript', 'React', 'Python', 'Figma',
      'HTML5', 'CSS3', 'MongoDB', 'GitHub',
      'Tailwind CSS', 'Express.js', 'BootStrap CSS', 'WordPress'
    ];

    const options = {
      radius: 200,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
    };

    if (window.TagCloud) {
      window.TagCloud(container, texts, options);
    }
  }, []);

  return (
    <div
      className="tagcloud mx-auto"
      style={{
        width: "450px",
        height: "500px",
        color: "white",
      }}
    />
  );
};

export default TagSphere;
