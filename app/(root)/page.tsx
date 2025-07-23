import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import {
  STARTUPS_FILTER_QUERY, // Import the filter-specific query
  STARTUPS_SEARCH_QUERY, // Import the search-specific query
} from "@/sanity/lib/queries";
import StartupFilterDropdown from "@/components/StartupFilterDropdown";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; filter?: string }>;
}) {
  const session = await auth();

  const queryInUrl = (await searchParams).query ?? "";
  const filterInUrl = (await searchParams).filter ?? "";

  const isSearchEffectivelyActive = queryInUrl !== "";
  const isFilterEffectivelyActive = filterInUrl !== "";

  let currentQuery;
  let currentParams: { search?: string | null; filter?: string | null } = {};
  let headingText = "All Startups";

  if (isSearchEffectivelyActive) {
    currentQuery = STARTUPS_SEARCH_QUERY;
    currentParams = { search: queryInUrl };
    headingText = `Search results for "${queryInUrl}"`;
  } else if (isFilterEffectivelyActive) {
    currentQuery = STARTUPS_FILTER_QUERY;
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
  } else {
    currentQuery = STARTUPS_FILTER_QUERY;
    currentParams = { filter: null };
    headingText = "All Startups";
  }

  // Fetch data using the determined query and parameters
  const { data: posts } = await sanityFetch({ query: currentQuery, params: currentParams });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={queryInUrl} />
      </section>

      <section className="section_container">
        <div className="flex gap-7 items-center">
          <p className="text-30-semibold">
            {headingText}
          </p>
          <StartupFilterDropdown />
        </div>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-20-semibold">No startups found</p>
          )}
        </ul>
      </section>
      
      <SanityLive />
    </>
  );
}
