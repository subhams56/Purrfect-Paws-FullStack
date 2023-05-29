import { Features } from '../components/Features';
import Nav3 from '../components/Nav3';

const Services = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav3 />
      <div className='flex-1 container flex items-center justify-center mx-auto mt-[160px] mb-[120px]'>
        <Features />
      </div>
      <footer className='py-6'>
        <div className='container mx-auto text-center text-gray-400'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Purrfect Paws. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
