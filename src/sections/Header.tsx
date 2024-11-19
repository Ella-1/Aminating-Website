import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';

export const Header = () => {
  return (
   <header className='sticky top-0 backdrop-blur-sm'>
     <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
      <p className='text-white/60 hidden md:block'>Streamline your workflow and boast your productivity</p>
     <div className='inline-flex items-center justify-center gap-1'>
     <p>Get Started</p>
     <ArrowRight className="size-4 inline-flex items-center justify-center" />
     </div>
    </div>

    {/* Navbar */} 
    <div className='py-5'>
      <div className='container'>
      <div className='items-center flex justify-between'>
      <Image src={Logo} alt='logo' height={40} width={40} />
      <MenuIcon className="size-5 md:hidden "/>
      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <Link href="#" >About</Link> 
        <Link href="#" >Features</Link>
        <Link href="#" >Customers</Link>
        <Link href="#" >Help</Link>
        <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tighter'>Get For free</button>
      </nav>
      </div>
      </div>
    </div>
   </header>
  );
};
