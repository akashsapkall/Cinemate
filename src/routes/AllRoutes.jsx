import { Routes, Route } from 'react-router-dom';
import {MoviList, MovieDetails, MovieSearch, PageNotFound} from '../pages';

export const AllRoutes=()=>{
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route path="/" element={<MoviList path={"movie/now_playing"}/>} />
                <Route path="/search" element={<MovieSearch path={"search/movie"}/>} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/movie/upcoming" element={<MoviList path={"movie/upcoming"}/>} />
                <Route path="/movie/top" element={<MoviList path={"movie/top_rated"}/>} />
                <Route path="/movie/popular" element={<MoviList path={"movie/popular"}/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}