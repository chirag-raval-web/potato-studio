import React from 'react';
import { Faq } from '../import';
import "../style/services.css"
import ServiceItems,{EngagementModel,Approach,Industry} from './ServiceItems';
 
 

function Services() {
  return (
    <>
    <main>
    <ServiceItems />
    <EngagementModel />
    <Approach />
    <Industry/>
      <Faq />
    </main>
    </>
  );
}

export default Services;
