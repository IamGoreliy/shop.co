'use client';
import {Box, Button, Container} from "@mui/material";
import {IconBack} from "@/utils/createSvg";
import Link from "next/link";
import {useEffect, useState} from "react";
import {RenderDynamicPageForMarketplace} from "@/app/component/renderDynamicPageForMarketpalce";
import {dataOnSale} from "@/app/productMarketplaceOnSale/[id]/utils/dataOnSale";
import {CustomLink} from "@/utils/CustomComponent";


const initialState = {
    title: '',
    rating: '',
    price: 0,
    discount: 0,
    productColors: [],
    productSize: [],
    imageList: [],
}

const Page = ({params}) => {
    const [dataForRender, setDataForRender] = useState(initialState);
    const {id} = params;

    useEffect(() => {
        const data = dataOnSale.find(ele => ele.id === +id);
        setDataForRender(data);
    }, [id]);

    return(
        <Box
            sx={{
                mt: '70px',
            }}
        >
            <Container
                maxWidth={'1300px'}
                sx={{
                    maxWidth: '1300px',
                }}
            >
                <Button
                    sx={{

                    }}
                >
                    <CustomLink
                        href={'/#onSale'}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <IconBack/>
                    </CustomLink>
                </Button>
                <RenderDynamicPageForMarketplace dataProduct={dataForRender}/>
            </Container>
        </Box>
    )
}

export default Page;