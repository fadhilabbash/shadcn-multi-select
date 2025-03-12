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
  const [value, setValue] = useState<string[]>();

  return (
    <div className="max-w-sm mx-auto p-2">
      <MultiSelect
        options={cities}
        placeholder="Select cities"
        onChange={setValue}
        value={value}
      />
      {JSON.stringify(value)}
    </div>
  );
};
export default HomePage;
