/*
 * Comics page
 *
 * List all the favorite comics.
 */
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import xkcd from './images/xkcd.svg';
import nathan from './images/nathan.svg';
import monkey from './images/monkey.svg';
import strings from './strings';
import './styles/styles.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default function Comics() {

  return (
    <div className="vivek">
      <CardColumns bsPrefix='card-columns'>
        <Card>
          <Card.Img variant="top" src={xkcd} className='h-50' />
          <Card.Body>
            <Card.Title>
              <a href='https://xkcd.com' target='blank'>
                <FormattedMessage {...strings.xkcd} />
              </a></Card.Title>
            <Card.Text>
              <FormattedMessage {...strings.xkcd.desc} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              <a href='https://explosm.net/' > <FormattedMessage {...strings.cnh} /> </a>
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <p> <FormattedMessage {...strings.cnh.desc} /> </p>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card bg="outline-success" text="primary" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p text="white">
              <a href='https://turnoff.us' target='blank'><FormattedMessage {...strings.turnoff} /></a>
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <p ><FormattedMessage {...strings.turnoff.desc} /></p>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img className='h=10' variant="top" src={nathan} />
          <Card.Body>
            <Card.Title>
              <a href="https://www.instagram.com/nathanwpylestrangeplanet/?hl=en" target='blank'>
                <FormattedMessage {...strings.nathan} />
              </a></Card.Title>
            <Card.Text>
              <p><FormattedMessage {...strings.nathan.desc} /></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>


        <Card>
          <Card.Img variant="top" src={monkey} className='h-50' />
          <Card.Body>
            <Card.Title><a href='http://monkeyuser.com' target='blank'>
              <FormattedMessage {...strings.monkey} /></a></Card.Title>
            <Card.Text>
              <FormattedMessage {...strings.monkey.desc} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              <a href='https://sarahcandersen.com' > <FormattedMessage {...strings.sarah} /> </a>
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <FormattedMessage {...strings.sarah.desc} />
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardColumns>
    </div>
  );
}
