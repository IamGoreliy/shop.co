import {Box, Button, Container, Typography, createTheme, ThemeProvider} from "@mui/material";
import {CustomLink, Logo, SubscribeInput} from "@/utils/CustomComponent";
import {linkSocial, aboutCompanyLink, supportLink, faqLink} from "@/app/component/linkSocial/linkSocia";
import {RenderLinkForFooter} from "@/app/component/RenderLinkForFooter";
import {IconMail} from "@/utils/createSvg";

const theme = createTheme()

export const Footer = () => {
    return (
        <Box
            sx={{

                mt: {xs: '50px', md: '150px'},
                backgroundColor: '#F0F0F0',

            }}
        >
            <Container
                maxWidth={'1300px'}
                sx={{
                    maxWidth: '1300px',
                    position: 'relative',
                }}
            >
                <ThemeProvider theme={theme}>
                    <Box
                        sx={{
                            backgroundColor: 'black',
                            position: {xs: 'static', md: 'absolute'},
                            top: '-100px',
                            left: 0,
                            display: 'flex',
                            justifyContent: {xs: 'unset', md: 'space-between'},
                            flexDirection: {xs: 'column', md: 'row'},
                            width: {xs: 'calc(100% - 80px)', md: 'calc(100% - 80px)'},
                            borderRadius: '20px',
                            padding: '40px',


                        }}
                    >
                        <Typography
                            variant={'h2'}
                            sx={{
                                color: 'white',
                                fontSize: {xs: '2rem', md: '2,5rem'},
                                flexBasis: 'calc((100% / 2) - 60px)',
                            }}
                        >
                            FIQUE POR DENTRO SOBRE NOSSOS LANÇAMENTOS
                        </Typography>
                        <Box
                            component={'form'}
                            sx={{
                                flexBasis: 'calc((100% / 2) - 60px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: {xs: '30px', md: 'unset'},
                            }}
                        >
                            <label
                                style={{
                                    position: "relative",
                                    display: "block",
                                    width: {xs: '100%', md:'205px'},
                                }}
                            >
                                <SubscribeInput
                                    type={'email'}
                                    name={'email'}
                                    placeholder={'Please Add You E-mail'}
                                    sx={{
                                        display: 'block',
                                        height: '50px',
                                        borderRadius: '50px',
                                        paddingLeft: '40px'
                                    }}
                                />
                                <IconMail
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%)',
                                    }}
                                />
                            </label>
                            <Button
                                variant={'contained'}
                                sx={{
                                    width: {xs: '212px', md: '250px'},
                                    height: '50px',
                                    borderRadius: '50px',
                                    mt: '20px',

                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            columnGap: '50px',
                            paddingTop: {xs: '50px', md: '150px'},
                            paddingBottom: '75px',
                        }}
                    >
                        <Box
                            sx={{
                                flexBasis: 'calc(100% / 0.65)',
                            }}
                        >
                            <Logo
                                href={''}
                            />
                            <Typography
                                sx={{
                                    color: '#616060',
                                }}
                            >
                                We have clothes that suits your style and which you re proud to wear. From women to men.
                            </Typography>
                            <Box
                                component={'ul'}
                                sx={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                }}
                            >
                                {linkSocial.map(ele => {
                                    const {id, iconSocial, link} = ele;
                                    return (
                                        <Box
                                            key={id}
                                            component={'li'}
                                            sx={{
                                                '& + &': {
                                                    marginLeft: '20px',
                                                },
                                            }}
                                        >
                                            <CustomLink
                                                href={link}
                                            >
                                                {iconSocial}
                                            </CustomLink>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flexBasis: 'calc(100% / 0.35)',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                            }}
                        >
                            <RenderLinkForFooter title={'EMPRESA'} dataLink={aboutCompanyLink}/>
                            <RenderLinkForFooter title={'AJUDA'} dataLink={supportLink}/>
                            <RenderLinkForFooter title={'FAQ'} dataLink={faqLink}/>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Container>
        </Box>
    )
}