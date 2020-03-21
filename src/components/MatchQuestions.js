import React from "react";

class MatchQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      dogForm: "",
      answers: [],
      plainArr: [],
      apiChar: [],
      selectedDogs: [],
      selectedDogPic: "",
      selectedDogName: "",
      showMe: false,
      btnText: "Find your perfect dog!",
      displayQuestion: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //Answers overlaps, they need to be differentiated between each other ptherwise it will stop before reaching the correct answer
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });

    if (checked) {
      this.state.answers.push([value]);
    } else if (!checked) {
      this.state.answers.pop([value]);
    }

    let test = [].concat.apply([], this.state.answers);
    this.setState(prevState => {
      return {
        plainArr: test
      };
    });
  }
  //Handling button click
  handleClick(event) {
    event.preventDefault();

    if (this.state.displayQuestion) {
      //fetching API with all the dog breeds and charateristics

      fetch("https://api.thedogapi.com/v1/breeds")
        .then(response => response.json())
        .then(data => {
          //Declaring variables which will be filled by the user input
          let temperament = [];
          let bred_for = [];
          let weigth = [];
          let temperamentCounter = 0;
          let bredCounter = 0;

          //Dog list filled on the based of the user input
          let possibleDogs = [];

          //loop which checkes the user answers and fill up the variable arrays declare above
          for (let i = 0; i < this.state.plainArr.length; i++) {
            if (this.state.plainArr[i] === "Small apartment") {
              temperament.push("Independent", "Compose", "Calm", "Quiet");
            } else if (this.state.plainArr[i] === "Big apartment") {
              temperament.push("Independent", "Patient", "Adaptable");
            } else if (this.state.plainArr[i] === "Villa") {
              temperament.push("Active", "Playful", "Energetic", "Lively");
            } else if (this.state.plainArr[i] === "Friend") {
              bred_for.push(
                "Companionship",
                "Family companion dog",
                "Companion",
                "Lapdog"
              );
            } else if (this.state.plainArr[i] === "Hunter") {
              bred_for.push("Hunting");
            } else if (this.state.plainArr[i] === "Protector") {
              bred_for.push("Guarding", "Guardian", "guard", "watchdog");
            } else if (this.state.plainArr[i] === "Yes I do") {
              temperament.push(
                "Friendly",
                "Docile",
                "Affectionate",
                "Gentle",
                "Faithful"
              );
            } else if (this.state.plainArr[i] === "No I do not") {
              temperament.push("Calm");
            } else if (this.state.plainArr[i] === "Maybe in the future") {
              temperament.push("Independent", "Patient", "Adaptable");
            } else if (this.state.plainArr[i] === "Small/No") {
              temperament.push("Calm");
            } else if (this.state.plainArr[i] === "Medium") {
              temperament.push("Independent", "Patient", "Adaptable");
            } else if (this.state.plainArr[i] === "Big") {
              temperament.push("Active", "Playful", "Energetic", "Lively");
            } else if (this.state.plainArr[i] === "Only a little") {
              temperament.push("Independent", "Compose", "Calm", "Quiet");
            } else if (
              this.state.plainArr[i] === "Yes, I would like it to be active"
            ) {
              temperament.push("Independent", "Patient", "Adaptable");
            } else if (this.state.plainArr[i] === "A never tired dog") {
              temperament.push("Active", "Playful", "Energetic", "Lively");
            } else if (this.state.plainArr[i] === "Rarely") {
              temperament.push("Independent", "Compose", "Calm", "Quiet");
            } else if (this.state.plainArr[i] === "At least twice a day") {
              temperament.push("Independent", "Patient", "Adaptable");
            } else if (this.state.plainArr[i] === "Three or more times a day") {
              temperament.push("Active", "Playful", "Energetic", "Lively");
            } else if (this.state.plainArr[i] === "No") {
              temperament.push(
                "Alert",
                "Loyal",
                "Protective",
                "Brave",
                "Powerful",
                "Courageous"
              );
            } else if (this.state.plainArr[i] === "Small size") {
              weigth.push(10);
            } else if (this.state.plainArr[i] === "Medium size") {
              weigth.push(25);
            } else if (this.state.plainArr[i] === "Big size") {
              weigth.push(26);
            } else if (this.state.plainArr[i] === "10€") {
              weigth.push(10);
            } else if (this.state.plainArr[i] === "25€") {
              weigth.push(25);
            } else if (this.state.plainArr[i] === ">25€") {
              weigth.push(26);
            } else if (this.state.plainArr[i] === "Surely no") {
              weigth.push(10);
            } else if (this.state.plainArr[i] === "Maybe, but not often") {
              weigth.push(25);
            } else if (this.state.plainArr[i] === "Yes for sure") {
              weigth.push(26);
            }
          }
          /*
        for (let i = 0; i < temperament.length; i++) {
          for (let j = 0; j < temperament.length; j++) {
            if (temperament[i] === temperament[j]) {
              temperament.pop(temperament[i]);
            }
          }
        }
        */
          //Looping through the API in order to compare the user input and API dog info
          for (let j = 0; j < data.length; j++) {
            temperamentCounter = 0;
            //Checking if the temperament of the dog are the same as the one of one of the list
            if (data[j].temperament !== undefined) {
              for (let q = 0; q < data[j].temperament.split(",").length; q++) {
                let userDog = temperament.sort();
                let apiDog = data[j].temperament.split(",").sort();
                for (
                  let b = 0;
                  b < data[j].temperament.split(",").length;
                  b++
                ) {
                  if (userDog[q] === apiDog[b]) {
                    temperamentCounter++;
                    if (temperamentCounter >= 1) {
                      possibleDogs.push(data[j]);
                    }
                  }
                }
              }
            }
          }

          for (let j = 0; j < data.length; j++) {
            bredCounter = 0;
            //Checking if the temperament of the dog are the same as the one of one of the list
            if (data[j].bred_for !== undefined) {
              for (let q = 0; q < data[j].bred_for.split(",").length; q++) {
                let userDog = bred_for.sort();
                let apiDog = data[j].bred_for.split(",").sort();
                for (let b = 0; b < data[j].bred_for.split(",").length; b++) {
                  if (userDog[q] === apiDog[b]) {
                    bredCounter++;
                    if (bredCounter >= 1) {
                      possibleDogs.push(data[j]);
                    }
                  }
                }
              }
            }
          }

          //Calculting the average based on the user input
          let avgWeight = 0;
          for (let i = 0; i < weigth.length; i++) {
            avgWeight += weigth[i];
          }

          let average = avgWeight / weigth.length;
          //Based on the average we select only the API dogs which are within a certain weight
          for (let j = 0; j < data.length; j++) {
            if (data[j].weight.metric !== undefined) {
              //Parsing the API weight to be an int
              let apiDog = data[j].weight.metric
                .split(" - ")
                .map(int => parseInt(int));
              if (average > apiDog[0] && average < apiDog[1]) {
                possibleDogs.push(data[j]);
              }
            }
          }

          let counter = 0;
          for (let i = 0; i < possibleDogs.length; i++) {
            counter = 0;
            //Looping for temperament counter
            if (possibleDogs[i].temperament !== undefined) {
              for (
                let j = 0;
                j < possibleDogs[i].temperament.split(", ").length;
                j++
              ) {
                for (let q = 0; q < temperament.length; q++) {
                  if (
                    possibleDogs[i].temperament.split(", ")[j] ===
                    temperament[q]
                  ) {
                    counter++;
                  }
                }
              }
            }

            //Looping for bred_for counter
            if (possibleDogs[i].bred_for !== undefined) {
              for (let q = 0; q < bred_for.length; q++) {
                if (possibleDogs[i].bred_for === bred_for[q]) {
                  counter++;
                }
              }
            }

            //Looping for weight
            if (possibleDogs[i].weight !== undefined) {
              if (
                possibleDogs[i].weight.metric.split(" - ")[0] < average &&
                possibleDogs[i].weight.metric.split(" - ")[1] > average
              ) {
                console.log(
                  average +
                    " " +
                    possibleDogs[i].weight.metric.split(" - ")[0] +
                    "   " +
                    possibleDogs[i].weight.metric.split(" - ")[1] +
                    possibleDogs[i].name
                );
                counter++;
                counter++;
              }
            }

            possibleDogs[i].counter = counter;
          }

          //Sorting the array of objects based on the counter
          possibleDogs.sort((a, b) => (a.counter > b.counter ? -1 : 1));
          //console.log(possibleDogs);

          //setting the constructor selectedDogs equal to possibleDogs
          this.setState({ selectedDogs: possibleDogs });
          const rngNumber = Math.floor(Math.random() * 10);
          console.log(rngNumber);
          if (this.state.selectedDogs.length > 9) {
            document.getElementById("hide").style.display = "none";
            fetch(
              `https://api.thedogapi.com/v1/images/search?breed_id=${this.state.selectedDogs[rngNumber].id}`
            )
              .then(response => response.json())
              .then(data => {
                this.setState({
                  displayQuestion: false,
                  showMe: true,
                  selectedDogPic: data[0].url,
                  selectedDogName: this.state.selectedDogs[rngNumber].name
                });
              });
          } else {
            alert("Please answer more questions");
          }
        });
    } else {
      this.setState({ displayQuestion: true, showMe: false });
      document.getElementById("hide").style.display = "initial";
    }
  }

  render() {
    return (
      <div>
        <div id="hide">
          <form>
            <p>What type of home/living space do you have?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1"
              name="dogForm"
              value="Small apartment"
            ></input>
            <label>Small apartment</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2"
              name="dogForm"
              value="Big apartment"
            ></input>
            <label>Big apartment</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3"
              name="dogForm"
              value="Villa"
            ></input>
            <label>Villa</label>
            <br></br>

            <p>Who will your dog be?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-2"
              name="dogForm"
              value="Friend"
            ></input>
            <label>Friend</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-2"
              name="dogForm"
              value="Hunter"
            ></input>
            <label>Hunter</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-2"
              name="dogForm"
              value="Protector"
            ></input>
            <label>Protector</label>
            <br></br>

            <p>Do you have children?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-3"
              name="dogForm"
              value="Yes I do"
            ></input>
            <label>Yes</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-3"
              name="dogForm"
              value="No I do not"
            ></input>
            <label>No</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-3"
              name="dogForm"
              value="Maybe in the future"
            ></input>
            <label>Maybe in the future</label>
            <br></br>

            <p>How big is your yard?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-4"
              name="question1-4"
              value="Small/No"
            ></input>
            <label>Small/No</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-4"
              name="dogForm"
              value="Medium"
            ></input>
            <label>Medium</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-4"
              name="dogForm"
              value="Big"
            ></input>
            <label>Big</label>
            <br></br>

            <p>How active should your dog be?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-5"
              name="dogForm"
              value="Only a little"
            ></input>
            <label>Only a little</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-5"
              name="dogForm"
              value="Yes, I would like it to be active"
            ></input>
            <label>Yes, I would like it to be active</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-5"
              name="dogForm"
              value="A never tired dog"
            ></input>
            <label>A never tired dog</label>
            <br></br>

            <p>How many times are you gonna go for a walk with your dog?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-6"
              name="dogForm"
              value="Rarely"
            ></input>
            <label>Rarely</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              value="At least twice a day"
            ></input>
            <label>At least twice a day</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-6"
              name="dogForm"
              value="Three or more times a day"
            ></input>
            <label>Three or more times a day</label>
            <br></br>

            <p>Do you want a guarding dog?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-7"
              name="dogForm"
              value="No"
            ></input>
            <label>No</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-7"
              name="dogForm"
              value="Yes"
            ></input>
            <label>Yes</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-7"
              name="dogForm"
              value="Not a priority"
            ></input>
            <label>Not a priority</label>
            <br></br>

            <p>What size of dog are you looking for?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-8"
              name="dogForm"
              value="Small size"
            ></input>
            <label>Small</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-8"
              name="dogForm"
              value="Medium size"
            ></input>
            <label>Medium</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-8"
              name="dogForm"
              value="Big size"
            ></input>
            <label>Big</label>
            <br></br>

            <p>How much are you willing to spend weekly for the dog food?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-9"
              name="dogForm"
              value="10€"
            ></input>
            <label>10€</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-9"
              name="dogForm"
              value="25€"
            ></input>
            <label>25€</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-9"
              name="dogForm"
              value=">25€"
            ></input>
            <label>>25€</label>
            <br></br>

            <p>Are you gonna do sports with your dog?</p>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question1-10"
              name="dogForm"
              value="Surely no"
            ></input>
            <label>No</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question2-10"
              name="dogForm"
              value="Maybe, but not often"
            ></input>
            <label>Maybe, but not often</label>
            <br></br>
            <input
              checked={this.state.isFriendly}
              onChange={this.handleChange}
              type="checkbox"
              id="question3-10"
              name="dogForm"
              value="yes for sure"
            ></input>
            <label>yes</label>
            <br></br>
          </form>
        </div>
        <button onClick={this.handleClick}>{this.state.btnText}</button>
        {this.state.showMe ? (
          <div id="dog-result">
            <p id="chosen-dog">{this.state.selectedDogName}</p>
            <img
              src={this.state.selectedDogPic}
              alt="Dog selected"
              id="picHide"
            ></img>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MatchQuestions;
