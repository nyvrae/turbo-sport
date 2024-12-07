import React from 'react'
import Image from 'next/image';

import BuyTicketBtn from '@/ui/BuyTicketBtn';

import SecurityBadge from '../../../public/icons/security.svg'

import Marq from './ticket-parts/Marq';

import './tickets.css'

const Tickets = () => {
    return (
        <section className="tickets w-full special-pt">
            <div className="tickets__wrapper relative w-[100svw]">
                <Marq />
            </div>

            <div className="w-full bg-black __wrapper
            pt-[50px] lg:pt-[60px] 2xl:pt-[120px]
            2xl:flex
            gap-[30px]">
                <div className="tickets__cards flex flex-wrap w-full
                gap-[18px] lg:gap-[30px]">
                    <div className="ticket-card daily-card 
                px-6 bg-card
                rounded-[30px] lg:rounded-[40px]
                flex-shrink-0 flex-grow basis-[30%]
                py-[22px] lg:py-[26px] 2xl:py-[30px]
                gap-[27px]
                hover:border-1 hover:border-white">
                        <div>
                            <h2 className='text-descriptor_fs text-background text-nowrap font-bold'>Дневной / 1 день</h2>
                            <hr className='border-t border-background border-black
                        my-[16px] lg:my-[20px] 2xl:my-[30px]' />
                            <div className='font-light'>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Вход на территорию фестиваля в один выбранный день фестиваля
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-nowrap text-white font-bold'>500 ₽</p>
                            <BuyTicketBtn className="" text="купить билет" />
                        </div>
                    </div>

                    <div className="ticket-card daily-card 
                px-6 bg-card
                rounded-[30px] lg:rounded-[40px]
                flex-shrink-0 flex-grow basis-[30%]
                py-[22px] lg:py-[26px] 2xl:py-[30px]
                gap-[27px]
                hover:border-1 hover:border-white">
                        <div>
                            <h2 className='text-descriptor_fs text-background text-nowrap font-bold'>Комплекс / 2  дня</h2>
                            <hr className='border-t border-background border-black
                        my-[16px] lg:my-[20px] 2xl:my-[30px]' />
                            <div className='font-light'>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Многократный вход на территорию фестиваля на 2 дня
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <p className='text-nowrap text-white font-bold'>900 ₽</p>
                            <BuyTicketBtn className="" text="купить билет" />
                        </div>
                    </div>

                    <div className="ticket-card daily-card 
                px-6 bg-card
                rounded-[30px] lg:rounded-[40px]
                flex-shrink-0 flex-grow basis-[30%]
                py-[22px] lg:py-[26px] 2xl:py-[30px]
                hover:border-1 hover:border-white">
                        <div className='overflow-hidden'>
                            <h2 className='text-descriptor_fs text-background text-nowrap font-bold'>VIP билет</h2>
                            <hr className='border-t border-background border-black
                        my-[16px] lg:my-[20px] 2xl:my-[30px]' />
                            <div className='flex flex-col gap-[15px] font-light'>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Многократный вход на территорию фестиваля на 2 дня
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Размещение в зоне глэмпинга усадьбы на на 1 ночь
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Скидка на фудкортах
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex gap-[15px] 2xl:gap-2'>
                                        <span className='text-green text-nowrap shrink-0'>
                                            \
                                        </span>
                                        <span className='flex text-wrap text-white text-small_fs'>
                                            Доступ в VIP зону
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[20px] mt-[27px] overflow-hidden'>
                            <p className='text-nowrap text-white font-bold overflow-hidden'>900 ₽</p>
                            <BuyTicketBtn className="" text="купить билет" />
                        </div>
                    </div>
                </div>

                <div className="rules-of-security overflow-hidden
                flex flex-col
                gap-[13px] 2xl:gap-[20px]">
                    <hr className='line border-t border-background block 2xl:hidden' />
                    <h3 className='flex items-center
                    gap-[20px]'>
                        <span>
                            <Image
                                src={SecurityBadge}
                                width={32}
                                height={32}
                                alt=''
                            />
                        </span>
                        <span className='font-bold text-hl3_fs text-white'>
                            Безопасность
                        </span>
                    </h3>
                    <p className='large_fs text-white flex flex-col font-light lg:font-normal'>
                        <span>
                            • Дежурная скорая помощь вблизи статичной и динамичной зоны
                        </span>
                        <span>
                            • Дежурный патруль ЧОП в каждой зоне
                        </span>
                        <span>
                            • Отряд полиции на каждом входе с металлодетекторами
                        </span>
                        <span>
                            • Волонтеры
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Tickets
