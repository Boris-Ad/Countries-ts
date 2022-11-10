import { useRouteError } from "react-router-dom"

const ErrorPage : React.FC = () => {
    const error = useRouteError() as Error
    return (
        <div>Error Page {error.message}</div>
        
    )
}

export default ErrorPage