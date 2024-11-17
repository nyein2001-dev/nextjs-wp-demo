import { cn } from "@/lib/utils";
import { Post } from "@/lib/wordpress.d";
import Link from "next/link";

export default async function PostCard({ post }: { post: Post }) {
    return (
        <Link
            href={`/posts/${post.slug}`}
            className={cn(
                "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8",
                "hover:bg-accent/75 transition-all"
            )}>
            <div className="flex flex-col gap-4">
                <div
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
                ></div>
            </div>
        </Link>
    )
}