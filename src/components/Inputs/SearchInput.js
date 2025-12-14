import React from "react";
import Input from "./Input";
import { Search } from "lucide-react";

const SearchInput = ({
  id = "search",
  name = "search",
  placeholder = "Search by name",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <Search
        className="absolute left-3 top-[1.75rem] text-border_stroke_2 z-10 pointer-events-none"
        size={20}
      />
      <Input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="pl-10"
        showError={false}
      />
    </div>
  );
};

export default SearchInput;

