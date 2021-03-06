import React from "react";

class RandomPics extends React.Component {
  constructor() {
    super();

    this.state = {
      rngPic: ""
    };
  }
  //Fetching a random dog image from the API everytime the page is rendered
  componentDidMount() {
    fetch(
      "https://api.thedogapi.com/v1/images/search?api_key=dd44bffe-eed8-4f51-a9f9-6711aa4ae95f"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          rngPic: data[0].url
        });
      });
  }

  render() {
    return <img src={this.state.rngPic} alt="Dog"></img>;
  }
}

export default RandomPics;
