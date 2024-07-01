import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

function ListItem({ number, title, description }) {
  return (
    <Link to={`/${title.toLowerCase().replace(/ /g, '-')}`} className="list-item-link">
      <div className="list-item">
        <div className="list-item-number">{number}</div>
        <div className="list-item-content">
          <h3 className="list-item-title">{title}</h3>
          <p className="list-item-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
