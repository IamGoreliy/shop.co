'use client';
import {Box, Button, Container} from "@mui/material";
import Link from "next/link";
import {IconBack} from "@/utils/createSvg";

const Page = () => {
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
                <Button>
                    <Link href={'/#onSale'}>
                        <IconBack/>
                    </Link>
                </Button>
                <h1>страница товара</h1>
            </Container>
        </Box>
    )
}

export default Page;