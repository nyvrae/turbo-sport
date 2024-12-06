import React from 'react';
import Image from 'next/image';

import Badge from '../../../public/headline_badges/participants_badge.svg';

import PhotoP1 from '../../../public/participants/participant_1st.png';
import PhotoP2 from '../../../public/participants/participant_2nd.png';
import PhotoP3 from '../../../public/participants/participant_3rd.png';
import PhotoP4 from '../../../public/participants/participant_4th.png';
import PhotoP5 from '../../../public/participants/participant_5th.png';

import './participants.css'

const Participants = () => {
    return (
        <section
            className='participants bg-foreground'
            id='participants'
            data-testid="participants"
        >
            <div
                id="mem-cont"
                className="participants__wrapper wrapper"
            >
                <div className="participants__text text-background gap-5 lg:gap-8 2xl:gap-12">
                    <h2 className='flex items-center gap-3.5 lg:gap-5 2xl:gap-10'>
                        <span>
                            <Image
                                className='pts-badge'
                                src={Badge}
                                width={85}
                                height={85}
                                alt=''
                            />
                        </span>
                        <span className='participants__text-healine text-hl2_fs'>
                            Участники
                        </span>
                    </h2>
                    <p className='large_fs'>
                        Экспонатами фестиваля будут
                        являться редкие и яркие автомобили,
                        мотоциклы, внедорожная, водная и
                        военная техника, новинки автопрома.
                        Вы сможете познакомиться советской,
                        японской, американской, итальянской,
                        французской и британской классикой
                        автомобилестроения, гражданскими
                        спортивными автомобилями, тюнинг
                        проектами, гоночными автомобилями,
                        внедорожниками и вездеходами и автомобилями
                        для путешествий и мотоциклами различных
                        классов. Все это под открытым небом
                        в одной из лучших локаций Москвы.
                    </p>
                </div>

                {/* <div className="photos"> */}
                <div className="photos__left">
                    <div className='participants__left-photo'>
                        <Image
                            className='participants__photo participants__photo--left pts-flex--resize'
                            src={PhotoP2}
                            width={800}
                            height={600}
                            alt=''
                        />
                    </div>

                    <div className="participants__left-photo">
                        <Image
                            className='participants__photo participants__photo--left pts-flex--resize'
                            src={PhotoP4}
                            width={800}
                            height={600}
                            alt=''
                        />
                    </div>

                    <div className="watch-photoes bg-blue hover:bg-black cursor-pointer">
                        <p className='watch-photoes__text'>
                            <span className='text-background text-nowrap text-xs md:text-base xl:text-xl'>
                                Еще фото
                            </span>
                            <span>
                                <svg className='icon-with-show-photoes' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.9996 2.00015L23.9996 23.9998M23.9996 2.00015L2 23.9998M23.9996 2.00015L2 2.00015" className='stroke-background' strokeWidth="3.6667" />
                                </svg>
                            </span>
                        </p>
                    </div>
                </div>
                <div className='photos__right'>
                    <div className="participants__right-photo">
                        <Image
                            className='participants__photo participants__photo--right'
                            src={PhotoP1}
                            width={800}
                            height={600}
                            alt=''
                        />
                    </div>
                    <div className='participants__right-photo'>
                        <Image
                            className='participants__photo participants__photo--right pts-flex--resize'
                            src={PhotoP3}
                            width={800}
                            height={600}
                            alt=''
                        />
                    </div>
                    <div className="participants__right-photo">
                        <Image
                            className='participants__photo participants__photo--right'
                            src={PhotoP5}
                            width={800}
                            height={600}
                            alt=''
                        />
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default Participants

