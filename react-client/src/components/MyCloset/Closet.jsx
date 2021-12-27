import React from "react";
import HeaderSearch from "../common/HeaderSearch";
import ClosetList from "./ClosetList";

function Closet() {
  return (
    <div className="mt-4">
      <HeaderSearch title="My Closet" />
      <ClosetList />
    </div>
  );
}

export default Closet;