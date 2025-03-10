"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { ChevronDown } from "lucide-react";

interface MultiSelectProps {
  options: string[];
  placeholder?: string;
  selectedItems: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect = ({
  options,
  placeholder = "Select items",
  selectedItems,
  onChange,
}: MultiSelectProps) => {
  const toggleSelection = (item: string, checked: boolean) => {
    const updatedSelection = checked
      ? [...selectedItems, item]
      : selectedItems.filter((i) => i !== item);

    onChange(updatedSelection);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative w-full">
          <div className="relative flex items-center">
            <Input
              value={
                selectedItems.length > 0
                  ? selectedItems.join(", ")
                  : placeholder
              }
              className="w-full cursor-pointer pe-10"
              readOnly
            />
            <ChevronDown className="absolute right-3 pointer-events-none h-4 w-4 opacity-50" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)]">
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            key={item}
            checked={selectedItems.includes(item)}
            onCheckedChange={(checked) => toggleSelection(item, checked)}
          >
            {item}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MultiSelect;
