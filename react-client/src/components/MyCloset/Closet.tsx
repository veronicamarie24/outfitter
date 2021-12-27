import React from "react";
import HeaderSearch from "../common/HeaderSearch";
import ClosetList from "./ClosetList";

export const Closet = () =>
  <div className="mt-4">
    <HeaderSearch title="My Closet" />
    <ClosetList />
  </div>