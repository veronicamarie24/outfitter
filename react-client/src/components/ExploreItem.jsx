import React from "react";

function ExploreItem(props) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <p className="card-text clearfix">
            <span className="float-start"><a href="" id="username_link">{ props.username }</a></span>
            <span className="float-end"><button type="button" class="btn btn-secondary btn-sm">Follow</button></span>
          </p>
        </div>
        <img src={ props.imgUrl } class="card-img-top" alt=""/>
      </div>
    </div>
  );
}

export default ExploreItem;