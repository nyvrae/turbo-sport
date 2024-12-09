import React from 'react'
import Image from 'next/image'

import Badge from '../../../public/headline_badges/location_badge.svg'

import Map from '../../../public/map.png'

import './location.css'

const Location = () => {
    return (
        <section className='location w-full'>
            <div className="location__wrapper bg-black wrapper">
                <hr className='mt-[50px] border-t border-background border-black' />

                <div className="location__info special-pt
                flex flex-col gap-[25px] 2xl:gap-[60px]">
                    <h2 className='flex font-bold items-center gap-3.5 lg:gap-5 2xl:gap-10'>
                        <span>
                            <Image
                                className='pts-badge'
                                src={Badge}
                                height={85}
                                width={85}
                                alt=''
                            />
                        </span>
                        <span className="text-hl2_fs overflow-hidden text-white">Локация</span>
                    </h2>
                    <div className="location__info__items grid grid-cols-1
                    gap-y-[30px] md:grid-cols-2">

                        <div className="location__info__map">
                            <Image
                                className='map-image'
                                src={Map}
                                width={284}
                                height={284}
                                alt='' />
                        </div>



                        <div className='location__info__text
                        flex flex-col
                        gap-[40px] lg:gap-[50px] 2xl:gap-[80px]'>
                            <div className="
                            text-white 
                            flex flex-col
                            gap-[20px] lg:gap-[30px] 2xl:gap-[50px]">
                                <h3 className='text-hl3_fs font-medium'>О месте проведения и маршруте</h3>
                                <p className='flex flex-col gap-[30px] 2xl:gap-[20px] large_fs'>
                                    <span>
                                        Автомобильная выставка будет проходить на
                                        территории гребного канала в районе Крылатского
                                        Западного административного округа города Москвы,
                                        который является искусственным открытым водоемом
                                        на особо охраняемой территории природно-исторического
                                        парка «Москворецкий»
                                    </span>
                                    <span>
                                        Ближайшими станциями метро являются «Молодёжная» и «Крылатское»,
                                        остановками общественного транспорта — «Гребной канал» и
                                        «Крылатский мост». От обеих станций метро до остановки
                                        «Гребной канал» курсируют автобусы.
                                    </span>
                                    <span>
                                        По обе стороны канала множество вариантов парковки.
                                        Машину можно оставить на стоянках у близлежащих
                                        спортивных объектов – Ледового дворца, стадиона
                                        «Динамо» и  Олимпийского велотрека.
                                    </span>
                                </p>
                            </div>

                            <div className="advantages text-white 
                            flex flex-col
                            gap-[30px] 2xl:gap-[70px]">
                                <p className='flex flex-col gap-[10px]'>
                                    <span className='numeric_fs font-light overflow-hidden'>
                                        5 000 &gt;
                                    </span>
                                    <span className='large_fs'>
                                        кв.м фестивальной площадки
                                    </span>
                                </p>

                                <p className='flex items-center gap-[10px]'>
                                    <span className='numeric_fs font-light overflow-hidden'>
                                        400 &gt;
                                    </span>
                                    <span className='large_fs'>
                                        автомобилей
                                    </span>
                                </p>

                                <p className='flex flex-col gap-[10px]'>
                                    <span className='numeric_fs font-light text-wrap overflow-hidden'>
                                        бесконечно <span>много &gt;</span>
                                    </span>
                                    <span className='large_fs'>
                                        положительных эмоций
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
