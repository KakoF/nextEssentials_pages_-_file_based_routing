import { useRouter } from "next/router";
function Client() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    console.log(router.query.id);
    console.log(router.query.clienttype);
    return <div>
        <h1>Client Parameter {router.query.id}/{router.query.clienttype}</h1>
    </div>
}

export default Client;