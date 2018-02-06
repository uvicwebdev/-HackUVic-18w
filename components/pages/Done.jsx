import React, { Component } from 'react';
import Navbar from 'parts/Navbar';
import { Link } from 'react-router';

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
      <main className="done">
        <div className="container">
          <Navbar />
        </div>
        <div className="col-12 flex flex-center">
          <div className="columns col-6">
            <div className="col-12 text-center">
              <h2>Thanks for signing up!</h2>
            </div>
            <div className="col-12">
              <div className="btn btn-primary btn-block btn-fat">
                <Link to="/">Back to HackUVic Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
