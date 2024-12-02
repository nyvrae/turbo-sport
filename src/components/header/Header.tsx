'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import headerButtons from '@/data/headerButton';

import './header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className='header w-full text-foreground z-0'>
                <div className="header__wrapper wrapper w-full">
                    <div className="header__wrapper__block">
                        <svg className="header__wrapper__logo" width="159" height="38" viewBox="0 0 159 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.9351 1.5C15.734 1.5 13.1479 3.8913 13.1479 6.85117C13.1479 9.81104 15.734 12.2023 18.9351 12.2023C22.1362 12.2023 24.7223 9.81104 24.7223 6.85117C24.7223 3.8913 22.1181 1.5 18.9351 1.5ZM18.9351 9.69398C17.2351 9.69398 15.8606 8.42308 15.8606 6.85117C15.8606 5.27926 17.2351 4.00836 18.9351 4.00836C20.6351 4.00836 22.0096 5.27926 22.0096 6.85117C22.0096 8.42308 20.617 9.69398 18.9351 9.69398ZM11.5745 19.0084C11.5745 16.0485 8.9883 13.6572 5.78723 13.6572C2.58617 13.6572 0 16.0485 0 19.0084C0 21.9682 2.58617 24.3595 5.78723 24.3595C8.9883 24.3595 11.5745 21.9682 11.5745 19.0084ZM2.71277 19.0084C2.71277 17.4365 4.08723 16.1656 5.78723 16.1656C7.48723 16.1656 8.8617 17.4365 8.8617 19.0084C8.8617 20.5803 7.48723 21.8512 5.78723 21.8512C4.08723 21.8512 2.71277 20.5803 2.71277 19.0084ZM32.0649 12.2023C33.1862 12.2023 34.2532 11.9013 35.1394 11.3829V12.2023H37.8521V6.85117C37.8521 3.8913 35.266 1.5 32.0649 1.5C28.8638 1.5 26.2777 3.8913 26.2777 6.85117C26.2777 9.81104 28.8638 12.2023 32.0649 12.2023ZM32.0649 4.00836C33.7649 4.00836 35.1394 5.27926 35.1394 6.85117C35.1394 8.42308 33.7649 9.69398 32.0649 9.69398C30.3649 9.69398 28.9904 8.42308 28.9904 6.85117C28.9904 5.27926 30.3649 4.00836 32.0649 4.00836ZM51 6.85117C51 3.8913 48.4138 1.5 45.2128 1.5H39.4255V12.2023H45.2128C48.3957 12.2023 51 9.81104 51 6.85117ZM42.1383 4.00836H45.2128C46.9128 4.00836 48.2872 5.27926 48.2872 6.85117C48.2872 8.42308 46.9128 9.69398 45.2128 9.69398H42.1383V4.00836ZM32.0649 25.7977C28.8638 25.7977 26.2777 28.189 26.2777 31.1488C26.2777 34.1087 28.8638 36.5 32.0649 36.5C33.1862 36.5 34.2532 36.199 35.1394 35.6806V36.5H37.8521V31.1488C37.8521 28.2057 35.266 25.7977 32.0649 25.7977ZM32.0649 33.9916C30.3649 33.9916 28.9904 32.7207 28.9904 31.1488C28.9904 29.5769 30.3649 28.306 32.0649 28.306C33.7649 28.306 35.1394 29.5769 35.1394 31.1488C35.1394 32.7207 33.7649 33.9916 32.0649 33.9916ZM18.9351 25.7977C15.734 25.7977 13.1479 28.189 13.1479 31.1488C13.1479 34.1087 15.734 36.5 18.9351 36.5C22.1362 36.5 24.7223 34.1087 24.7223 31.1488C24.7223 28.189 22.1181 25.7977 18.9351 25.7977ZM18.9351 33.9916C17.2351 33.9916 15.8606 32.7207 15.8606 31.1488C15.8606 29.5769 17.2351 28.306 18.9351 28.306C20.6351 28.306 22.0096 29.5769 22.0096 31.1488C22.0096 32.7207 20.617 33.9916 18.9351 33.9916ZM45.2128 25.7977H39.4255V36.5H45.2128C48.4138 36.5 51 34.1087 51 31.1488C51 28.189 48.3957 25.7977 45.2128 25.7977ZM45.2128 33.9916H42.1383V28.306H45.2128C46.9128 28.306 48.2872 29.5769 48.2872 31.1488C48.2872 32.7207 46.8947 33.9916 45.2128 33.9916ZM18.9351 13.6572C15.734 13.6572 13.1479 16.0485 13.1479 19.0084V24.3595H15.8606V19.0084C15.8606 17.4365 17.2351 16.1656 18.9351 16.1656C20.6351 16.1656 22.0096 17.4365 22.0096 19.0084V24.3595H24.7223V19.0084C24.7223 16.0485 22.1181 13.6572 18.9351 13.6572ZM4.43085 6.85117V12.2023H7.14362V6.85117C7.14362 5.27926 8.51808 4.00836 10.2181 4.00836H12.0989V1.5H10.2181C7.01702 1.5 4.43085 3.90803 4.43085 6.85117ZM7.14362 31.1488V25.7977H4.43085V31.1488C4.43085 34.1087 7.01702 36.5 10.2181 36.5H12.0989V33.9916H10.2181C8.51808 33.9916 7.14362 32.7207 7.14362 31.1488ZM46.3702 13.6572H40.6011H32.083C29.1532 13.6572 26.7298 15.6639 26.35 18.2893H31.2872V19.7441H26.2777V26.5C27.3266 25.2124 29.0085 24.3763 30.9074 24.3763H45.2128C48.1426 24.3763 50.566 22.3696 50.9457 19.7441H45.9904V18.2893H51V11.5334C49.933 12.8211 48.2511 13.6572 46.3702 13.6572ZM37.8521 19.7274H32.8426V18.2726H37.8521V19.7274ZM44.417 19.7274H39.4255V18.2726H44.4351V19.7274H44.417Z"
                                className='fill-foreground' />
                            <path d="M74.0001 9.08611L93.8283 28.9143M93.8282 9.08594L74 28.9141" className="stroke-foreground" strokeWidth="0.650105" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M120.874 23.4015L132.429 3.05872C132.953 2.13537 133.738 1.36267 134.698 0.823727C135.658 0.284786 136.758 0 137.879 0C139 0 140.1 0.284786 141.06 0.823727C142.02 1.36267 142.805 2.13537 143.329 3.05872L154.884 23.4015C155.382 24.2773 155.629 25.2583 155.6 26.2492C155.571 27.2401 155.268 28.2072 154.719 29.0565C154.171 29.9058 153.396 30.6084 152.47 31.096C151.543 31.5836 150.498 31.8396 149.434 31.8392H126.324C125.26 31.8396 124.214 31.5836 123.288 31.096C122.362 30.6084 121.587 29.9058 121.038 29.0565C120.49 28.2072 120.186 27.2401 120.158 26.2492C120.129 25.2583 120.375 24.2773 120.874 23.4015ZM142.623 7.58123L139.809 10.1912L137.879 5.46061L135.952 10.1912L133.135 7.58123L123.029 25.4842L135.952 13.6005L137.879 18.0906L139.809 13.6005L152.728 25.4842L142.623 7.58123ZM137.879 18.2039L133.567 28.2157L137.879 24.4766L142.19 28.2157L137.879 18.2039Z"
                                className='fill-foreground' />
                            <path
                                d="M117.741 35.1345H119.974V37.9204H119.002V35.9623H118.613L118.525 36.7065C118.427 37.5211 118.026 37.9284 117.323 37.9284H117V37.1324H117.088C117.236 37.1324 117.348 37.0913 117.423 37.009C117.499 36.9241 117.547 36.7875 117.57 36.5991L117.741 35.1345Z"
                                className='fill-foreground' />
                            <path
                                d="M123.243 37.9204L123.117 37.5344H122.183L122.053 37.9204H121.002L122.171 35.1345H123.151L124.328 37.9204H123.243ZM122.937 36.8856L122.652 36.1175L122.367 36.8856H122.937Z"
                                className='fill-foreground' />
                            <path
                                d="M126.683 38C126.214 38 125.828 37.862 125.523 37.5861C125.219 37.3075 125.066 36.9546 125.066 36.5274C125.066 36.1003 125.219 35.7487 125.523 35.4728C125.828 35.1942 126.214 35.0549 126.683 35.0549C127.1 35.0549 127.45 35.1716 127.735 35.4051C128.023 35.6359 128.193 35.9397 128.246 36.3165H127.249C127.207 36.1918 127.135 36.0923 127.031 36.018C126.931 35.9411 126.816 35.9026 126.688 35.9026C126.515 35.9026 126.373 35.961 126.265 36.0777C126.158 36.1918 126.105 36.3417 126.105 36.5274C126.105 36.7132 126.158 36.8631 126.265 36.9772C126.373 37.0913 126.515 37.1483 126.688 37.1483C126.825 37.1483 126.943 37.1072 127.044 37.0249C127.147 36.94 127.214 36.8299 127.245 36.6946H128.254C128.207 37.082 128.038 37.3964 127.748 37.6378C127.46 37.8793 127.105 38 126.683 38Z"
                                className='fill-foreground' />
                            <path d="M131.732 35.1345V35.9424H130.94V37.9204H129.96V35.9424H129.168V35.1345H131.732Z" className="fill-foregorund" />
                            <path
                                d="M135.553 37.5941C135.245 37.8647 134.84 38 134.338 38C133.835 38 133.43 37.8647 133.123 37.5941C132.816 37.3234 132.662 36.9679 132.662 36.5274C132.662 36.087 132.816 35.7315 133.123 35.4608C133.43 35.1902 133.835 35.0549 134.338 35.0549C134.84 35.0549 135.245 35.1902 135.553 35.4608C135.86 35.7315 136.013 36.087 136.013 36.5274C136.013 36.9679 135.86 37.3234 135.553 37.5941ZM133.877 36.9772C133.994 37.0913 134.148 37.1483 134.338 37.1483C134.528 37.1483 134.681 37.0913 134.798 36.9772C134.916 36.8631 134.974 36.7132 134.974 36.5274C134.974 36.3417 134.916 36.1918 134.798 36.0777C134.681 35.9636 134.528 35.9066 134.338 35.9066C134.148 35.9066 133.994 35.9636 133.877 36.0777C133.76 36.1918 133.701 36.3417 133.701 36.5274C133.701 36.7132 133.76 36.8631 133.877 36.9772Z"
                                className='fill-foreground' />
                            <path
                                d="M138.614 35.1385H139.611V37.9244H138.614V37.1722C138.493 37.1934 138.378 37.204 138.266 37.204C137.914 37.204 137.629 37.1045 137.411 36.9055C137.193 36.7065 137.085 36.4213 137.085 36.0499V35.1385H138.082V36.014C138.082 36.1228 138.112 36.2064 138.174 36.2648C138.235 36.3205 138.316 36.3483 138.417 36.3483C138.473 36.3483 138.538 36.3377 138.614 36.3165V35.1385Z"
                                className='fill-foreground' />
                            <path
                                d="M143.68 37.9204H142.541L141.883 36.8618V37.9204H140.911V35.1345H141.883V36.1494L142.482 35.1345H143.621L142.7 36.5036L143.68 37.9204Z"
                                className='fill-foreground' />
                            <path
                                d="M146.639 37.9204L146.513 37.5344H145.579L145.449 37.9204H144.398L145.566 35.1345H146.547L147.724 37.9204H146.639ZM146.333 36.8856L146.048 36.1175L145.763 36.8856H146.333Z"
                                className='fill-foreground' />
                            <path
                                d="M150.738 36.4558C150.81 36.4903 150.874 36.5314 150.93 36.5792C150.989 36.6269 151.038 36.68 151.077 36.7384C151.119 36.7967 151.151 36.8618 151.173 36.9334C151.196 37.0024 151.207 37.0753 151.207 37.1523C151.207 37.3805 151.116 37.5662 150.934 37.7095C150.753 37.8501 150.517 37.9204 150.226 37.9204H148.752V35.1345H150.214C150.479 35.1345 150.697 35.2008 150.867 35.3335C151.038 35.4661 151.123 35.6359 151.123 35.8429C151.123 35.9676 151.088 36.0843 151.018 36.1931C150.948 36.2993 150.855 36.3868 150.738 36.4558ZM150.147 36.1494C150.192 36.1122 150.214 36.0631 150.214 36.0021C150.214 35.9411 150.192 35.8933 150.147 35.8588C150.105 35.8217 150.049 35.8031 149.979 35.8031H149.665V36.2011H149.979C150.049 36.2011 150.105 36.1838 150.147 36.1494ZM150 37.2398C150.076 37.2398 150.137 37.2213 150.185 37.1841C150.232 37.1443 150.256 37.0926 150.256 37.0289C150.256 36.9652 150.232 36.9148 150.185 36.8777C150.137 36.8379 150.076 36.818 150 36.818H149.665V37.2398H150Z"
                                className='fill-foreground' />
                            <path d="M154.719 35.1345V35.9424H153.927V37.9204H152.947V35.9424H152.155V35.1345H154.719Z" className="fill-foreground" />
                            <path
                                d="M158.539 37.5941C158.232 37.8647 157.827 38 157.324 38C156.822 38 156.417 37.8647 156.109 37.5941C155.802 37.3234 155.649 36.9679 155.649 36.5274C155.649 36.087 155.802 35.7315 156.109 35.4608C156.417 35.1902 156.822 35.0549 157.324 35.0549C157.827 35.0549 158.232 35.1902 158.539 35.4608C158.846 35.7315 159 36.087 159 36.5274C159 36.9679 158.846 37.3234 158.539 37.5941ZM156.864 36.9772C156.981 37.0913 157.134 37.1483 157.324 37.1483C157.514 37.1483 157.668 37.0913 157.785 36.9772C157.902 36.8631 157.961 36.7132 157.961 36.5274C157.961 36.3417 157.902 36.1918 157.785 36.0777C157.668 35.9636 157.514 35.9066 157.324 35.9066C157.134 35.9066 156.981 35.9636 156.864 36.0777C156.746 36.1918 156.688 36.3417 156.688 36.5274C156.688 36.7132 156.746 36.8631 156.864 36.9772Z"
                                className='fill-foreground' />
                        </svg>
                    </div>
                    <div className="header__nav-panel">
                        <button
                            title='menu'
                            onClick={() => toggleMenu()}
                            className='lg:hidden'
                        >
                            {/* menu icon */}
                            <svg className={`${isOpen ? 'hidden' : 'block'}`} width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="23" height="2" className='fill-foreground' />
                                <rect y="8" width="23" height="2" className='fill-foreground' />
                                <rect y="16" width="23" height="2" className='fill-foreground' />
                            </svg>
                        </button>
                        <nav className={`nav max-lg:hidden`}>
                            <ul className="nav_list text-menu_text_fs flex nav_list--gap font-regular">
                                {headerButtons.map((item) => (
                                    <Link href={item.href} key={item.id} className='nav_item text-foreground hover:text-blue'>
                                        {item.label}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <hr className='hr line border-t border-foreground border-black' />
                </div>
            </header >
            {isOpen && (
                <div className={`fullscreen__menu menu__nav ${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 bg-background text-foregorund w-full h-full z-2`}>
                    {/* Кнопка закрытия */}
                    <button
                        title='close menu'
                        onClick={() => toggleMenu()}
                        className='absolute menu__right mt-7'
                    >
                        {/* close_menu icon */}
                        <svg width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.661133" y="16.4248" width="23" height="2" transform="rotate(-45 0.661133 16.4248)" className='fill-foreground' />
                            <rect x="2.0752" y="0.161133" width="23" height="2" transform="rotate(45 2.0752 0.161133)" className='fill-foreground' />
                        </svg>
                    </button>

                    {/* Навигация */}
                    <nav className="nav nav--gap max-w-screen mt-24 text-right">
                        <ul className="nav_list nav_list--gap absolute menu__right text-menu_text_fs flex flex-col font-normal">
                            {headerButtons.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.id}
                                    className='nav_item text-foreground hover:text-blue'
                                    onClick={() => toggleMenu()}>
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <hr className='hr line border-t border-foreground border-black width__menu-hr absolute bottom-24 left-1/2 transform -translate-x-1/2' />
                        <p className='absolute bottom-12 left-1/2 transform -translate-x-1/2'>
                            <span className='text-descriptor_fs text-blue font-medium'>info@lastochka-car.ru</span>
                            <span className='block text-text_small_fs text-right text-foreground'>По всем вопросам</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
