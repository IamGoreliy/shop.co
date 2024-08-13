import {Box, Grid, Typography} from "@mui/material";
import {dataSectionFindStyles} from "@/app/component/homePageComponent/dataSectionFindStyles";

export const FindStyles = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F0F0F0',
                padding: '50px 20px',
                borderRadius: '20px',
                mt: '100px'
            }}
        >
            <Typography
                variant={'h2'}
                sx={{
                    textAlign: 'center',
                    fontSize: {xs: '2.4rem', md: '3rem'},
                    fontWeight: 800,
                }}
            >
                ENCONTRE ESTILOS
            </Typography>
            <Grid
                container
                spacing={0}
                sx={{
                    justifyContent: 'center',
                    gap: '40px',
                    marginTop: '50px'
                }}
            >
                {dataSectionFindStyles.map(ele => {
                    const {id, img, link, title} = ele;
                    return (
                        <Grid
                            key={id}
                            xs={12}
                            md={ id === 2 || id === 3 ? 7 : 4}
                            sx={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: {xs: 'center', md: 'unset'},
                                width: '100%',
                                height: '290px',
                                borderRadius: '20px',



                            }}
                        >
                            <Typography
                                sx={{
                                    padding: '35px',
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}