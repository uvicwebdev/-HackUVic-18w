import React, { Component } from 'react';
import Navbar from 'parts/Navbar';
import Schedule from 'sections/Schedule';

export default class Competition extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main className="schedule">
        <div className="container">
          <Navbar />
        </div>
        {/* Sections */}
        <Schedule />
      </main>
    );
  }
}
