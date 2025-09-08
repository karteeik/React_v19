import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    // we use error hook
    const error = useRouteError();
    console.log(error);

    // we use Navigate hook (last page we show navigate)
    const navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate(-1);
    // }

    if(error.status == 404){
        return (
            <figure>
                <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                <h1> {error.data}</h1>
                {/* <h1>{error.statusText || error.message}</h1> */}
                <NavLink to="./" ><button>Go Home Page</button></NavLink> <br />
                <button onClick={() => navigate(-1)}>Go Back</button>
            </figure>
        )
    }
    
    return (
        <>
        </>
    )
}