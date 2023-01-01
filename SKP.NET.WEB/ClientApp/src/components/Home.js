import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const arr = [{ id: 1, category: 'article', description: 'description of item', link: 'i-am-indian' }, { id: 2, category: 'article', description: 'description of item', link: 'i-am-nepali' }];
    let navigate = useNavigate(); 
    const handleLinkClick = (item) => {
        navigate(item?.link, { data: { item } });
    }
    return (<>This is Home page
        <br></br>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">
                Cras justo odio
            </a>
          
            {arr.map((item, index) => {

                return <a style={{ cursor: 'pointer' }} onClick={() => { handleLinkClick(item) }} key={index} class="list-group-item list-group-item-action">{item.link}</a>
            })
            }
           
        </div>
    </>);
}

export default Home;