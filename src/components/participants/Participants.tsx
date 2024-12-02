import React from 'react';
import Image from 'next/image';

import Badge from '../../../public/headline_badges/participants_badge.svg';

const Participants = () => {
    return (
        <section className='participants bg-foreground'>
            <div className="participants__wrapper wrapper">
                <div className="participants__text text-background">
                    <h2 className='flex'>
                        <span>
                            <Image
                                src={Badge}
                                width={85}
                                height={85}
                                alt=''
                            />
                        </span>
                        <span>
                            Участники
                        </span>
                    </h2>
                    <p>
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
            </div>
        </section>
    )
}

export default Participants
