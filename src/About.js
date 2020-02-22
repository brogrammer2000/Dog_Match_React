import React from "react";
import Footer from "./components/Footer";
import MatchQuestions from "./components/MatchQuestions";

class About extends MatchQuestions {
  constructor(props) {
    super(props);
    console.log(this.dogForm);
  }
  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}

export default About;
