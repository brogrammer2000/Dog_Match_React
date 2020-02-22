import React from "react";
import MatchIntroduction from "./components/MatchIntroduction";
import MatchQuestions from "./components/MatchQuestions";
import Footer from "./components/Footer";

class Match extends React.Component {
  render() {
    return (
      <div>
        <MatchIntroduction />
        <MatchQuestions />
        <Footer />
      </div>
    );
  }
}
export default Match;

/*
Temperament
Scope
weight
heigth
breed_for

Questions:
What type of home/living space do you have? influence temperament/weight/height 
What will you do with your dog? Temperament/scope
If you have children, how old? Temperament
How big is your yard? weight/height
How active should your dog be? Temperament
How many times are you gonna go for a walk with your dog? Temperament
Do you want a guarding dog? Temperament bred_for
What size of dog are you looking for? Height/weight
How much would you like to spend weekly for the dog food? Weight/height
*/
