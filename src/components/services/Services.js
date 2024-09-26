import React from 'react';
import { Faq } from '../import';
import "../style/services.css"
import ServiceItems,{EngagementModel,Approach} from './ServiceItems';
 
 

function Services() {
  return (
    <>
    <main>
    <ServiceItems />
    <EngagementModel />
    <Approach />
      <Faq />
    </main>
    </>
  );
}

export default Services;
