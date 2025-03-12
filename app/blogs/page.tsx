import React from "react";
import { Post } from "@/types/post";
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";
import Link from "next/link";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const Blog = async () => {
  const posts: Post[] = await client.fetch(query);

  return (
    <>
    <nav className="bg-black border-b border-yellow-400/30 py-5 px-6 md:px-8 flex justify-between items-center sticky top-0 z-50">
    <Link href="/" className="group flex items-center gap-2">
      <span className="text-2xl font-bold text-yellow-400 transition-all duration-300 hover:text-yellow-300">
        Ashna Ghazanfar
      </span>
    </Link>
    <Link 
      href="/" 
      className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400/90 text-black rounded-full 
                hover:bg-yellow-300 transition-all duration-300 group"
    >
      <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
      <span className="font-medium">Back to Home</span>
    </Link>
  </nav>
    <section className="py-16 md:py-20 bg-black text-white" id="blog">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 uppercase mb-4 neon-glow">
            Welcome to My Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-10 text-gray-300">
            Explore my thoughts and ideas
          </p>
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
                    width={500}
                    height={300}
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
    </>
  );
};

export default Blog;
