import React from "react";

import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Demos from "./Demos";
import Testimonial from "./Testimonial";
import Integrations from "./Integrations";
import Features from "./Features";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <Introduction />
      <Demos />
      <Testimonial />
      <Integrations />
      <Features />
      <FAQ />
      <JoinUs />
    </React.Fragment>
  );
}

export default Presentation;
