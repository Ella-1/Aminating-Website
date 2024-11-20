"use client"
import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SringImage from '@/assets/spring.png'
import Image from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export const CallToAction = () => {
  const sessionRef = useRef(null);
  const {scrollYProgress} = useScroll({
      target: sessionRef,
      offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <section ref={sessionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
          <div className='section-heading relative'>
          <h2 className="section-title">Sign Up for free Today.</h2>
          <p className="section-description mt-5" >Celeberate the jou of accomplishment with an app designed to track your progress</p>
            <motion.img src={StarImage.src} alt='star image' width={360} className='absolute -left-[360px] -top-[137px]' style={{translateY: translateY}}/>
            <motion.img src={SringImage.src} alt='spring image' width={360} className='absolute -right-[337px] -top-[19px]' style={{translateY:translateY}} />
          </div>

      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text">
          <span>Learn More</span>
          <ArrowRight className="size-5 gap-1" />
        </button>
      </div>
      </div>
    </section>
  );
};
