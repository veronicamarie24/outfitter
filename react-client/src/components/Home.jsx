import React from "react";

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
          <img src="img/henley.png" class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text"><a href="">summergurl</a></p>
            <button type="button" class="btn btn-secondary btn-sm">American Eagle</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="img/shorts.jpg" class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="img/one-piece.png" class="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="img/red-tank.png" class="card-img-top" alt=""/>
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