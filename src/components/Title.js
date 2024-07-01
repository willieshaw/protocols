import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'; 

function Title({ title }) {
    return (
        <div className="page-title">
          <div className="page-title-empty"> {} </div>
          <Link to="/" className="home-link">
             <div className="page-title-main">{title}</div>
        </Link>
        </div>
      );
}

export default Title;

