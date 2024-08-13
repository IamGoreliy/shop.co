import {Box, Typography} from "@mui/material";
import {dataSectionCommnetsOurClient} from "@/app/component/homePageComponent/dataSectionCommnetsOurClient";

export const CommentsForOurClients = () => {
    return (
        <Box
            sx={{
                mt: '50px'
            }}
        >
            <Typography
                variant={'h2'}
                sx={{
                    fontSize: {xs: '2.4rem', md: '3rem'},
                    fontWeight: 800,
                }}
            >
                <b>NOSSOS CLIENTES COMENTAM</b>
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    overflow: 'auto',
                }}
            >
            <Box
                component={'ul'}
                sx={{
                    display: 'flex',
                    listStyle: 'none',
                    padding: 0,
                    columnGap: '30px',
                    mt: '30px',
                    width: {xs: '1300px', md: '100%'},
                }}
            >
                {dataSectionCommnetsOurClient.map(ele => {
                    const {id, rating, clientName, comments} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                width: {xs: '100%', md: 'unset'},
                                border: '2px solid #F0F0F0',
                                borderRadius: '20px',
                                flexGrow: 1,
                                padding: '20px'
                            }}
                        >
                            <Typography>
                                {rating}
                            </Typography>
                            <Typography>
                                <b>{clientName}</b>
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#616060',
                                    mt: '10px'
                                }}
                            >
                                {comments}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            </Box>
        </Box>
    );
}