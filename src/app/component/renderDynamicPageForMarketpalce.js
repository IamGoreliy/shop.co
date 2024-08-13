import {Box, Button, Typography} from "@mui/material";
import {CustomLabel, CustomSpan, SelectButtonSize} from "@/utils/CustomComponent";
import Image from "next/image";
import {useEffect, useState} from "react";
import {CreateRating} from "@/utils/createRating";

const calculateDiscount = (price, discount) => {
    if (price === 0) {
        return '0';
    }
    const resultDiscount = price * (discount / 100);
    return (price - resultDiscount).toString();
}

const floatWidth = (totalElement = 0, widthElement = 100) => {
    const total = totalElement * widthElement;
    return `${total}px`;
}

const floatHeight = (totalElement = 0, heightElement = 200) => {
    const total = totalElement * heightElement;
    return `${total}px`;
}

export const RenderDynamicPageForMarketplace = ({dataProduct}) => {
    const [data, setData] = useState({});
    const [titlePhoto, setTitlePhoto] = useState('/image/placeholder.jpg');

    useEffect(() => {
        setData(dataProduct);
    }, [dataProduct]);

    useEffect(() => {
        if (data?.imageList?.length) {
                setTitlePhoto(data?.imageList[0]);
        }
    }, [data]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column-reverse', md: 'row'},
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: {xs: '430px',md: 'unset'},
                        height: {xs: 'unset', md: '700px'},
                        overflow: 'auto',
                    }}
                >
                    <Box
                        component={'ul'}
                        sx={{
                            width: {xs: floatWidth(data?.imageList?.length, 120), md: '110px'},
                            // minWidth: {xs: '700px', md: 'unset'},
                            height: {xs: 'auto', md: floatWidth(data?.imageList?.length, 200)},
                            display: 'flex',
                            flexDirection: {xs: 'row', md: 'column'},
                            listStyle: 'none',
                            padding: '0px',
                            columnGap: {xs: '20px', md: 'unset'},
                            rowGap: {xs: 'unset', md: '20px'},


                        }}
                    >
                        {data?.imageList?.length && data.imageList.map((ele, index) => {
                           return (
                               <Box
                                    key={index}
                                    component={'li'}
                                    onClick={() => setTitlePhoto(ele)}
                                    sx={{
                                        width: '100px',
                                        height: '200px',
                                    }}
                                 >
                                    <Image
                                        src={ele}
                                        alt=''
                                        width={1125}
                                        height={1688}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'block',
                                            borderRadius: '20px',
                                        }}
                                    />
                                 </Box>
                           )
                        })}
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: {xs: '100%', md: '500px'},
                        height: {xs: '600px', md: '700px'},
                    }}
                >
                    <Image
                        src={titlePhoto}
                        alt=''
                        width={1125}
                        height={1688}
                        style={{
                            display: 'block',
                            borderRadius: '20px',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Box>
                    <Typography
                        variant={'h3'}
                        sx={{
                            fontSize: '2.3rem',
                            fontWeight: 800,
                        }}
                    >
                        {data.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '20px',
                        }}
                    >
                        <CreateRating grade={data.rating}/>
                        <Typography>
                            {data.rating} / 5
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '20px',
                            borderBottom: '1px solid #F0F0F0',
                            paddingBottom: '20px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                fontStyle: 'normal',
                            }}
                        >
                            ${calculateDiscount(data?.price, data?.discount)}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                color: '#d9d9d9',
                            }}
                        >
                            ${data.price}
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0px 15px',
                                backgroundColor: 'rgba(255, 51, 51, 0.10)',
                                borderRadius: '40px',
                                color: '#ff3333',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                fontStyle: 'normal',
                            }}
                        >
                            {data.discount} %
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant={'subtitle1'}
                    >
                        Selecione a Cor
                    </Typography>
                    <Box
                        component={'ul'}
                        sx={{
                            display: 'flex',
                            listStyle: 'none',
                            padding: 0,
                            columnGap: '10px',
                            borderBottom: '1px solid #F0F0F0',
                            paddingBottom: '20px',
                        }}
                    >
                        {data?.productColors?.map((ele, index) => {
                            return (
                                <Box
                                    key={index}
                                    component={'li'}
                                    sx={{
                                        width: '35px',
                                        height: '35px',
                                        borderRadius: '50%',
                                        backgroundColor: ele
                                    }}
                                >

                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <form>
                    <Box>
                        <Typography
                            variant={'subtitle1'}
                        >
                            Escolha o Tamanho
                        </Typography>
                        <Box
                            component={'ul'}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                padding: 0,
                                columnGap: '20px',
                                borderBottom: '1px solid #F0F0F0',
                                paddingBottom: '20px',
                            }}
                        >
                            {data?.productSize?.map((ele, index) => {
                                return (
                                    <Box
                                        key={index}
                                        component={'li'}
                                    >
                                        <CustomLabel
                                            sx={{
                                                '& input:checked ~ span': {
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                },

                                            }}
                                        >
                                            <SelectButtonSize
                                                type={'radio'}
                                                name={'selectSize'}
                                                sx={{
                                                    display: 'none',
                                                }}
                                            />
                                            <CustomSpan
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '130px',
                                                    height: '40px',
                                                    border: '1px solid #d9d9d9',
                                                    borderRadius: '12px',
                                                    backgroundColor: '#d9d9d9',
                                                    '&:hover': {
                                                        backgroundColor: 'black',
                                                        color: 'white',
                                                    },

                                                }}
                                            >
                                                {ele}
                                            </CustomSpan>
                                        </CustomLabel>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '20px'
                        }}
                    >
                        <Button
                            variant={'contained'}
                            sx={{
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#021526',
                                },
                            }}
                        >
                            Em des.
                        </Button>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            sx={{
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#021526',
                                },
                            }}
                        >
                            Add ao Carrinho
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}