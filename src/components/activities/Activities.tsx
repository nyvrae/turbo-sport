'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Badge from '../../../public/headline_badges/activities_badge.svg';

import './activities.css';

import activitiesText from '@/data/activitiesText';

const Activities = () => {
    const [selectedButton, setSelectedButton] = useState<number>(1);

    const handleClick = (num: number) => {
        setSelectedButton(num);
    };

    const renderText = () => {
        const selectedActivity = activitiesText.find(item => item.id === selectedButton);
        if (!selectedActivity) return null;

        return (
            <>
                {selectedActivity.text.map((line, i) => (
                    <p key={i} className="large_fs">
                        {line}
                    </p>
                ))}
            </>
        );
    };

    return (
        <section className="activities w-full special-pt">
            <div
                id="activities"
                className="activities__wrapper wrapper"
            >
                <h2 className="activities__wrapper__headline font-bold flex items-center gap-3.5 lg:gap-5 2xl:gap-10">
                    <span>
                        <Image className='pts-badge' src={Badge} height={85} width={85} alt="Участники" />
                    </span>
                    <span className="text-hl2_fs overflow-hidden">Активности</span>
                </h2>

                <div className="choose-info-activity text-tags_fs">
                    <button
                        title="Читать о статичной зоне"
                        className={`btn ${selectedButton === 1 ? 'active' : 'none-selected'}`}
                        onClick={() => handleClick(1)}
                    >
                        Статичная зона
                    </button>

                    <button
                        title="Читать о динамичной зоне"
                        className={`btn ${selectedButton === 2 ? 'active' : 'none-selected'}`}
                        onClick={() => handleClick(2)}
                    >
                        Динамичная зона
                    </button>

                    <button
                        title="Читать о водной зоне"
                        className={`btn ${selectedButton === 3 ? 'active' : 'none-selected'}`}
                        onClick={() => handleClick(3)}
                    >
                        Водная зона
                    </button>
                </div>

                <hr className='hr__act line border-t border-foreground border-black' />

                <div className="activities__wrapper__schedule">
                    <div className="schedule__points">{renderText()}</div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
