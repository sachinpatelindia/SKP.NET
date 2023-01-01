import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import Login from "./components/Login";
import PageDetails from "./components/PageDetails";
const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/:name',
        element: <PageDetails />
    }
];

export default AppRoutes;
