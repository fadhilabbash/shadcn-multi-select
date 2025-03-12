"use client";

import MultiSelect from "@/components/multi-select";
import { useState } from "react";

const HomePage = () => {
  const cities = [
    { id: "1", name: "New York" },
    { id: "2", name: "London" },
    { id: "3", name: "Paris" },
    { id: "4", name: "Tokyo" },
    { id: "5", name: "Dubai" },
  ];
  const [selectedCities, setSelectedCities] = useState<string[]>(["1","2"]);

  return (
    <div className="max-w-sm mx-auto p-2">
      <MultiSelect
        options={cities}
        placeholder="Select cities"
        selectedItems={selectedCities}
        onChange={setSelectedCities}
      />
      {JSON.stringify(selectedCities)}
    </div>
  );
};
export default HomePage;
