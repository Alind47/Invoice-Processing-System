
import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const Home = () => {

    return(
        <>
            <Header/>
               
            <Box style={{margin: 20}}>
                <Typography variant="h4">Pending Invoices</Typography>
            </Box>
        </>
    )
}

export default Home;