import {useState, useEffect, useMemo} from "react";//eslint-disable-line
import {Helmet} from "react-helmet-async";

export default function NotFound (param){
    


    return(
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
        {/*------------------------------------*/}
            <div className="coco">
                
                pages not Fount
            </div>    
        </>
    );
}