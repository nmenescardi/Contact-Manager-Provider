import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-primary">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} {...contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
