import { Routes, Route } from 'react-router-dom';
import {MoviList, MovieDetails, MovieSearch, PageNotFound} from '../pages';

export const AllRoutes=()=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<MoviList />} />
                <Route path="/search" element={<MovieSearch />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/movie/upcoming" element={<MoviList />} />
                <Route path="/movie/top" element={<MoviList />} />
                <Route path="/movie/popular" element={<MoviList />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}