import React from "react";
import RestaurantsList from "./restaurants-list";
import { restaurants } from "./fixtures";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}
