
import {useState, useEffect, useMemo} from "react";//eslint-disable-line
import {Helmet} from "react-helmet-async";

import LoadingScreen from "../layouts/loading_screen/loading_screen.jsx";

export default function Store (param){
    

    return( 
        <>
            <Helmet>
                <title>Poxi store</title>
            </Helmet>
            <div style={{background: "grey", height: "100%", width: "100%"}}>
                <LoadingScreen />
            </div>    
        </>
    );
}