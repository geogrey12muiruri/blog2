import React from 'react'
import { Button, Navbar, NavbarToggle } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { TextInput } from 'flowbite-react'
import { FaMoon } from 'react-icons/fa'

const Header = () => {
    const path = useLocation().pathname
  return (
   <Navbar className='border-b-2'>
    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-gray-900 to-slate-950 rounded-lg text-white '>Parrot's</span> Blog

    </Link>
    <form>
        <TextInput
            type='text'
            placeholder='Search'
            className='w-72'            
            rightIcon={AiOutlineSearch}
         />
    </form>
    <Button className='w-12 h-10 lg:hidden ' color='slate-900' pill>
        <AiOutlineSearch />
    </Button>
    <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='slate-900' pill>
            <FaMoon />
        </Button>
        {/* signup link */}
        <Link to='/signin'><Button gradientDuoTone='purpleToBlue' outline>Sign In</Button></Link>
        {/* signin link */} 
       <NavbarToggle />
    </div>
    <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'} >
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'} >
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/dashboard'} as={'div'} >
                <Link to='/dashboard'>
                    Dashboard
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/signin'} as={'div'} >
                <Link to='/signin'>
                    Sign In
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/signup'} as={'div'} >
                <Link to='/signup'>
                    Sign Up
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'} >
                <Link to='/projects'>
                    projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
   </Navbar>
  )
}

export default Header
