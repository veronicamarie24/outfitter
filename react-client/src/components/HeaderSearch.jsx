import React from "react";

function HeaderSearch(props) {
  return (
    <div className="container">
      <div className="row mt-3" id="closet_header">
        <div className="col-6">
            <span><h2>{props.title}</h2></span>
        </div>
        <div className="col-5">
          <div className="input-group">
            <input type="text" class="form-control" aria-label="Search" aria-describedby="search_button" />
            <button class="btn btn-outline-secondary" type="button" id="search_button">Search</button>
          </div>
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-secondary">Filter</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;