import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";

let hasAnimated = false;

function ProfileCode() {
  const [done, setDone] = useState(hasAnimated);
  const typedE1 = useRef(null);
  const codeString = `const profile = {
  name: 'Muhammad Ahmad',
  title: 'Frontend Developer | Software Engineer',
  skills: [
    'Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
    'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'API Integration',
    'Context API', 'Zustand', 'Git', 'UI/UX', 'Figma', 'Python',
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  useEffect(() => {
    if (!hasAnimated) {
      const typed = new Typed(typedE1.current, {
        strings: [codeString],
        typeSpeed: 10,
        showCursor: true,
        cursorChar: "|",
        onComplete: () => {
          hasAnimated = true;
          setDone(true);
        },
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className=" text-white font-mono text-sm min-h-[26rem] ">
      {done ? (
        <pre className="whitespace-pre-wrap">{codeString}</pre>
      ) : (
        <pre ref={typedE1} className="whitespace-pre-wrap" />
      )}
    </div>
  );
}

export default ProfileCode;
