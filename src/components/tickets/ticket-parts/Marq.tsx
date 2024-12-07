'use client'

import React from 'react'
import Image from 'next/image'
import Badge from '../../../../public/headline_badges/tickets_badge.svg'
import '../tickets.css';

import Marquee from 'react-fast-marquee'

const Marq = () => {
  return (
    <div className="marquee__headline bg-white w-full py-[30px] max-w-[100svw]
    ">

      <Marquee
        autoFill={true}
        className='gap-6'
      >
        <h2 className='tickets__wrapper__headline font-bold flex items-center 
        gap-[10px] mr-[10px]
        lg:gap-[20px] lg:mr-[20px]
        2xl:gap-[30px] 2xl:mr-[30px]'>
          <span>
            <Image
              className='pts-badge'
              src={Badge}
              height={85}
              width={85}
              alt=''
            />
          </span>
          <span className='text-hl2_fs text-foreground overflow-hidden'>Билеты</span>
        </h2>
      </Marquee>
    </div>
  )
}

export default Marq
