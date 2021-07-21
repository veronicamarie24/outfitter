import React from "react";
import HeaderSearch from "./HeaderSearch";
import ClosetList from "./ClosetList";

function Closet() {
  return (
    <div>
      <HeaderSearch title="My Closet" />
      <ClosetList />
    </div>
  );
}

export default Closet;