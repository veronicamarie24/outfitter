import React from "react";

function ClothesItem(props) {
  return (
    <div className="card text-black">
      <img src={ `./img/${ props.fileName }` } className="card-img" alt={ props.description } />
      <div className="card-img-overlay">
        <p className="card-text closet-tag-buttons">
          <button type="button" className="btn btn-secondary btn-sm"></button>
        </p>
      </div>
    </div>
  );
}

export default ClothesItem;