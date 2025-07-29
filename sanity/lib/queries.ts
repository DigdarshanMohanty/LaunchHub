import { defineQuery } from "next-sanity";

export const STARTUPS_ALL_QUERY = defineQuery(`
  *[_type == "startup"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image,
    category,
    pitch,
    author->{
      _id,
      name,
      image
    },
    views,
    _createdAt,
    slug  
  }
`);

// STARTUP FILTER QUERY
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
}`);

// STARTUP SEARCH QUERY
export const STARTUPS_SEARCH_QUERY = defineQuery(`
  *[_type == "startup" && defined(slug.current) && 
    (!defined($search) || 
      title match [$search + "*", "*" + $search + "*"] || 
      category match [$search + "*", "*" + $search + "*"] || 
      author->name match [$search + "*", "*" + $search + "*"]
    )
  ]
  | order(_createdAt desc) {
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
  }
`);


// STARTUP BY ID
export const STARTUP_BY_ID_QUERY = defineQuery(`
*[_type == "startup" && defined(slug.current) && _id == $id][0] {
  _id,
  title,
  slug,
  _createdAt,
  category,
  author-> {
    _id,
    name,
    image,
    username
  },
  views,
  description,
  image,
  pitch,
}`);

// STARTUP VIEWS
export const STARTUP_VIEWS_QUERY = defineQuery(`
*[_type == "startup" && _id == $id][0] {
  _id,
  views
}`);

// ✅ FINAL: AUTHOR BY EMAIL (new core query)
export const AUTHOR_BY_EMAIL_QUERY = defineQuery(`
*[_type == "author" && email == $email][0] {
  _id,
  name,
  username,
  email,
  image,
  bio
}`);

// AUTHOR BY _id (no change)
export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "author" && _id == $id][0] {
  _id,
  name,
  username,
  email,
  image,
  bio
}`);

// STARTUPS BY AUTHOR ID
export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
*[_type == "startup" && author._ref == $id] 
| order(_createdAt desc) {
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
}`);

// PLAYLIST BY SLUG
export const PLAYLIST_BY_SLUG_QUERY = defineQuery(`
*[_type == "playlist" && slug.current == $slug][0] {
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
}`);
