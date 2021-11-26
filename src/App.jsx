import TopRouter from "./top_router/top_router.jsx";
import styles from "./app.module.css";
import {HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <div className={ styles.total_view} >
        <HelmetProvider>
            <TopRouter />
        </HelmetProvider>
    </div>
  );
}

