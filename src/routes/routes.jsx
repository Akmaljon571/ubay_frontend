import { Route, Routes } from 'react-router-dom'
import NotFound from '../error/404'
import ErrorPage from '../error/error'

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<ErrorPage />} />
            <Route path='/*' element={<NotFound />} />
            {/* <Route path='/' element={} /> */}
            {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
    )
}

export default Routers