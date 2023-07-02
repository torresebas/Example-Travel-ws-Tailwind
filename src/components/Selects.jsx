import React from "react";

import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/borabora.jpg";
import Maldives2 from "../assets/maldives.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/maldives2.jpg";
import { SelectsCard } from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard image={Borabora} text="Bora Bora" />
      <SelectsCard image={Borabora2} text="Maldives" />
      <SelectsCard image={Maldives} text="Jamaica" />
      <SelectsCard image={Maldives2} text="Antigua" />
      <SelectsCard image={Maldives3} text="Cozumel" />
      <SelectsCard image={Keywest} text="Key West" />
    </div>
  );
};

export default Selects;
