'use client'

import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import { Author, Startup } from '@/sanity/types'
import { Skeleton } from './ui/skeleton'

export type StartupTypeCard = Omit<Startup, "author"> & {
  author?: Author
}

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    title,
    author,
    _id,
    description,
    image,
    category
  } = post;

  return (
    <li className="rounded-xl border border-indigo-500 bg-[#111827] shadow-lg hover:shadow-indigo-600/30 transition duration-300 overflow-hidden flex flex-col">
      <Link href={`/startup/${_id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Date + Views */}
        <div className="flex justify-between text-sm text-gray-400">
          <span>{formatDate(_createdAt)}</span>
          <span className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4 text-indigo-500" />
            {views}
          </span>
        </div>

        {/* Title + Description */}
        <div className="flex flex-col gap-2">
          <Link href={`/startup/${_id}`}>
            <h2 className="text-xl font-semibold text-indigo-500 line-clamp-2 hover:underline">
              {title}
            </h2>
          </Link>
          <p className="text-sm text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Category + Button */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={`/?query=${category?.toLowerCase()}`}
            className="text-xs bg-indigo-900/40 text-indigo-300 font-medium px-3 py-1 rounded-full"
          >
            {category}
          </Link>

          <Button asChild className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mt-4">
          <Link href={`/user/${author?._id}`} className="flex items-center gap-2">
            <Image
              src={author?.image || "/default-avatar.png"}
              alt={author?.name || "User avatar"}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="text-sm text-white font-medium">{author?.name}</span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={index}>
          <Skeleton className="h-80 w-full rounded-xl bg-neutral-800" />
        </li>
      ))}
    </>
  );
};

export default StartupCard;
