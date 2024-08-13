'use client';
import {Box, Container} from "@mui/material";
import {Header} from "@/app/component/Header";
import {createContext, useCallback, useEffect, useState} from "react";
import {Footer} from "@/app/component/Footer";

export const PositionScrollYContext = createContext(null);

const Template = ({children}) => {
    const [positionScroll, setPositionScroll] = useState(0);

    const trackScroll = useCallback(() => {
        const {scrollY} = window;
        setPositionScroll(scrollY);
    }, []);

    useEffect(() => {

        addEventListener('scroll', trackScroll);

        return () => {
            removeEventListener('scroll', trackScroll);
        }
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Header/>
            <Box
                sx={{
                    marginTop: '50px'
                }}
            >
            <PositionScrollYContext.Provider value={positionScroll}>
                {children}
            </PositionScrollYContext.Provider>
            </Box>
            <Footer/>
        </Box>
    )
}
export default Template;