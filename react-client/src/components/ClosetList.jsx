import React from "react";
import IMAGES from "../images"

function ClosetList() {
  return (
    <div className="container pb-4">
      <div className="row mt-3">
        <div className="col">
          <div className="card text-black">
            <img src={ IMAGES.henley } className="card-img" alt="" />
            <div className="card-img-overlay">
              <p className="card-text closet-tag-buttons">
                <button type="button" className="btn btn-secondary btn-sm">American Eagle</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card text-black">
          <img src={ IMAGES.shorts } className="card-img" alt="" />
          <div className="card-img-overlay">
            <p className="card-text closet-tag-buttons">
              <button type="button" className="btn btn-secondary btn-sm">Loungewear</button>
            </p>
          </div>
        </div>
        </div>
        <div className="col">
          <div className="card text-black">
            <img src={ IMAGES.onePiece } class="card-img" alt="" />
            <div className="card-img-overlay">
              <p className="card-text closet-tag-buttons">
                <button type="button" className="mr-1 btn btn-secondary btn-sm me-1">Abercrombie</button>
                <button type="button" className="btn btn-secondary btn-sm">Summer</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-black">
            <img src={ IMAGES.sweaters } class="card-img" alt="" />
            <div className="card-img-overlay">
              <p className="card-text closet-tag-buttons">
                <button type="button" className="btn btn-secondary btn-sm me-1">Neutrals</button>
                <button type="button" className="btn btn-secondary btn-sm">Winter</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosetList;