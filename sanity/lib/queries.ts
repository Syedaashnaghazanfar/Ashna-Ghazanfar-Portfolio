import { groq } from "next-sanity";
export const query = groq`
  *[_type == "post"] {
    _id,
    title,
    "slugCurrent": slug.current,
    "authorName": author->name, // Assuming the author has a "name" field
    body,
    "mainImageUrl": mainImage.asset->url
  }
`;
