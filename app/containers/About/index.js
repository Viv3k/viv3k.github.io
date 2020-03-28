/*
 * Comics page
 *
 * List all the favorite comics.
 */
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import strings from './strings'
import { FormattedMessage } from 'react-intl';

export default function About() {

  return (
    <Jumbotron>
      <h1>
        <FormattedMessage {...strings.aboutPage} />
      </h1>
      <p>
        <FormattedMessage {...strings.aboutPage.desc} />
      </p>
      <p>
        <FormattedMessage {...strings.aboutPage.goodbye} />
      </p>
      <p>
        <Button variant="primary"><FormattedMessage {...strings.aboutPage.justBye} /></Button>
      </p>
    </Jumbotron>
  );
}
