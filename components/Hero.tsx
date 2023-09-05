"use client";

import Image from 'next/image';
import CustomButton from "./CustomButton";


const Hero = () => {
    const handleScroll = () => {
        
    }
    return (
        <div className="Hero">
        <div className='flex-1 pt-36 padding-x'>
            <h1 className="hero__title">
                Vind, boek, of huur een auto — Snel en gemakkelijk!
            </h1>

            <p className='hero__subtitle'>
Optimaliseer uw autoverhuurervaring 
met ons moeiteloze boekingsproces.
</p>
<CustomButton 
title="Ontdek Auto's"
containerStyles="bg-primary-blue text-white rounded-full mt-10"
handleClick={handleScroll}
/>

    </div>
    <div className='hero__image-container'>
        <div className='hero__image'>
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
            <div className="hero__image-overlay" />
        </div>
    </div>
</div>
    )
}

export default Hero
