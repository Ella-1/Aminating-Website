"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import ProductImage from '@/assets/product-image.png'
import Image from 'next/image';
import PrymidImage from '@/assets/pyramid.png'
import TubleImage from '@/assets/tube.png'
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sessionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:sessionRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress,[0,1], [150,-150])
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
      <div className='section-heading '>
      <div className='flex justify-center'>
       <div className='tag'>Boost your Productivity</div>
       </div>
        <h2 className='section-title mt-5'>A more Effective way to track your progress</h2>
        <p className='section-description  mt-5'>Effordlessly Turn your ideas into fully functional, responsive saaas website in just minutes with template </p>
      </div>
        <div className='relative'>
        <Image src={ProductImage} alt='Product Image' className='mt-10'/>
        <motion.img src={PrymidImage.src} alt='prymid image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32' style={{translateY}}/>
        <motion.img src={TubleImage.src} alt='tube Image' height={248} className='hidden md:block absolute bottom-24 -left-36' style={{translateY}}/>
        </div>
      </div>
    </section>
  );
};
