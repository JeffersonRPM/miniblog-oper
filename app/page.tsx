import { Post } from "@/src/domains/posts/models/post";
import Markdown from "@/src/shared/components/markdown";
import { format } from 'date-fns';
import Link from "next/link";
import { Text } from "thon-ui";

const baseURL = 'https://www.tabnews.com.br/api/v1';
const postsEndpoint = '/contents/guscsales';

async function getLastPost() {
  const postResponse = await fetch(`${baseURL}${postsEndpoint}`);
  let posts = (await postResponse.json()) as Post[];

  posts = posts.filter(post => !post['parent_id']).map(post => ({ ...post, created_at: new Date(post.created_at) }));

  posts.sort((a, b) =>
    (b.created_at as unknown as number) - (a.created_at as unknown as number)
  );

  const [lastPostFromList] = posts;

  const lastPostResponse = await fetch(`${baseURL}${postsEndpoint}/${lastPostFromList.slug}`);
  const lastPost = (await lastPostResponse.json()) as Post;

  if (lastPost) {
    return { ...lastPost, created_at: new Date(lastPost.created_at) };
  }

  return null;
}

export default async function Home() {
  const lastPost = await getLastPost();

  if (!lastPost) {
    return null;
  }

  return (
    <article className="h-[calc(100%-3.563rem)]">
      <Text as="h1" variant="3xl lg:4xl" className="w-full lg:w-[35rem] pb-6 lg:pb-6">Miniblog - Oper</Text>

      <Text variant="sm" className="text-gray-500">
        {format(lastPost?.created_at as Date, 'dd.MM.yyyy')} - Última Postagem...
      </Text>
      <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-9">
        {lastPost.title}
      </Text>

      <div className={`relative before:content-[''] before:w-full before:h-[5.5rem] before:absolute before:bottom-0 before:left-0 before:bg-linear-bottom-white`}>
        <Markdown value={lastPost.body || ''} className="h-[39vh] overflow-hidden mb-2" />
      </div>

      <div className="flex items-center justify-center lg:justify-end mb-4">
        <Link href="/blog" className="py-2 px-3 ">
          <Text variant="xs" className=" text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out">
            Ver Outros Posts
          </Text>
        </Link>
        <Link href={`/blog/${lastPost.slug}`} className="py-2 px-3 rounded bg-gray-100 hover:bg-gray-200">
          <Text variant="xs" className="font-bold text-gray-800 transition-all duration-200 ease-in-out">
            Continuar Lendo
          </Text>
        </Link>

      </div>
    </article>
  );
}