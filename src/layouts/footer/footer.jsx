import { useState, useEffect, useMemo, useCallback} from "react";//eslint-disable-line
import {Link} from "react-router-dom";
import styles from "./footer.module.css";

const item1 = [
        {link: "/store", content: "store"},
        {link: "/building", content: "building"},
        {link: "/development", content: "developement"},
        {link: "/notfound", content: "notFound"},
        {link: "/store", content: "list1"},
        {link: "/store", content: "list1"},
        {link: "/store", content: "list1"},
    ]
.map((elm, index)=>{ return (<li key={index}><Link key={index} to={elm.link}> {elm.content}</Link></li>)});

const item2 = [
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
]
.map((elm, index)=>{ return (<li key={index}><Link key={index} to={elm.link}> {elm.content}</Link></li>)});

const item3 = [
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
    {link: "/store", content: "list1"},
]
.map((elm, index)=>{ return (<li key={index}><Link key={index} to={elm.link}> {elm.content}</Link></li>)});


export default function Footer (param){
    
    return(
        <div id={styles.body}>
            <div id={styles.container}>
                <div className={styles.sections}>
                    <h5>First Links</h5>
                    <ul >
                        {item1}
                    </ul>
                </div>
                <div className={styles.sections}>
                    <h5>title 2</h5>
                    <ul >
                        {item2}
                    </ul>
                </div>
                <div className={styles.sections}>
                    <h5>title 3</h5>
                    <ul >
                        {item3}
                    </ul>
                </div>
            </div>
        </div>    
    );
}