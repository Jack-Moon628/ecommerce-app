import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className={`${size} menu-item`}
    onClick={()=>history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-img"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{"Shop Now".toUpperCase()}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);