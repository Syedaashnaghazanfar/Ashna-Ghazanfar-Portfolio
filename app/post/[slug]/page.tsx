import Comments from "@/app/components/comments";
import Navbar from "@/app/components/navbar";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface Post {
  authorName: string;
  authorImage: string;
  publishedAt: string | number | Date;
  slugCurrent: any;
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  body: any;
  mainImageUrl: string;
}
interface PostPageProps {
  params: Promise<{ slug: string }>; // Mark params as a Promise
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
    }`,
    { slug }
  );
  ;

  return post || null;
}
export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params; // Explicitly await params
  const post = await getProduct(slug);
  if (!post) {
    return <p>Post not found</p>;
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <div id="main" className="relative bg-[#928f8f]">
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="mx-auto max-w-4xl bg-white shadow-md rounded-lg p-6 md:p-10">
            {/* Post Header */}
            <div className="text-center">
              <h1 className="font-body text-3xl font-semibold text-primary mt-[50px] sm:text-4xl md:text-5xl xl:text-6xl">
                {post.title}
              </h1>
            </div>

            {/* Author Section */}
            <div className="flex flex-col items-center justify-center pt-8 md:pt-10 md:flex-row">
              <div className="flex-shrink-0">
                <img
                  src={post.authorImage || "/assets/img/me.jpg"}
                  className="h-20 w-20 rounded-full border-2 border-gray-300 shadow-md"
                  alt="Author"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-5 text-center md:text-left">
                <span className="block font-body text-xl font-bold text-gray-700">
                  By {post.authorName || "Ashna Ghazanfar"}
                </span>
                <span className="block pt-1 font-body text-xl text-gray-500">
                  Published on: {formattedDate}
                </span>
              </div>
            </div>

            {/* Post Body */}
            <div className="prose prose-lg max-w-none pt-10 text-justify">
              <PortableText value={post.body} />
            </div>
          </div>
        </div>
      </div>

      <Comments />
      <div className="bg-black">
        <div className="container py-6 flex justify-center">
          <p className="text-center font-body text-white">
            © Copyright 2024. All rights reserved, Ashna Ghazanfar.
          </p>
        </div>
      </div>
    </>
  );
}
