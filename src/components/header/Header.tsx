import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderLogos from '../../../public/logos/header_logos.svg';
import headerButtons from '@/data/headerButton';

const Header = () => {
    return (
        <header className='header flex'>
            <Image
                src={HeaderLogos}
                width={300}
                height={100}
                alt=''
            />
            <div className="header_nav-panel">
                <nav className="nav">
                    <ul className="nav_list">
                        {headerButtons.map((item) => (
                            <Link href={item.href} key={item.id} className='nav_item'>
                                {item.label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
