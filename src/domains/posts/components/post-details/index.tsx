import Markdown from "@/src/shared/components/markdown";
import { Text } from "thon-ui";
import { format } from "date-fns";
import { PostDetail } from "../../models/post-detail";

type Props = {
    post: PostDetail;
}

export default function PostDetails({ post }: Props) {
    return <>
        <Text variant="sm" className="text-gray-500">
            {format(post?.created_at as Date, 'dd.MM.yyyy')}
        </Text>
        <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-9">
            {post.title}
        </Text>
        
        <section className="w-full lg:w-[40rem] mt-2 mb-9">
            <Markdown value={post.body}/>
        </section>

    </>

}