/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import PostCard from "@/components/posts/post-card";

export default async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    const { author, tag, category, page: pageParam } = searchParams;
    const posts = await getAllPosts({ author, tag, category });

    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const postsPerPage = 9;
    const paginatedPosts = posts.slice(
        (page - 1) * postsPerPage,
        page * postsPerPage
    );

    return (
        <Section>
            <Container>
                <h1>Posts</h1>
                {paginatedPosts.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-4 z-0">
                        {paginatedPosts.map((post: any) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
                        <p>No Results Found</p>
                    </div>
                )}
            </Container>
        </Section>
    );
}
