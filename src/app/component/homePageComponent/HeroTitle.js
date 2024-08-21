import {Box, Button, Typography} from "@mui/material";
import Image from "next/image";

const statsSale = [
    {
        id: 1,
        nameStats: 'Marcas',
        value: '200+',
    },
    {
        id: 2,
        nameStats: 'Produtos',
        value: '2000+',
    },
    {
        id: 3,
        nameStats: 'Produtos vendidos',
        value: '30 000+',
    }
]

export const HeroTitle = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                paddingTop: {xs: '40px', md: '40px'}

            }}
        >
            <Box
                sx={{
                    flexBasis: 'calc(100% / 2)',
                }}
            >
                <Typography
                    variant={'h1'}
                    sx={{
                        fontSize: {xs: '2.5rem', md: '4rem'},
                        fontWeight: 800,
                        fontFamily: 'poppins, sans-serif',
                        lineHeight: {xs: '2.5rem', md: '4rem'},
                    }}
                >
                    AS MELHORES PEÇAS PARA SEU ESTILO
                </Typography>
                <Typography
                    sx={{
                        mt: '10px',
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'open sans, sans-serif',
                        lineHeight: 1.375,
                        color: '#616060',
                    }}
                >
                    Navegue por nossa diversificada linha de roupas meticulosamente elaboradas, projetadas para realçar
                    sua individualidade e atender ao seu senso de estilo.
                </Typography>
                <Button
                    variant={'contained'}
                    sx={{
                        mt: '20px',
                        backgroundColor: '#000000',
                        borderRadius: '50px',
                        width: {xs: '100%', md: '173px'},
                        height: '50px',
                        '&:hover': {
                            backgroundColor: 'gray',
                        },
                    }}

                >
                    Ver loja
                </Button>
                <Box
                    component={'ul'}
                    sx={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        columnGap: '50px',
                        mt: '20px',
                    }}
                >
                    {statsSale.map(ele => {
                        const {id, nameStats, value} = ele;
                        return (
                            <Box
                                key={id}
                                component={'li'}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {xs: '2rem', md: '2.5rem'},
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontFamily: 'open sans',
                                        lineHeight: 'normal',
                                    }}
                                >
                                    {value}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 400,
                                        fontFamily: 'open sans, sans-serif',
                                        lineHeight: 1.375,
                                        color: '#616060',
                                    }}
                                >
                                    {nameStats}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    flexBasis: 'calc(100% / 2)',
                }}
            >
                <Image
                    src={'/image/heroTitle/heroImage.png'}
                    alt={''}
                    width={692}
                    height={663}
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: "block",
                        marginLeft: 'auto',
                    }}

                />
            </Box>
        </Box>
    );
}