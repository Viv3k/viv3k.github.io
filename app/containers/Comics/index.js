/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import xkcd from './images/xkcd.svg';
import nathan from './images/nathan.svg';
import monkey from './images/monkey.svg';

import { useEffect } from 'react';

// TODO: Export card into a custom component.
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

  useScript('https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.0/holder.js');

  return (
    <div className="vivek">
 <CardColumns bsPrefix='card-columns'>
  <Card>
    <Card.Img variant="top" src={xkcd} className='h-50'/>
    <Card.Body>
      <Card.Title><a href='https://xkcd.com' target='blank'>xkcd</a></Card.Title>
      <Card.Text>
        A webcomic of romance, sarcasm, math, and language. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        <a href='https://explosm.net/' > Cyanide and happiness </a>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          <p> Rob DenBleyker ❤️ </p>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card bg="outline-success" text="primary" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p text="white">
        <a href='https://turnoff.us' target='blank'>turnoff.us</a>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          <p >Daniel Stori</p>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img className='h=10' variant="top" src={nathan}/>
    <Card.Body>
      <Card.Title><a href="https://www.instagram.com/nathanwpylestrangeplanet/?hl=en" target='blank'>Strange planet</a></Card.Title>
      <Card.Text>
         <p>Nathan Pyle's Strange Planet holds up a mirror to weird human behaviour</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  
  
  <Card>
    <Card.Img variant="top" src={monkey} className='h-50'/>
    <Card.Body>
      <Card.Title><a href='http://monkeyuser.com' target='blank'>Monkey User</a></Card.Title>
      <Card.Text>
        Software development satire in a web comic.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        <a href='https://sarahcandersen.com' > Sarah's Scribbles </a>
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          'Adulthood is a Myth'
        </small>
      </footer>
    </blockquote>
  </Card>
</CardColumns>
      </div>
  );
}
