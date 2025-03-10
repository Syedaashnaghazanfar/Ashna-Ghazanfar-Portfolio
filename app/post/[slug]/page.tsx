import Comments from "@/app/components/comments";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

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
      <nav className="bg-black border-b border-yellow-400/30 py-5 px-6 md:px-8 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl font-bold text-yellow-400 transition-all duration-300 hover:text-yellow-300">
            Ashna Ghazanfar
          </span>
        </Link>
        <Link 
          href="/blogs" 
          className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400/90 text-black rounded-full 
                    hover:bg-yellow-300 transition-all duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </nav>

      <main className="min-h-screen bg-gradient-to-b from-black/95 to-black/80 pt-12 pb-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 px-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image
                src={post.authorImage || "/assets/img/me.jpg"}
                width={56}
                height={56}
                className="rounded-full border-2 border-yellow-400"
                alt="Author"
              />
              <div className="text-left">
                <p className="text-lg text-yellow-300 font-medium">By: {post.authorName}</p>
                <p className="text-sm text-yellow-400/80">{formattedDate}</p>
              </div>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-3xl mx-auto mb-24">
            <div className="text-yellow-200/90 leading-relaxed">
              <PortableText value={post.body} />
            </div>
          </article>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-black/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold text-yellow-400">
                  Join the Conversation
                </h2>
                <div className="w-12 h-px bg-yellow-400/40 flex-1" />
              </div>
              <Comments />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-yellow-400/20 py-8">
        <div className="container mx-auto text-center">
          <p className="text-yellow-400/70 text-sm">
            © {new Date().getFullYear()} Ashna Ghazanfar. All thoughts preserved.
          </p>
        </div>
      </footer>
    </>
  );
}
