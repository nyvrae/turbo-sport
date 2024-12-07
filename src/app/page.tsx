import Header from '../components/header/Header'
import Banner from '@/components/banner/Banner'
import Participants from '../components/participants/Participants'
import Activities from '../components/activities/Activities'
import Schedule from '../components/schedule/Schedule'
import Tickets from '../components/tickets/Tickets'
import Location from '../components/location/Location'
import Sponsorship from '../components/sponsorhip/Sponsorship'

import './globals.css'


export default function Page() {
    return (
        <section className='page w-full flex flex-col items-center'>
            <Header />
            <Banner />
            <Participants />
            <Activities />
            <Schedule />
            <Tickets />

            <Location />
            <Sponsorship />
        </section>
    );
}