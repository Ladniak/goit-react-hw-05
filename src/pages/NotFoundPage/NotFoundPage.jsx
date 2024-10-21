import { Link } from "react-router-dom"
import module from "./NotFroundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={module.notFoundDiv}>
            <h1>This page does not exist!</h1>
            <Link className={module.link} to="/">Return to the main page</Link>
        </div>
    )
}

export default NotFoundPage