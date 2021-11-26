
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom";//eslint-disable-line

/*import NotFound from "../pages/not_found.jsx";
import Store from "../pages/store.jsx";
import Building from "../pages/building.jsx";
import Development from "../pages/development.jsx"
import Footer from "../layouts/footer/footer.jsx";
import Header from "../layouts/header/header.jsx";
*/

import OperationalPage from "../top_pages/operational_page.jsx";
import Single from "../top_pages/single.jsx";

export default function TopRouter (param){
    
    return(
        <BrowserRouter>

            <Routes>

                <Route path="/single" element={<Single />} />

                <Route path="/*" element={<OperationalPage />} />
                
                <Route path="*" element={<Navigate to="/notfound" />} />
            </Routes>

        </BrowserRouter>
    );
}