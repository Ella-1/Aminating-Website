import ProductImage from '@/assets/product-image.png'
import Image from 'next/image';
import PrymidImage from '@/assets/pyramid.png'
import TubleImage from '@/assets/tube.png'

export const ProductShowcase = () => {
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
        <Image src={PrymidImage} alt='prymid image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'/>
        <Image src={TubleImage} alt='tube Image' height={248} className='hidden md:block absolute bottom-24 -left-36'/>
        </div>
      </div>
    </section>
  );
};
