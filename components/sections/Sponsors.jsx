import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

import mlhLogo from 'img/Sponsors/mlh-logo.svg';
import uvicLogo from 'img/Sponsors/uvic-logo.svg';
import freshworksLogo from 'img/Sponsors/freshworks-logo.svg';
import swuLogo from 'img/Sponsors/sendwithus-logo.svg';
import starfishLogo from 'img/Sponsors/starfish-logo.svg';
import workdayLogo from 'img/Sponsors/workday-logo.svg';
import launchacoLogo from 'img/Sponsors/launchaco-logo.svg';
import Config from 'Config';

import sponsorPackage from 'docs/HackUVic-Sponsorship-Package-2018.pdf';

export default class Sponsors extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const sponsors = [
      {
        title: '',
        orgs: [
          {
            title: 'Send With Us',
            href: 'https://sendwithus.com/',
            image: swuLogo,
          },
          {
            title: 'Workday',
            href: 'https://workday.com/',
            image: workdayLogo,
          },
          {
            title: 'Freshworks',
            href: 'https://freshworks.com/',
            image: freshworksLogo,
          },
          {
            title: 'Starfish Medical',
            href: 'https://mlh.io/',
            image: starfishLogo,
          },
          {
            title: 'Launchaco',
            href: 'https://launchaco.com/',
            image: launchacoLogo,
          },
        ],
      },
      {
        title: 'Partners',
        orgs: [
          {
            title: 'University of Victoria',
            href: 'https://www.uvic.ca/',
            image: uvicLogo,
          },
          {
            title: 'Major League Hacking',
            href: 'https://mlh.io/',
            image: mlhLogo,
          },
        ],
      },
    ];
    return (
      <section id="sponsors">
        <div className="container">
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Sponsors</h2>
            </div>
            {sponsors.map((section) =>
              <div key={section.title} className="column col-12">
                <h3 className="text-center">{section.title}</h3>
                <div className="columns col-center flex-align-center">
                  { section.orgs.map((org) =>
                    <div key={org.title} className="column col-sm-12 col-4">
                      <a href={org.href} target="_blank" rel="noopener noreferrer">
                        <img src={org.image} alt={org.title} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="column col-12">
              <div className="flex flex-center fill-xs">
                <div className="text-center">
                  <div className="columns">
                    <div className="column col-sm-12 col-6">
                      <a className="btn btn-fat" href={sponsorPackage} target="_blank" rel="noopener noreferrer">
                        <Icon name="gift" size={1.3} /> Get the sponsorship package
                      </a>
                    </div>
                    <div className="column col-sm-12 col-6">
                      <a className="btn btn-primary btn-block btn-fat" href={`mailto:${Config.contact.email}`} target="_blank" rel="noopener noreferrer">
                        <Icon name="mail" size={1.3} /> Contact the organizers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
