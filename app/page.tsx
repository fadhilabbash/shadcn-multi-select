"use client"

import MultiSelect from "@/components/multi-select";
import { useState } from "react";


 const HomePage=()=> {
  const cities = ["New York", "London", "Paris", "Tokyo", "Dubai"];
  const [selectedCities, setSelectedCities] = useState<string[]>(["New York","Dubai"]);

  return (
    <div className="max-w-sm mx-auto">
      <MultiSelect
        options={cities}
        placeholder="Select cities"
        selectedItems={selectedCities}
        onChange={setSelectedCities}
      />
    </div>
  );
}
export default HomePage;