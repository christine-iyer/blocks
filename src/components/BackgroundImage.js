import React from 'react'
import haikuOne from '../photos/haiku1.png'
import haikuTwo from '../photos/haiku2.png'
import haikuThree from '../photos/haiku3.png'
import haikuFour from '../photos/haiku4.png'

export default function BackgroundImage() {
     const images = [haikuOne, haikuTwo, haikuThree, haikuFour]
     



  return (
    <div>BackgroundImaged
     {images[1]}
    </div>

  )
}
