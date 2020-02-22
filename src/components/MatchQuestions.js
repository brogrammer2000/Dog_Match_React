import React from "react";

class MatchQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      dogForm: "",
      answers: [],
      plainArr: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });

    if (checked) {
      this.state.answers.push([value]);
      console.log(this.state.answers);
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

  handleClick(event) {
    event.preventDefault();

    console.log(this.state.plainArr);
  }

  render() {
    return (
      <div>
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
            value="Yes"
          ></input>
          <label>Yes</label>
          <br></br>
          <input
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            type="checkbox"
            id="question2-3"
            name="dogForm"
            value="No"
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
            value="dogForm"
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
            id="question2-6"
            name="dogForm"
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
            value="Small"
          ></input>
          <label>Small</label>
          <br></br>
          <input
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            type="checkbox"
            id="question2-8"
            name="dogForm"
            value="Medium"
          ></input>
          <label>Medium</label>
          <br></br>
          <input
            checked={this.state.isFriendly}
            onChange={this.handleChange}
            type="checkbox"
            id="question3-8"
            name="dogForm"
            value="Big"
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
            value="No"
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
            value="yes"
          ></input>
          <label>yes</label>
          <br></br>
          <button onClick={this.handleClick}>Find your perfect Dog!</button>
        </form>
      </div>
    );
  }
}

export default MatchQuestions;
