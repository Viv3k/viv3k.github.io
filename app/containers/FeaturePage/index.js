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
import ListGroup from 'react-bootstrap/ListGroup'
import ListItemTitle from './ListItemTitle';
import './styles/styles.css'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

export default function FeaturePage() {
  return (

    <Container fluid>
        <ListGroup variant="flush border-0">
          <ListGroup.Item>
            <Nav defaultActiveKey="/home" className="flex-column">
              
                <Card class= "rounded">
                  <Nav.Link href="/home" className = "titlex border-0">
                    <Card.Header className = "heading">Android Open Source Project - Lockscreen Magazine Service</Card.Header>
                  </Nav.Link>
                  <Card.Body>
                    <div className = "desc mx-3">
                      <p className="mx-3 desc"> This project objectively deals with changes to Android source code, in particular SystemUI
                        component, to have a wallpaper rotation service feed in a new wallpaper everytime the device wakes up.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              
            </Nav>
          </ListGroup.Item>
          <ListGroup.Item className = "border-0">
            <Nav defaultActiveKey="/home" className="flex-column" >
              <Nav.Link href="/home">Live streaming using AWS MediaLive and MediaSource</Nav.Link>
              <p className="mx-3 desc"> Scalable live streaming infra to injest video source and churn out live streams to be
                consumed by web and mobile applications. Support for both HLS (with AES-128 encryption) and DASH streams.
              </p>
            </Nav>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">React Web Application on github.io</Nav.Link>
              <p className="mx-3 desc"> A simple serverless React application hosted on github.io using gh-pages
              </p>
            </Nav>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav defaultActiveKey="/home" className="flex-column" >
              <Nav.Link href="/home">Unity AR - Enhanced surface detection</Nav.Link>
              <p className="mx-3 desc"> Surface detection feature to identify curved surfaces and enable transitions of 3D models
                over the surface. Granular surfical polygon overlay reaching a maximum of 10k polygons per frame.
              </p>
            </Nav>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav defaultActiveKey="/home" className="flex-column" >
              <Nav.Link href="/home">Volume manager application for multi-connect environment.</Nav.Link>
              <p className="mx-3 desc"> Linux application to control multiple bluetooth connections allowed by Bluetooth version
                5.0. Also creates a cool streo effect syncing all the devices to play one audio source signal.
              </p>
            </Nav>
          </ListGroup.Item>
        </ListGroup>
    </Container>
  );
}

