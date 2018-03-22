import React from "react";
import PropTypes from "prop-types";
import "../css/SidebarItem.scss";

function SidebarItem({ id, title, price, deleteDishFromMenu }) {
  const onDeleteClick = () => {
    deleteDishFromMenu(id);
  };

  return (
    <div className="sidebar-item">
      <div className="name">{title}</div>
      <div className="price">{price} SEK</div>
      <button className="delete" onClick={onDeleteClick}>
        <span className="fa-layers fa-fw">
          <i className="fas fa-circle" />
          <i className="fa-inverse fas fa-times" data-fa-transform="shrink-6" />
        </span>
      </button>
    </div>
  );
}

SidebarItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteDishFromMenu: PropTypes.func.isRequired,
};

export default SidebarItem;
