import React from "react";

function ClosetList() {
  return (
    <div className="container pb-4">
      <div className="row mt-3">
        <div className="col">
          <div className="card text-black">
            <img src="/img/henley.png" className="card-img" alt="" />
            <div className="card-img-overlay">
              <p className="card-text closet-tag-buttons">
                <button type="button" className="btn btn-secondary btn-sm">American Eagle</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card text-black">
          <img src="/img/leggings.png" className="card-img" alt="" />
          <div className="card-img-overlay">
            <p className="card-text closet-tag-buttons">
              <button type="button" className="btn btn-secondary btn-sm">Loungewear</button>
            </p>
          </div>
        </div>
        </div>
        <div className="col">
          <div className="card text-black">
            <img src="/img/red-tank.png" class="card-img" alt="" />
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
            <img src="/img/one-piece.png" class="card-img" alt="" />
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