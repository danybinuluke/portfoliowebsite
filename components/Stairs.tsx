
import {motion} from 'framer-motion'

const stairAnimation={
  initial:{
    top:"0%"
  },
  animate:{
    top:"100%",
  },
  exit:{
    top:["100%","0%"],
  },
}; 

const reverseIndex = (index: number) => {
  const totalsteps = 6; // Total number of steps
  return totalsteps - index - 1; // Reverse the index
}
const Stairs = () => {
  return ( 
    <>
      {[...Array(6)].map((_, index) => (
    <motion.div key={index} variants={stairAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4,ease:'easeInOut',delay: reverseIndex(index) * 0.1 }}
    className='w-full h-full bg-white relative top-0 left-0 right-0 pointer-events-none z-40 flex'
    
    />
      ))}
    </>
  );
};



export default Stairs 