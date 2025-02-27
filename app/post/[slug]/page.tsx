import Comments from "@/app/components/comments";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import Link from 'next/link';

interface Post {
  authorName: string;
  authorImage: string;
  publishedAt: string | number | Date;
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  body: TypedObject[];
  mainImageUrl: string;
}

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Post | null> {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      body,
      publishedAt,
      "mainImageUrl": mainImage.asset->url
    }`,
    { slug }
  );

  return post || null;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getProduct(slug);

  if (!post) {
    return <p className="text-center text-xl font-semibold text-red-500">Post not found</p>;
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Custom Navbar */}
      <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Ashna Ghazanfar</span>
        </Link>
        <Link href="/" className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
          Back
        </Link>
      </nav>

      <div className="relative bg-gray-100 min-h-screen py-10 px-4 md:px-0">
        <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Post Header */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={post.mainImageUrl || "/assets/img/default.jpg"}
              layout="fill"
              objectFit="cover"
              alt="Post Image"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Author Section */}
          <div className="flex flex-col md:flex-row items-center py-6 px-6 bg-gray-50 border-b border-gray-200">
            <Image
              src={post.authorImage || "/assets/img/me.jpg"}
              width={80}
              height={80}
              className="rounded-full border-2 border-gray-300 shadow-md"
              alt="Author"
            />
            <div className="mt-4 md:mt-0 md:ml-5 text-center md:text-left">
              <p className="text-xl font-semibold text-gray-700">By {post.authorName || "Ashna Ghazanfar"}</p>
              <p className="text-sm text-gray-500">Published on: {formattedDate}</p>
            </div>
          </div>

          {/* Post Body */}
          <div className="prose prose-lg max-w-none px-6 py-8 text-gray-800 leading-relaxed">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>

      <Comments />

      <footer className="bg-black py-6 text-center">
        <p className="text-white text-sm">© 2024. All rights reserved, Ashna Ghazanfar.</p>
      </footer>
    </>
  );
}
