import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import {
  STARTUPS_ALL_QUERY,
  STARTUPS_FILTER_QUERY,
  STARTUPS_SEARCH_QUERY,
} from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string; filter?: string };
}) {
  const { query = "", filter = "" } = searchParams;

  let selectedQuery = STARTUPS_ALL_QUERY;
  let params = {};

  if (query) {
    selectedQuery = STARTUPS_SEARCH_QUERY;
    params = { search: query };
  } else if (filter) {
    selectedQuery = STARTUPS_FILTER_QUERY;
    params = { filter };
  }

  const session = await auth();

  const { data: posts } = await sanityFetch({ query: selectedQuery, params });

  return (
    <>
      <section className="pink_container flex flex-col items-center gap-4">
        <h1 className="heading text-center">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} filter={filter} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query
            ? `Search results for "${query}"`
            : filter
            ? `Filtered by: ${filter}`
            : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
