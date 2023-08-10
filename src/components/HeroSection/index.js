import React, { useState } from 'react';
import Video from '../../videos/video-2.mp4';
import '../../App.css';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg id="hero-bg">
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Where Possibilities Ignite </HeroH1>
                <HeroP> 
                Sign up for a new account today and become a member of the blazers
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        Get started 
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection