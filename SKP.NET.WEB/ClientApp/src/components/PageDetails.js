import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageDetails = () => {
    const [pages, setPages] = useState([]);
    const { state } = useLocation({});

    useEffect(() => {
        populatePageData();
    }, []);

    const populatePageData = () => {
        fetch("pages")
            .then((res) => res.json())
            .then((json) => {
                setPages(json);
            })
    };
    const pageData = pages.filter(p => p?.id === state?.item?.id)[0]?.fullDescription;
    return <div dangerouslySetInnerHTML={{ __html: pageData }} />;
   
       
}

export default PageDetails;