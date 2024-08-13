'use client';
import {Box, ThemeProvider, createTheme, Container, Button} from "@mui/material";
import {CustomInput, CustomLink, HeaderNavBtn, HeaderSerchInput, Logo} from "@/utils/CustomComponent";
import {headerNavBtn, subHeaderBtn} from "@/app/component/homePageComponent/headerData";
import {IconMenu, SearchIcon} from "@/utils/createSvg";
import {useState} from "react";

const theme = createTheme();

function handlerOpenCloseSearchMenu (searchMenu, navMenu, setSearchMenu, setNavMenu) {
    if (navMenu) {
        setNavMenu(false);
    }
    setSearchMenu(!searchMenu);
}
function handlerOpenCloseNavMenu (searchMenu, navMenu, setSearchMenu, setNavMenu) {
    if (searchMenu) {
        setSearchMenu(false);
    }
    setNavMenu(!navMenu);
}

export const Header = () => {
    const [isOpenSearchMenu, setIsOpenSearchMenu] = useState(false);
    const [isOpenMenuNav, setIsOpenMenuNav] = useState(false);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'white',
                zIndex: 5,
            }}
        >
            <Container
                maxWidth={'1300px'}
                sx={{
                    maxWidth: '1300px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}
            >
                <ThemeProvider theme={theme}>
                    <Box>
                        <Logo
                            href={''}
                        />
                    </Box>
                    <Box>
                        <Box
                            component={'ul'}
                            sx={{
                                listStyle: 'none',
                                padding: 0,
                                display: {xs: 'none', md: 'flex'},
                                columnGap: '40px',
                            }}
                        >
                            {headerNavBtn.map(ele => {
                                const {id, name, urlBtn} = ele;
                                return (
                                    <Box
                                        key={id}
                                        component={'li'}
                                    >
                                        <HeaderNavBtn href={urlBtn}>
                                            {name}
                                        </HeaderNavBtn>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'block'},
                            }}
                        >
                            <Box
                                component={'label'}
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    <SearchIcon/>
                                </Box>
                                <HeaderSerchInput
                                    type={'text'}
                                    name={'searchInput'}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <Button
                                onClick={() => handlerOpenCloseSearchMenu(isOpenSearchMenu, isOpenMenuNav, setIsOpenSearchMenu, setIsOpenMenuNav)}
                                variant={'contained'}
                                sx={{
                                    backgroundColor: 'black',
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        fill: 'white',
                                    }}
                                />
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        <Button
                            onClick={() => handlerOpenCloseNavMenu(isOpenSearchMenu, isOpenMenuNav, setIsOpenSearchMenu, setIsOpenMenuNav)}
                            variant={'contained'}
                            sx={{
                                backgroundColor: 'black',
                            }}
                        >
                            <IconMenu
                                sx={{
                                    fill: 'white',
                                }}
                            />
                        </Button>
                    </Box>
                    <Box>
                        <Box
                            component={'ul'}
                            sx={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                columnGap: '10px',
                            }}
                        >
                            {subHeaderBtn.map(ele => {
                                const {id, icon, urlBtn} = ele;
                                return (
                                    <Box
                                        key={id}
                                        component={'li'}
                                    >
                                        <HeaderNavBtn
                                            href={urlBtn}
                                        >
                                            {icon}
                                        </HeaderNavBtn>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </ThemeProvider>
            </Container>
            <Box
                sx={{
                    display: {xs: isOpenSearchMenu ? 'block' : 'block', md: 'none'},
                    width: '100%',
                    height: {xs: isOpenSearchMenu ? '100px' : '0px', md: 'none'},
                    backgroundColor: 'white',
                    // padding: '20px 20px 40px 20px',
                    transition: 'height 500ms linear',
                    overflow: 'hidden',
                    boxShadow: '6px 7px 5px 0px rgba(0,0,0,0.75)',
                }}
            >
                <Container
                    maxWidth={'xs'}
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CustomInput
                        type={'text'}
                        name={'search'}
                        placeholder={'Search...'}
                        sx={{
                            width: '76%',
                            height: '50px',
                            borderRadius: '50px',
                            paddingLeft: '50px',
                            marginTop: '20px',
                        }}
                    />
                    <SearchIcon
                        sx={{
                            position: 'absolute',
                            top: '35px',
                            left: '50px',

                        }}
                    />
                </Container>
            </Box>
            <Box
                sx={{
                    display: {xs: isOpenMenuNav ? 'block' : 'block', md: 'none'},
                    width: '100%',
                    height: {xs: isOpenMenuNav ? '300px' : '0px', md: '0px'},
                    backgroundColor: 'white',
                    transition: 'height 500ms linear',
                    overflow: 'hidden',
                    boxShadow: '6px 7px 5px 0px rgba(0,0,0,0.75)',

                }}
            >
                <Container
                    maxWidth={'xs'}
                >
                    <Box
                        component={'ul'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 0,
                            listStyle: 'none',
                        }}
                    >
                        {headerNavBtn.map(ele => {
                            const {id, name, urlBtn} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    sx={{
                                        borderBottom: '1px solid #F0F0F0',
                                        padding: '1rem 0px',
                                        margin: '0 1.5rem',
                                    }}
                                >
                                    <CustomLink
                                        href={urlBtn}
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                            lineHeight: 1.375,
                                            color: '#000000',
                                        }}
                                    >
                                        {name}
                                    </CustomLink>
                                </Box>
                            )
                        })}
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}