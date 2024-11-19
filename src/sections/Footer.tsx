import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import Link from 'next/link';
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialYoutube from '@/assets/social-youtube.svg';
import SocialPin from '@/assets/social-pin.svg'
import SocialLinkIN from '@/assets/social-linkedin.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt='saas logo' height={40} className='relative'/>
        </div>
        <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center lg:flex-row lg:justify-center'>
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>

        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
          <SocialLinkIN />

        </div>
      </div>

      <p className='mt-6'>&copy; 2024 Bata Inc. All right reserve</p>
    </footer>
  );
};
