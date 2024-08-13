import {Box, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";
import {useLayoutEffect, useRef, useState} from "react";

const calculateDisplay = (widthSizeSection, widthSizeBody) => {
    let finalTickerSize = `${widthSizeSection}px`;
    if (widthSizeBody > widthSizeSection) {
        finalTickerSize = `${widthSizeBody}px`;
    }
    return keyframes`
    0% {
        transform: translateX(${finalTickerSize});
    }
    100% {
        transform: translateX(-${finalTickerSize});
    }
`
}

export const Ticker = () => {
    const [widthTicker, setWidthTicker] = useState(null);
    const [widthWindow, setWidthWindow] = useState(null);
    const brandSection = useRef();

    useLayoutEffect(() => {
        const brandSectionElement = brandSection.current;
        const windowsSize = window.document.body.offsetWidth;
        setWidthTicker(brandSectionElement.offsetWidth);
        setWidthWindow(windowsSize);
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '81px',
                backgroundColor: 'black',
                position: 'relative',
                overflow: 'hidden',
                display: {xs: 'flex', md: 'flex'},
                alignItems: 'center',

            }}
        >
            <Box
                ref={brandSection}
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    width: 'auto',
                    columnGap: '200px',
                    animation: `${calculateDisplay(widthTicker, widthWindow)} 15000ms linear infinite`
                }}
            >
                <Typography

                    variant={'h3'}
                    sx={{
                        color: 'white',
                    }}
                >
                    Versace
                </Typography>
                <Typography

                    variant={'h3'}
                    sx={{
                        color: 'white',
                    }}
                >
                    Dolce
                </Typography>
                <Typography

                    variant={'h3'}
                    sx={{
                        color: 'white',
                    }}
                >
                    PRADA
                </Typography>
                <Typography

                    variant={'h3'}
                    sx={{
                        color: 'white',
                    }}
                >
                    GUCCI
                </Typography>
            </Box>
        </Box>
    )
}
