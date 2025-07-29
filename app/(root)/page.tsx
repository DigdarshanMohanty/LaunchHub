import { auth } from "@/auth";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import {
  STARTUPS_FILTER_QUERY,
  STARTUPS_SEARCH_QUERY,
} from "@/sanity/lib/queries";

import HeroFramerWrapper from "@/components/heroFramer"; 
import SearchForm from "@/components/SearchForm";
import StartupFilterDropdown from "@/components/StartupFilterDropdown";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; filter?: string }>;
}) {
  const session = await auth();
  const queryInUrl = (await searchParams).query ?? "";
  const filterInUrl = (await searchParams).filter ?? "";

  let currentQuery: string = STARTUPS_FILTER_QUERY;
  let currentParams: { search?: string | null; filter?: string | null } = {
    filter: null,
  };
  let headingText = "All Startups";

  if (queryInUrl) {
    currentQuery = STARTUPS_SEARCH_QUERY;
    currentParams = { search: queryInUrl };
    headingText = `Search results for "${queryInUrl}"`;
  } else if (filterInUrl) {
    currentParams = { filter: filterInUrl };
    switch (filterInUrl) {
      case "week":
        headingText = "Startups of the Week";
        break;
      case "month":
        headingText = "Startups of the Month";
        break;
      case "most-viewed":
        headingText = "Most Viewed Startups";
        break;
      default:
        headingText = "All Startups";
    }
  }

  const { data: posts } = await sanityFetch({
    query: currentQuery,
    params: currentParams,
  });
   return (
  <main className="min-h-screen px-6 sm:px-10 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center my-auto">
    <HeroFramerWrapper />

    {/* Optional: Keep these in if you want them visible */}
    {/* <SearchForm query="" />

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <h2 className="text-2xl font-semibold">{headingText}</h2>
      <StartupFilterDropdown />
    </div>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.length > 0 ? (
        posts.map((post: StartupTypeCard) => (
          <StartupCard key={post._id} post={post} />
        ))
      ) : (
        <p className="text-lg text-center col-span-full">No startups found</p>
      )}
    </section> */}

    <SanityLive />
  </main>
);
}
