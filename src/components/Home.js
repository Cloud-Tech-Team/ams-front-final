import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AMS from '../AMS'
import mits from '../Icons/photo.jpg'
import logo from '../Icons/MITS.png'

const Home = () => {
  return (
    <>
            <Parallax pages={3}>
                <ParallaxLayer speed={1}>
                    <AMS/>
                </ParallaxLayer>
                <ParallaxLayer
                    speed={0.2}
                    offset={1}
                    style={{
                        background:`url(${logo})`,
                        backgroundsize: 'auto',
                    }}>
                </ParallaxLayer>
                <ParallaxLayer 
                    speed={1.2} 
                    offset={1}>
                    <img src={mits}/>
                </ParallaxLayer>
            </Parallax>
    </>
  )
}

export default Home