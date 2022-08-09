import React, { useEffect } from "react";
import './styles.css';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {

    const [loading, setLoading] = React.useState(true);
    const setteoLoder = () => {
        setLoading(false);
    }

    useEffect(() =>{
        setTimeout(setteoLoder, 3000)
    }, [])


    return(
        <div className="loading">
            {
                loading ? <CircularProgress  color="inherit" /> : "listo"
            }
        </div>
        
    )
}

export default Loading