"use client";

import React, { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export default function UserSearch({ onSearch }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-64 px-4 py-2 pr-10 rounded-md border-2 border-gray-600 outline-none focus:outline-none focus:ring-0 focus:border-gray-600"
        />

        <Search
          size={18}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}
