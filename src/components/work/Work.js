import React from 'react'
import { Faq } from '../import';
import WorkItems from './WorkItems';
import "../style/work.css"
import StartProject from '../common/StartProject';
const Work = () => {
  return (
    <>
    <main>
      <WorkItems />
      <StartProject />
      <Faq />
    </main>
    </>
  )
}

export default Work
