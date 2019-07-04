import React from "react";

function Card({ icon, title, NewTibitButton, SearchButton, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h4 className="d-inline float-left">
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h4>
        <div className="d-inline float-right">
          <h4>
            <NewTibitButton />
            <SearchButton />
          </h4>
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
