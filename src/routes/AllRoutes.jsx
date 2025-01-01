import { Routes, Route } from 'react-router-dom'
import {MoviList, MovieDetails, MovieSearch, PageNotFound} from '../pages/index'

function AllRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={<MoviList />} />
                <Route path="MovieSearch/" element={<MovieSearch />} />
                <Route path="Movie/id" element={<MovieDetails />} />
                <Route path="Movie/upcoming" element={<MoviList />} />
                <Route path="Movie/top" element={<MoviList />} />
                <Route path="Movie/popular" element={<MoviList />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}
export default AllRoutes