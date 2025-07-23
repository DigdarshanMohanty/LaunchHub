import { defineQuery } from "next-sanity";

export const STARTUPS_FILTER_QUERY = defineQuery(`
*[_type == "startup" &&
  (
    !defined($filter) || ($filter != "" && (
        ($filter == "week" && weekWinner == true) ||
        ($filter == "month" && monthWinner == true) ||
        ($filter == "most-viewed")
    ))
  )
]
| order(
    select(
      $filter == "most-viewed" => views,
      _createdAt
    ) desc,
    views desc
  )
{
  _id,
  title,
  slug,
  _createdAt,
  description,
  category,
  image,
  pitch,
  views,
  monthWinner,
  weekWinner,
  author->{
    _id,
    name,
    image
  }
}`
);

export const STARTUPS_SEARCH_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);



export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && _id == $id][0] {
        _id,
        title,
        slug,
        _createdAt,
        category,
        author-> {
        _id,
        name,
        image,
        username,
        },
        views,
        description,
        image,
        pitch,
    }`,
)

export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0] {
        _id,
        views
    }`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`*[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio,
}`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`*[_type == "author" && _id == $id][0]{
  _id,
  name,
  username,
  email,
  image,
  bio
}`);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(
    `*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
        _id,
        title,
        slug,
        _createdAt,
        author-> {
        _id,
        name,
        image,
        bio
        },
        views,
        description,
        category,
        image,
    }`,
);

export const PLAYLIST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "playlist" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    select[]-> {
      _id,
      title,
      slug,
      _createdAt,
      author-> {
        _id,
        name,
        image,
        bio,
        slug
      },
      views,
      description,
      category,
      image,
      pitch
    }
  }`
);
