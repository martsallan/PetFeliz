import { useRouter } from "next/dist/client/router"

export default function Produto() {

    const router = useRouter()
    const {id} = router.query
    return (
        <h1> item { id }</h1>
    )
}