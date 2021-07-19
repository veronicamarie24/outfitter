import React from "react";
import IMAGES from "../images"

function Home() {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col" id="header">
            <h1 className="text-center">Organize your closet. Digitally.</h1>
        </div>
      </div>
      <div className="row">
        <h2>Explore</h2>
      <div className="col">
        <div className="card">
          <img src={ IMAGES.henley } class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={ IMAGES.shorts } class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={ IMAGES.onePiece } class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={ IMAGES.redTank } class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;