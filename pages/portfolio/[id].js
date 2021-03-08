import { useRouter } from "next/router";
function Portfolio() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query.id);
    return <div>
        <h1>Page Parameter{router.query.id}</h1>
    </div>
}

export default Portfolio;