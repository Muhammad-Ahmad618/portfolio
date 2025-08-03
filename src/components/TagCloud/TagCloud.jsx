import React, { useState, useEffect } from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon, index) =>
      renderSimpleIcon({
        icon,
        size: 68,
        aProps: {
          onClick: (e) => e.preventDefault(),
          key: index, // ✅ to avoid React key warnings
          title: icon.title,
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  'html5',
  'css3',
  'javascript',
  'bootstrap',
  'tailwindcss',
  'react',
  'postman',
  'git',
  'python',
  'pandas',
  'numpy',
  'figma',
  'axios',
  'wordpress'
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
  <div className='flex justify-center my-10'>
  <Cloud
     options={{
      tooltip: true,
      depth: 1,
      initial: [0.1, -0.1],
      reverse: true,
      maxSpeed: 0.05,
      minSpeed: 0.02,
      wheelZoom: false,
      zoom: 0.9,
    }}>{icons}</Cloud>
  </div>
  )
};

export default DynamicIconCloud;
