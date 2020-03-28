/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import './styles/styles.css'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

export default function FeaturePage() {
  return (

    <Container fluid>
      <Accordion defaultActiveKey="0" className="myaccordion">
        <Card border="dark">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="heading">
            AOSP Project
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the bodyasdeve</Card.Body>
          </Accordion.Collapse>
        </Card>
        
        <Card border="primary">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

