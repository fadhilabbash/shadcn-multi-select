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
  options: { id: string; name: string }[];
  placeholder?: string;
  value?: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect = ({
  options,
  placeholder = "Select items",
  value = [],
  onChange,
}: MultiSelectProps) => {
  const toggleSelection = (item: string, checked: boolean) => {
    const updatedSelection = checked
      ? [...value, item]
      : value.filter((i) => i !== item);
    onChange(updatedSelection);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative w-full">
          <div className="relative flex items-center">
            <Input
              value={
                value.length > 0
                  ? options
                      .filter((opt) => value.includes(opt.id))
                      .map((opt) => opt.name)
                      .join(", ")
                  : placeholder
              }
              className="w-full cursor-pointer pe-10"
              readOnly
            />
            <ChevronDown className="absolute ltr:right-3 rtl:left-3 pointer-events-none h-4 w-4 opacity-50" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)]">
        {options.map((item) => (
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            key={item.id}
            checked={value.includes(item.id)}
            onCheckedChange={(checked) => toggleSelection(item.id, checked)}
          >
            {item.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MultiSelect;
