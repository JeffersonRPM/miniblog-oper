import PostDetails from "@/src/domains/posts/components/post-details";

type Props = {
    params: {
        slug: string;
    };
};

export default function BlogpostDetailsPage({ params }: Props) {
    return <PostDetails post={{
        slug: 'any-slug',
        title: 'Teste',
        created_at: new Date(2023, 8, 1),
    }}
    />
}