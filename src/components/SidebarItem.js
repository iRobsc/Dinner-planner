import React from "react";
import PropTypes from "prop-types";
import "../css/SidebarItem.scss";

function SidebarItem({ title, price }) {
  return (
    <div className="sidebar-item">
      <div className="name">{title}</div>
      <div className="price">{Math.round(price)} SEK</div>
      <button className="delete">
        <span className="fa-layers fa-fw">
          <i className="fas fa-circle" />
          <i className="fa-inverse fas fa-times" data-fa-transform="shrink-6" />
        </span>
      </button>
    </div>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SidebarItem;
