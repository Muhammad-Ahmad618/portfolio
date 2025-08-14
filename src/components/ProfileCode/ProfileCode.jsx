import React, {useRef, useEffect} from 'react'
import Typed from 'typed.js'

function ProfileCode() {

    const typedE1 = useRef(null)

    useEffect(() => {
     const codeString = `const profile = {
  name: 'Muhammad Ahmad',
  title: 'Frontend Developer | Software Engineer',
  skills: [
    'React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3',
    'Bootstrap', 'Responsive Design', 'API Integration',
    'Context API', 'Git', 'UI/UX', 'Figma', 'Python', 'C++'
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
};`

   const typed = new Typed(typedE1.current, {
     strings: [codeString],
     typeSpeed:10,
     showCursor:true,
     cursorChar:'|',
   })

   return () => {
    typed.destroy();
   }
    },[])


  return (
    <div className=' text-white font-mono text-sm'>
        <pre ref={typedE1} className='whitespace-pre-wrap' />
    </div>
  )
}

export default ProfileCode
