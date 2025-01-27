import { createClient } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-26",
})

export async function SanityFetch({query, params = {}}: {query: string, params?: any}) {
    return await client.fetch(query, params)
}