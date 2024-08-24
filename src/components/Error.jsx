import { useRouteError } from "react-router-dom"

const Error = () => {

    const error = useRouteError();
    // console.log(error)
    return (
        <>
            <h2>Page not found</h2>
            <h2>{error.status + " : " + error.not}</h2>
            
        </>
    )
}

export default Error

