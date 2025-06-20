import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favourite from './pages/Favourite';
import Navbar from './components/Navbar';

// const isAdminRoute = useLocation().pathname.startsWith('/admin');

function NavLayout() {
    return (
        <>
            {/* {!isAdminRoute && <Navbar />} */}

            <Navbar />
            <Outlet />
        </>
    );
}

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/movies', element: <Movies /> },
            { path: '/movies/:id', element: <MovieDetails /> },
            { path: '/movies/:id/:date', element: <SeatLayout /> },
            { path: '/my-bookings', element: <MyBookings /> },
            { path: '/favourite', element: <Favourite /> },
        ],
    },
]);
