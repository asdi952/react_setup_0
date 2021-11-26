
import { useState, useEffect, useMemo, useCallback} from "react";//eslint-disable-line
import {Routes, Route, Navigate } from "react-router-dom";

import Footer from "../layouts/footer/footer.jsx";
import Header from "../layouts/header/header.jsx";

import Development from "../pages/development.jsx"
import Building from "../pages/building.jsx";
import Store from "../pages/store.jsx";
import NotFound from "../pages/not_found.jsx";

export default function OperationalPage (param){
    
    return(
        <>  
            <Header />
            <Routes>
                <Route path="" element={<Navigate to="store" />} />
                <Route path="store" element={<Store />} />
                <Route path="building" element={<Building />} />
                <Route path="development" element={<Development />} />

                <Route path="notfound" element={<NotFound />} />

            </Routes>
            <Footer />
        </>
    );
}