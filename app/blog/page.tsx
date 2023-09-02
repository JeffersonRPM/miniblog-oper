import { Text } from "thon-ui";
import PostsListItems from "@/src/domains/posts/components/post-list-items";

export default function BlogPage() {
    return (
        <article className="h-[calc(100%-3.563rem)]">
            <header>
                <Text as="h1" variant="3xl lg:4xl" className="w-full lg:w-[35rem] pb-6 lg:pb-6">Miniblog - Oper - Posts</Text>
            </header>

            <ul aria-label="Posts" className="grid gap-6 w-full lg:w-[41.375rem]">
                <li>
                    <PostsListItems post={{
                        slug: 'any-slug',
                        title: 'Teste',
                        created_at: new Date(2023, 8, 1),
                    }}
                        isLarge
                        headerComplement=" - Última postagem..."
                    />
                </li>
                <li>
                    <PostsListItems post={{
                        slug: 'any-slug-2',
                        title: 'Teste2',
                        created_at: new Date(2023, 8, 1),
                    }}
                    />
                </li>
                <li>
                    <PostsListItems post={{
                        slug: 'any-slug-3',
                        title: 'Teste3',
                        created_at: new Date(2023, 8, 1),
                    }}
                    />
                </li>
            </ul>

        </article>
    );
}