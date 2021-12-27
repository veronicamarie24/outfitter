import React from "react";
import { ClosetItem } from "./ClosetItem";

function ClosetList() {
  return (
    <div className="container pb-4">
      <div className="row mt-3">
        <ClosetItem
          fileName="henley.png"
          description="henley tshirt"
          tags={['American Eagle']}
        />
        <ClosetItem
          fileName="leggings.png"
          description="leggings"
          tags={['Athleisure']}
        />
        <ClosetItem
          fileName="red-tank.png"
          description="tanktop"
          tags={['Abercrombie', 'Summer']}
        />
        <ClosetItem
          fileName="one-piece.png"
          description="henley tshirt"
          tags={['Swim', 'Summer']}
        />
        <ClosetItem
          fileName="align-tshirt.png"
          description="align shirt"
          tags={['Lululemon', 'Workout']}
        />
        <ClosetItem
          fileName="dress.png"
          description="dress"
        />
      </div>
    </div>
  );
}

export default ClosetList;