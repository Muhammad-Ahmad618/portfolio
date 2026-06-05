import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const codeString = `const developer = {
  name: 'Muhammad Ahmad',
  role: 'Frontend Developer',
  location: 'Islamabad, Pakistan',
  skills: [
    'React.js', 'Next.js', 'TypeScript','JavaScript',
    'Tailwind CSS', 'GraphQL','REST APIs', 'Zustand',
    'Git', 'React Query','Node.js', 'Express.js', 'PostgreSQL'
  ],
  projects: [
    'FixRight Admin Panel',
    'Lumi Foods Super App',
    'Enatega Food Delivery',
    'UroVision - AI Kidney Detection'
  ],
  status: 'Open to Work',
  contact: 'muhammad.ahmad.86.18@gmail.com'
};`;

function ProfileCode() {
  const elRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const typed = new Typed(elRef.current, {
      strings: [codeString],
      typeSpeed: 10,
      showCursor: true,
      cursorChar: "|",
      onComplete: () => {
        hasAnimated.current = true;
      },
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="text-white font-mono text-sm min-h-[24rem]">
      <pre ref={elRef} className="whitespace-pre-wrap" />
    </div>
  );
}

export default ProfileCode;
