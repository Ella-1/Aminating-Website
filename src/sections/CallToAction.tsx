import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SringImage from '@/assets/spring.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
          <div className='section-heading relative'>
          <h2 className="section-title">Sign Up for free Today.</h2>
          <p className="section-description mt-5" >Celeberate the jou of accomplishment with an app designed to track your progress</p>
            <Image src={StarImage} alt='star image' width={360} className='absolute -left-[360px] -top-[137px]'/>
            <Image src={SringImage} alt='spring image' width={360} className='absolute -right-[337px] -top-[19px] '/>
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
