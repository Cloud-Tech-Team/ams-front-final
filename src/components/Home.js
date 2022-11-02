import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AMS from '../AMS'
import mits from '../Icons/photo.jpg'
import logo from '../Icons/MITS.png'


const Home = () => {
  return (
    <>
            {/* <Parallax pages={3}>
                <ParallaxLayer speed={1}>
                    <AMS/>
                </ParallaxLayer>
            </Parallax> */}
            <AMS/>
    </>
  )
}

export default Home