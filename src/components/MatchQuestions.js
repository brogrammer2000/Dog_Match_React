import React from "react";
import QuestionsData from "./QuestionsData";

function MatchQuestions(props) {
  fetch(
    "https://api.thedogapi.com/v1/breeds?api_key=dd44bffe-eed8-4f51-a9f9-6711aa4ae95f"
  )
    .then(response => response.json())
    .then(data => {
      console.log(data.map(item => console.log(item.weight.metric)));
    });
  //////////////////////////////////////////77
  return (
    <from>
      <p>{props.item.question}</p>
      <input type="checkbox" value="" name="" checked=""></input>
    </from>
  );
}

export default MatchQuestions;
