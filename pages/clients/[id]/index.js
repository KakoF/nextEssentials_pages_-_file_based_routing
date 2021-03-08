import { useRouter } from "next/router";
function ClientsType() {
    const router = useRouter();
    return <div>
        <h1>Clients Types{router.query.id}</h1>
    </div>
}

export default ClientsType;