'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import Badge from '../../../public/headline_badges/schedule_badge.svg';

import './schedule.css';

import scheduleInfo from '@/data/scheduleInfo';

const Schedule = () => {
    const [selectedButton, setSelectedButton] = useState<number>(0);

    const handleClick = (num: number) => {
        setSelectedButton(num);
    };

    const renderText = () => {
        const selectedSchedule = scheduleInfo[selectedButton];

        return (
            <div className="sch__points__plan text-foreground">
                <div className="points__time">
                    {selectedSchedule.map((event, i) => {
                        return (
                            <div key={i}>
                                <div className='flex flex-wrap max-md:flex-col gap-6 max-md:gap-0 text-descriptor_fs'>
                                    <div className="points__contain-time 2xl:w-[300px] lg:w-[200px] w-[150px]">
                                        <p className="points__time__item flex text-dark_grey">
                                            {event.time}
                                        </p>
                                    </div>
                                    <div className="points__contain-event">
                                        <p className="points__event__item">
                                            {event.item}
                                        </p>
                                    </div>
                                </div>
                                {i !== selectedSchedule.length - 1 &&
                                    (
                                        <hr className='hr__act line border-t border-2 border-foreground border-black opacity-20' />
                                    )
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    return (
        <section className="schedule w-full special-pt">
            <div
                id="schedule"
                className="schedule__wrapper wrapper"
            >
                <h2 className="schedule__wrapper__headline text-foreground font-bold flex items-center gap-3.5 lg:gap-5 2xl:gap-10">
                    <span>
                        <Image
                            className='pts-badge'
                            src={Badge}
                            height={85}
                            width={85}
                            alt=''
                        />
                    </span>
                    <span className="text-hl2_fs overflow-hidden">Расписание</span>
                </h2>

                <div className="choose-info-activity text-foreground">
                    <button
                        title="Читать о статичной зоне"
                        className={`btn ${selectedButton === 0 ? 'active' : 'none-selected'}`}
                        onClick={() => handleClick(0)}
                    >
                        Статичная зона
                    </button>

                    <button
                        title="Читать о динамичной зоне"
                        className={`btn ${selectedButton === 1 ? 'active' : 'none-selected'}`}
                        onClick={() => handleClick(1)}
                    >
                        Динамичная зона
                    </button>
                </div>

                <hr className='hr__act line border-t border-foreground border-black' />

                <div className="schedule__wrapper__schedule">
                    <div className="sch__points">
                        {renderText()}
                    </div>
                </div>
                <div
                    className="award__winners 
                    text-blue border-2 border-blue 
                    flex flex-col items-center justify-center text-center
                    rounded-[30px] lg:rounded-[40px] 2xl:rounded-[50px]
                    gap-[10px] 2xl:gap-[20px]
                    p-[20px] lg:py-[20px] lg:px-[40px] 2xl:py-[60px] 2xl:py-[100px]
                    mt-10 lg:mt-[60px]"
                >
                    <h3 className='text-hl3_fs'>
                        Награждение и розыгрыш призов
                    </h3>
                    <p className='large_fs'>На закрытии фестиваля будет проведено
                        награждение победителей конкурсов и
                        спортивных соревнований, разыграны
                        призы для гостей и участников мероприятия.
                        Каждый купивший билет автоматически
                        станет участником розыгрыша.
                        Главным призом фестиваля станет
                        автомобиль.</p>
                </div>
            </div>
        </section>
    )
}

export default Schedule
