import React from "react";
import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import Link from "next/link";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

const Blog = async () => {
  const posts: Post[] = await client.fetch(query);

  return (
    <section className="py-16 md:py-20 bg-black text-white" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-yellow-400 text-black px-4 py-2 transform rotate(-2deg) inline-block">
              Latest Writings
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400 transform rotate(1deg)" />
          </h2>
          <p className="text-lg text-yellow-400 mt-6">🌎 Experience my thoughts through my blog posts! ✨</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group relative bg-white bg-opacity-5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-opacity-10 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400"
            >
              <Link href={`/post/${post.slugCurrent}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src={post?.mainImageUrl || "/default-image.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-100">
                    {post?.title || "Untitled Post"}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 line-clamp-3 mb-6">
                    {"Click to read the full article"}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center font-medium text-yellow-400">
                    <span>Read Article</span>
                    <FiArrowUpRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;