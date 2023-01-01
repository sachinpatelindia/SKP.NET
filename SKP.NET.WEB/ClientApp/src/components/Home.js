import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const [ navigation, setNavigation ] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        populateWeatherData();
    },[]);

    const populateWeatherData = () => {
        fetch("navigations")
            .then((res) => res.json())
            .then((json) => {
                setNavigation(json);
            })
    };

    const handleLinkClick = (item) => {
        navigate(item?.name, { data: { item } });
    }

    return (<>This is Home page
        <br></br>
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active">
                Cras justo odio
            </a>

            {navigation.map((item, index) => {

                return <a style={{ cursor: 'pointer' }} onClick={() => { handleLinkClick(item) }} key={index} className="list-group-item list-group-item-action">{item.name}</a>
            })
            }

        </div>
    </>);
}

export default Home;