import React from "react";
import PropTypes from "prop-types";

function SidebarItem({ title, price }) {
  return (
    <div>
      <div className="sidebar-item">
        <div>{title}</div>
        <div>{Math.round(price)} SEK</div>
      </div>
    </div>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SidebarItem;
