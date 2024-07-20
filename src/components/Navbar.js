import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6'
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const  {user} = useContext(AuthContext);

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // handle scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navbar items
    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Sell Your Book', path: '/admin/dashboard' },
        { link: 'Chat Room', path: '/blog' },
        { link: 'Blog', path: '/exploer' },
    ];

    // navbar button here
    // ...

    // navbar items
    // ...

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
       
    
                <div className='flex justify-between iten-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className='text-2xl  font-bold text-blue-700 flex-center gap-2'><FaBlog className='inline-block' />Book</Link>
                    {/*nav item for lagr devicxce*/}

                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base
                                text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    {/*btn for large device */}
                    <div className='space-x-12 hidden lg:flex item-center'>
                        <button>
                            <FaBarsStaggered className='w-5 hover:text-blue-700' />
                        </button>
                        {
                            user? user.email : ""
                        }
                    </div>

                    {/*menu button for the mobile device*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered />
                            }
                        </button>
                    </div>

                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
    <ul>
        {navItems.map(({ link, path }) => (
            <li key={path}>
                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 text-white'>
                    {link}
                </Link>
            </li>
        ))}
    </ul>
</div>

            </nav>
        </header>
    );
};

export default Navbar;
