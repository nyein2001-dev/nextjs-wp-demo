// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`
/* eslint-disable @typescript-eslint/no-explicit-any */

import querystring from 'query-string'

import {
    Post,
} from "./wordpress.d";

const baseUrl = process.env.WORDPRESS_URL;

function getUrl(path: string, query?: Record<string, any>) {
    const params = query ? querystring.stringify(query) : null
  
    return `${baseUrl}${path}${params ? `?${params}` : ""}`
}

// WordPress Functions

export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
}): Promise<Post[]> {  
  const url = getUrl("/wp-json/wp/v2/posts", { author: filterParams?.author, tags: filterParams?.tag, categories: filterParams?.category });
  const response = await fetch(url);
  const posts: Post[] = await response.json();
  return posts;
}

export async function getFeaturedMediaById(id:number): Promise<Feature> {
  
}
