import React, { Component, PropTypes } from 'react';

import Icon from 'parts/Icon';

import checkfrontLogo from 'img/Sponsors/checkfront-logo.svg';
import echosecLogo from 'img/Sponsors/echosec-logo.svg';
import freshworksLogo from 'img/Sponsors/freshworks-logo.svg';
import githubLogo from 'img/Sponsors/github-logo.svg';
import hootsuiteLogo from 'img/Sponsors/hootsuite-logo.svg';
import latitudeLogo from 'img/Sponsors/latitude-logo.svg';
import launchacoLogo from 'img/Sponsors/launchaco-logo.svg';
import mlhLogo from 'img/Sponsors/mlh-logo.svg';
import referralLogo from 'img/Sponsors/referral-logo.svg';
import sendwithusLogo from 'img/Sponsors/sendwithus-logo.svg';
import starfishLogo from 'img/Sponsors/starfish-logo.svg';
import stemboltLogo from 'img/Sponsors/stembolt-logo.svg';
import uvicLogo from 'img/Sponsors/uvic-logo.svg';
import viatecLogo from 'img/Sponsors/viatec-logo.svg';
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
        title: 'Powered by',
        orgs: [
          {
            title: 'Viatec',
            href: 'http://www.viatec.ca/',
            image: viatecLogo,
          },
        ],
      },
      {
        title: 'Platinum Sponsors',
        orgs: [
          {
            title: 'Referral Saasquatch',
            href: 'https://www.referralsaasquatch.com/',
            image: referralLogo,
          },
          {
            title: 'GitHub',
            href: 'https://www.github.com/',
            image: githubLogo,
          },
        ],
      },
      {
        title: 'Gold Sponsors',
        orgs: [
          {
            title: 'Latitude Geographics',
            href: 'http://www.latitudegeo.com/',
            image: latitudeLogo,
          },
          {
            title: 'Hootesuite',
            href: 'https://hootsuite.com/',
            image: hootsuiteLogo,
          },
          {
            title: 'SendWithUs',
            href: 'https://www.sendwithus.com/',
            image: sendwithusLogo,
          },
          {
            title: 'Echosec',
            href: 'https://www.echosec.net/',
            image: echosecLogo,
          },
          {
            title: 'Starfish Medical',
            href: 'http://starfishmedical.com/',
            image: starfishLogo,
          },
          {
            title: 'Freshworks',
            href: 'https://freshworks.io/',
            image: freshworksLogo,
          },
        ],
      },
      {
        title: 'Silver Sponsors',
        orgs: [
          {
            title: 'Stembolt',
            href: 'https://stembolt.com/',
            image: stemboltLogo,
          },
          {
            title: 'Launchaco',
            href: 'http://launchaco.com/',
            image: launchacoLogo,
          },
          {
            title: 'Checkfront',
            href: 'https://www.checkfront.com/',
            image: checkfrontLogo,
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
          <div className="columns cols-md flex-center">
            <div className="column col-12">
              <h2>Sponsors</h2>
            </div>
            {/* sponsors.map((section) =>
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
            )*/}
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
      </section>
    );
  }
}
