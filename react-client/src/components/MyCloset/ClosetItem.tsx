import React from "react";

type ClosetItemProps = {
  description: string,
  fileName: string,
  tags?: string[]
}

export const ClosetItem = ({ description, fileName, tags }: ClosetItemProps) =>
  <div className="col">
    <div className="card text-black closet-item">
      <img src={ `./img/${ fileName }` } className="card-img" alt={ description } />
      <div className="card-img-overlay">
        <p className="card-text closet-tag-buttons">
          {tags && tags.map((tag) =>
            <button type="button" className="btn btn-secondary btn-sm">{tag}</button>
          )}
        </p>
      </div>
    </div>
  </div>
