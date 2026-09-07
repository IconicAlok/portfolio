import React from 'react'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { Services } from '../components/Services'
import { Works } from '../components/Works'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Client } from '../components/Client'



export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Works />
            <Services />
            <Client />
            <Contact />
        </>
    )
}
