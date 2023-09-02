import { Text } from "thon-ui";
import PostsListItems from "@/src/domains/posts/components/post-list-items";
import { Post } from "@/src/domains/posts/models/post";

async function fetchPosts() {
    const postResponse = await fetch(`${process.env.BLOG_PROVIDER_BASE_API}/contents/guscsales`);
    let posts = (await postResponse.json()) as Post[];

    posts = posts.filter(post => !post['parent_id']).map(post => ({ ...post, created_at: new Date(post.created_at) }));

    posts.sort((a, b) =>
        (b.created_at as unknown as number) - (a.created_at as unknown as number)
    );

    return posts ? posts : [];
}


export default async function BlogPage() {
    const posts = await fetchPosts();

    return (
        <article className="h-[calc(100%-3.563rem)] overflow-y-auto mb-4">
            <header>
                <Text as="h1" variant="3xl lg:4xl" className="pb-6 lg:pb-6">Miniblog - Oper - Posts</Text>
            </header>
            <div className="lg:max-h-0">
                {posts.length > 0 && (
                    <ul aria-label="Posts" className="grid gap-6 w-full lg:w-[41.375rem]">
                        {posts.map((post, index) => (
                            <li key={post.slug}>
                                <PostsListItems post={post}
                                    isLarge={index === 0}
                                    headerComplement={index === 0 ? " - Última postagem..." : undefined}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {posts.length === 0 && (
                <Text variant="xl">Nenhum post encontrado!</Text>
            )}
        </article>
    );
}