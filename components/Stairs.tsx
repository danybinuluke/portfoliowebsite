import {motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const totalsteps = 6;
  return totalsteps - index - 1;
}

const Stairs = () => {
  const pathname = usePathname()
  const [stairKey, setStairKey] = useState(0)

  useEffect(() => {
    setStairKey(prev => prev + 1)
  }, [pathname])

  return ( 
    <>
      {[...Array(6)].map((_, index) => (
    <motion.div key={`${stairKey}-${index}`} variants={stairAnimation}
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