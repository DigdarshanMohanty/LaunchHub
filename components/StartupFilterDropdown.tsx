"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const FILTER_OPTIONS = [
  { label: "All Startups", value: "" },
  { label: "Startup of the Week", value: "week" },
  { label: "Startup of the Month", value: "month" },
  { label: "Most Viewed", value: "most-viewed" },
];

export default function StartupFilterDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "";

  const [selected, setSelected] = useState(currentFilter);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    setSelected(newFilter);

    const params = new URLSearchParams(searchParams.toString());
    if (newFilter) {
      params.set("filter", newFilter);
    } else {
      params.delete("filter");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative inline-block m-5">
      <select
        value={selected}
        onChange={handleChange}
        className="select"
      >
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
