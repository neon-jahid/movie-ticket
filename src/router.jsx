import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favourite from './pages/Favourite';

export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/movies', element: <Movies /> },
    { path: '/movies/:id', element: <MovieDetails /> },
    { path: '/movies/:id/:date', element: <SeatLayout /> },
    { path: '/my-bookings', element: <MyBookings /> },
    { path: '/favourite', element: <Favourite /> },
]);
