import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";

export default async function PostCard({ post }: { post: Post }) {
  //  const media = await getFeatu
    return (<p>Hello</p>
        // <Link
        //     href={`/posts/${post.slug}`}
        //     className={cn(
        //         "border p-4 bg-accent/30 rounded-lg group flex justify-between flex-col not-prose gap-8",
        //         "hover:bg-accent/75 transition-all"
        //     )}>
        //     <div className="flex flex-col gap-4">
        //         <div>
        //             <Image
        //                 className="h-full w-full object-cover"
        //                 src={media.source_url}
        //                 alt={post.title.rendered}
        //                 width={400}
        //                 height={200}
        //             />
        //         </div>
        //     </div>
        //     <div className="flex flex-col gap-4">
        //         <div
        //             dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        //             className="text-xl text-primary font-medium group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        //         ></div>
        //     </div>
        // </Link>
    )
}
