"use client"
import ArrowRight from '@/assets/arrow-right.svg'
import Cog from '@/assets/cog.png'
import Image from 'next/image';
import CylinderImage from '@/assets/cylinder.png'
import NoddleImage from '@/assets/noodle.png'
import { easeInOut, motion, useScroll , useTransform, useMotionValueEvent} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])

  useMotionValueEvent(scrollYProgress,'change', (latestValue) => console.log(latestValue))
  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#183EC2,#EAEEFE_100%)] overflow-x-clip z-20'>
      <div className="container">
      <div className='md:flex items-center'>
      <div className='md:w-[478px]'>
        <div className="tag">
          Version 2.0 is here
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to Productivity</h1>
        <p className="text-xl tracking-tight text-[#010D3E] mt-6">Celebrate the joy of accompolishment with an app design to trace your progress mortivate your effort and celebrate your success</p>

        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">Learn More</button>
          <span><ArrowRight className="size-5" /></span>
          
        </div>
        </div>

    {/* Hero Image */}
        <div className='mt-20 md:mt-0  md:h-[648px] md:flex-1 relative' >
          <motion.img src={Cog.src} alt='cog Image'  className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6' animate={{ translateY: [-30,30]}} transition={{repeat:Infinity, repeatType:'mirror', duration: 5, ease:easeInOut}}/>
          <motion.img src={CylinderImage.src} width={220} height={220}  alt='cylinder image' className='hidden md:block -top-8 -left-32 md:absolute' style={{translateY: translateY,}}/>
          <motion.img src={NoddleImage.src} alt='noddle Image' width={220} height={220} className='hidden md:block absolute top-[510px] left-[450px]' style={{translateY: translateY, rotate:30}} />
        </div>
      </div>
      </div>
    </section>
  );
};
