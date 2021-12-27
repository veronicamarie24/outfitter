import React from "react";
import { ExploreItem } from "./ExploreItem";

export const Home = () =>
  <div className="container pb-4">
    <div className="row">
      <div className="col" id="header">
          <h1 className="text-center">Organize your closet. Digitally.</h1>
      </div>
    </div>
    <div className="row">
      <h2 className="mb-4">Explore</h2>
      <ExploreItem username="summergurl" imgUrl="img/henley.png" />
      <ExploreItem username="momof4" imgUrl="img/one-piece.png" />
      <ExploreItem username="owl_city" imgUrl="img/red-tank.png" />
      <ExploreItem username="hannah241" imgUrl="img/leggings.png" />
    </div>
    <div className="row mt-4">
      <ExploreItem username="thrifter22" imgUrl="img/dress.png" />
      <ExploreItem username="worldtraveler" imgUrl="img/align-tshirt.png" />
      <ExploreItem username="livelaughlove" imgUrl="img/backpack.png" />
    </div>
  </div>
