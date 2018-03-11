import React, { Component, PropTypes } from 'react';

import classNames from 'classnames';
import moment from 'moment';

export default class Schedule extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const schedule = [
      {
        time: '2018-03-10 09:00',
        events: [
          {
            title: 'Registration',
            location: 'Atrium',
          },
        ],
      },
      {
        time: '2018-03-10 10:00',
        events: [
          {
            title: 'Opening Ceremonies',
            location: 'ECS 123',
          },
        ],
      },
      { time: '2018-03-10 11:00', events: [] },
      {
        time: '2018-03-10 12:00',
        events: [
          {
            title: 'Hacking Starts',
          },
        ],
      },
      { time: '2018-03-10 12:00', events: [] },
      {
        time: '2018-03-10 13:00',
        events: [
          {
            title: 'Lunch',
            location: 'Atrium',
          },
        ],
      },
      {
        time: '2018-03-10 14:00',
        events: [
          {
            title: 'Hackthon 101',
            location: 'ECS 130',
          },
        ],
      },
      { time: '2018-03-10 15:00', events: [] },
      { time: '2018-03-10 16:00', events: [] },
      { time: '2018-03-10 17:00', events: [] },
      { time: '2018-03-10 18:00', events: [] },
      {
        time: '2018-03-10 19:00',
        events: [
          {
            title: 'Dinner',
            location: 'Atrium',
          },
        ],
      },
      { time: '2018-03-10 20:00', events: [] },
      { time: '2018-03-10 21:00', events: [] },
      { time: '2018-03-10 22:00', events: [] },
      { time: '2018-03-10 23:00', events: [] },
      {
        time: '2018-03-11 00:00',
        events: [
          {
            title: 'Midnight Snack',
            location: 'Atrium',
          },
        ],
      },
      {
        time: '2018-03-11 00:30',
        events: [
          {
            title: 'Free hugs with Bill Bird',
            location: 'Atrium',
          },
        ],
      },
      { time: '2018-03-11 01:00', events: [] },
      {
        time: '2018-03-11 02:00',
        events: [
          {
            title: 'Cup Stacking',
            location: 'Atrium',
          },
        ],
      },
      { time: '2018-03-11 03:00', events: [] },
      { time: '2018-03-11 04:00', events: [] },
      { time: '2018-03-11 05:00', events: [] },
      { time: '2018-03-11 06:00', events: [] },
      { time: '2018-03-11 07:00', events: [] },
      {
        time: '2018-03-11 08:00',
        events: [
          {
            title: 'Breakfast',
            location: 'Atrium',
          },
        ],
      },
      {
        time: '2018-03-11 09:00',
        events: [
          {
            title: 'Hacking Ends',
          },
        ],
      },
      {
        time: '2018-03-11 10:00',
        events: [
          {
            title: 'Closing Ceremonies',
            location: 'ECS 123',
          },
        ],
      },
      { time: '2018-03-11 11:00', events: [] },
      { time: '2018-03-11 12:00', events: [] },
    ];
    return (
      <section id="schedule">
        <div className="container">
          <div className="columns cols-md col-center">
            <div className="column col-12">
              <h2>Schedule</h2>
            </div>
            <div className="schedule column col-8 col-md-12">
              { schedule.map((slot) => {
                if (slot.events.length > 0) {
                  const t = moment(slot.time);
                  return (
                    <div key={slot.time} className={classNames('slot', { active: moment().isSame(t, 'hour'), disabled: moment().isAfter(t, 'hour') })}>
                      <div className="time">{t.format('h:mm A')}</div>
                      { slot.events.map((event) =>
                        <div key={event.title} className="event">
                          <span className="title">{event.title}</span>
                          &nbsp;<br className="hide-sm" />
                          { event.location ? <span className="location">({event.location})</span> : null }
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
