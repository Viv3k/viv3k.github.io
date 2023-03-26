/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './styles/style.css'
import logo from './images/penrose.svg'
import BlogPost from './BlogPost';
import BlogHeader from '../../components/BlogHeader';

export default function NotFound() {
  const x = {page_cover:"https://picsum.photos/200/300", title:"My first blog", summary:"This is whole summary of the project?`"}
  return (
    <div className="App">
        <BlogHeader/>
    </div>
  );
}
