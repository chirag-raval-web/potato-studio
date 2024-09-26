import React from "react";
import { Faq, } from "../import";
import PartnerSlider from "./Slider";
import "../style/home.css"
import ServiceItems from "../services/ServiceItems";
import FinestWork from "./FinestWork";
import TestimonialSlider from "./TestimonialSlider";

function Home() {
  return (
  <>
  <main>
    <PartnerSlider/>
    <ServiceItems />
    <FinestWork/>
    <TestimonialSlider />
    <Faq />
  </main>
  </>
  )
}

export default Home;
