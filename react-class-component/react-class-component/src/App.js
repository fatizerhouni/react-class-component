import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'A brief bio about John Doe',
      imgSrc: 'url_to_image',
      profession: 'Software Developer',
    },
    show: false,
    interval: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time Interval: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;