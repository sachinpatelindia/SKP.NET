import { useParams, useLocation } from "react-router-dom";

const PageDetails = () => {
    const { state } = useLocation();


    const renderPage = (key) => {
        switch (key) {
            case 1:
                return <><h3>Welcome to India</h3><p> We please to welcome in india.</p><br></br>India is good known for its spritual and yoga scienc</>

            case 2:
                return <><h3>Welcome to India</h3><p> We please to welcome in Nepal.</p><br></br>Nepalis good known for its himalayas and Everest</>

            default:
                return <><h3>Details page</h3><p>welcome on Details page.</p><br></br>This is default dynamic page</>
                break;
        }
    }
    const params = useParams();
    //const { name } = params;
    console.log(JSON.stringify(params));
    console.log(JSON.stringify(state));
    return (renderPage(state?.item?.id));
}

export default PageDetails;