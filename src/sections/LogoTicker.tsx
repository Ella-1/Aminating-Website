import archemyLogo from '@/assets/logo-acme.png'
import QuantumLogo from '@/assets/logo-quantum.png'
import CellistiaLogo from '@/assets/logo-celestial.png'
import echoLogo from '@/assets/logo-echo.png'
import apexLogo from '@/assets/logo-apex.png'
import paulseLogo from '@/assets/logo-pulse.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
         <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
         <div className='flex gap-14 flex-none'>
            <Image  src={archemyLogo} alt='alchemey Logo' className='logo-ticker-image'/>
            <Image  src={QuantumLogo} alt='quantum Logo'/>
            <Image  src={CellistiaLogo} alt='cellistia Logo'/>
            <Image  src={echoLogo} alt='echo Logo'/>
            <Image  src={apexLogo} alt='apex Logo'/>
            <Image  src={paulseLogo} alt='paulse Logo'/>
          </div>
         </div>
      </div>
    </div>
  );
};
