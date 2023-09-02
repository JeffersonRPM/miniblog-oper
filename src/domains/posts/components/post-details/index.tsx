import Markdown from "@/src/shared/components/markdown";
import { Post } from "../../models/post";
import { Text } from "thon-ui";
import { format } from "date-fns";

type Props = {
    post: Post;
}

export default function PostDetails({ post }: Props) {
    return <>
        <Text variant="sm" className="text-gray-500">
            {format(post?.created_at as Date, 'dd.MM.yyyy')}
        </Text>
        <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-9">
            {post.title}
        </Text>
        
        <section>
            <Markdown value={post.body || ''} />
        </section>

    </>

}