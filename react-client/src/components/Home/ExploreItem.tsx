import React from "react";

type ExploreItemProps = {
  imgUrl: string,
  username: string
}

export const ExploreItem = ({ imgUrl, username }: ExploreItemProps) =>
  <div className="col">
    <div className="card">
      <div className="card-body">
        <p className="card-text clearfix">
          <span className="float-start"><a href="" id="username_link">{ username }</a></span>
          <span className="float-end"><button type="button" className="btn btn-secondary btn-sm">Follow</button></span>
        </p>
      </div>
      <img src={ imgUrl } className="card-img-top" alt=""/>
    </div>
  </div>
