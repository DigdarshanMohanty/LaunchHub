"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";
import clsx from "clsx";

const filterOptions = [
  { value: "view", label: "All Startups" },
  { value: "week", label: "Startup of the Week" },
  { value: "month", label: "Startup of the Month" },
  { value: "most-viewed", label: "Most Viewed" },
];

const SearchForm = ({
  query = "",
  filter = "",
}: {
  query?: string;
  filter?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlQuery = searchParams.get("query") || "";
    const urlFilter = searchParams.get("filter") || "";
    setSearchQuery(urlQuery);
    setSelectedFilter(urlFilter);
  }, [searchParams]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery.trim());
    if (selectedFilter && selectedFilter !== "view") {
      params.set("filter", selectedFilter);
    }
    return params.toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchString = buildQueryParams();
    router.push(`/startup/view?${searchString}`);
  };

  const handleFilterSelect = (value: string) => {
    setSelectedFilter(value);
    setDropdownOpen(false);

    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery.trim());
    if (value && value !== "view") {
      params.set("filter", value);
    }

    router.push(`/startup/view?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl px-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl shadow-lg backdrop-blur-md"
    >
      <input
        type="text"
        placeholder="Search for startups..."
        className="flex-1 w-full bg-[#2a2a2a] text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="p-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#333] transition"
          title="Filter"
        >
          <Filter className="w-5 h-5" />
        </button>

        {dropdownOpen && (
          <ul className="absolute top-12 right-0 z-10 w-48 bg-[#1f1f1f] border border-[#333] rounded-lg shadow-lg animate-fade-in">
            {filterOptions.map((option) => (
              <li
                key={option.value}
                className={clsx(
                  "px-4 py-2 cursor-pointer hover:bg-[#2c2c2c] text-sm text-white",
                  selectedFilter === option.value &&
                    "bg-[#333] text-blue-400"
                )}
                onClick={() => handleFilterSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
