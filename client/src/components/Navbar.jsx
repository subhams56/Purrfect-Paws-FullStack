import React,{useState}from 'react'

import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';




function Navbar() {
    const [nav,setNav]= useState(false);
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between h-20 max-w-[1240px] items-center px-8 mx-auto'>
        <img className='h-14 w-16 rounded-full mr-4 mt-4'  src="https://cdn.dribbble.com/users/113499/screenshots/7671703/media/1c281ce5c275a0f177fe4f3564638af8.png?compress=1&resize=400x300" alt="logo" />
    <h1 className=' w-full text-xl font-bold text-[#00df9a] cursor-pointer'>Purrfect Paws 🐾 </h1>
    
    <ul className=' hidden md:flex   justify-between gap-4 first-letter:items-center text-white'>
        <li className='p-4 cursor-pointer hover:text-gray-400 hover:ease-in-out duration-500 cursor-pointer'>Adopt</li>
        <li className='p-4 cursor-pointer hover:text-gray-400 hover:ease-in-out duration-500 cursor-pointer'>About </li>
        <li className='p-4 cursor-pointer hover:text-gray-400 hover:ease-in-out duration-500 cursor-pointer'>Contact</li>  
        <li className='p-4 cursor-pointer hover:text-gray-400 hover:ease-in-out duration-500 cursor-pointer'>FAQs</li>
    </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav?<AiOutlineClose size={20} style={{ color: 'white' }}/>:< AiOutlineMenu style={{ color: 'white' }} size={20}/>}
            

        </div>
        <div className={nav?'fixed left-0 top-0 w-[60%] h-full  bg-[#1A1A1D] border-r border-r-black ease-in-out duration-500 ':'fixed left-[-100%]'}>
        <img className='h-14 w-16 rounded-full m-6'  src="https://cdn.dribbble.com/users/113499/screenshots/7671703/media/1c281ce5c275a0f177fe4f3564638af8.png?compress=1&resize=400x300" alt="logo" />
        <h1 className=' m-4 p-4 w-full text-xl font-bold text-[#00df9a] cursor-pointer'>Purrfect Paws 🐾 </h1>
            <ul className='text-gray-400 ml-4'>
            <li className='p-4 border-b border-gray-100 hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Adopt</li>
        <li className='p-4 border-b border-gray-100 hover:text-white hover:ease-in-out duration-500 cursor-pointer'>About </li>  
        <li className='p-4 border-b border-gray-100 hover:text-white hover:ease-in-out duration-500 cursor-pointer'>Contact</li>
        <li className='p-4 hover:text-white hover:ease-in-out duration-500 cursor-pointer '>FAQs</li>
            </ul>
        </div>

</div>
  )
}

export default Navbar



