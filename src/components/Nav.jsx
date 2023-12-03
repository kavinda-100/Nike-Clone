import {headerLogo} from '../assets/images'
import {hamburger, CrossIcon} from '../assets/icons'
import {navLinks} from '../constants'
import { useState } from 'react'

function Nav() {

    const [menuClick, setMenuClick] = useState(false)

  return (
    <>
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} 
                alt='HeaderLogo' 
                width={130} 
                height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                   {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                        {item.label}</a>
                    </li>
                   ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
                <img
                src={menuClick ? CrossIcon : hamburger}
                alt='hamburger'
                width={25}
                height={25}
                onClick={()=>{setMenuClick(menuClick ? false : true)}}
                />
            </div>
        </nav>

        <nav className={`${menuClick ? 'flex absolute bg-black  z-1   w-[90%] h-[40vh] rounded-xl justify-center items-center mr-10' : 'hidden'}`}>
        <ul className=' flex flex-col justify-center items-center gap-16 overflow-hidden'>
                   {navLinks.map((item)=>(
                    <li key={item.label}
                    onClick={()=>{setMenuClick(menuClick ? false : true)}}
                    >
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray font-bold overflow-hidden cursor-pointer'
                        onClick={()=>{setMenuClick(menuClick ? false : true)}}
                        >
                        {item.label}</a> 
                    </li>
                   ))}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Nav