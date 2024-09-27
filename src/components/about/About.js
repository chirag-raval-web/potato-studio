import React from 'react'
import { Faq } from '../import'
import Video ,{Client, MagicSlider, PostMessage, Values} from './AboutItems'
import "../style/about.css"
import StartProject from '../common/StartProject'

const About = () => {
  return (
    <>
    <main>
      <Video />
      <PostMessage />
      <Values />
      <MagicSlider />
      <Client />
       <StartProject />
    </main>
    </>
  )
}

export default About
