import { useRouter } from "next/router";
function Blog() {
    const router = useRouter();
    console.log(router.query);
    return <div>
        <h1>Page Blog</h1>
    </div>
}

export default Blog;