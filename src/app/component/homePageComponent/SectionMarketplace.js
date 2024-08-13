import {Box, Typography} from "@mui/material";
import {CustomImage} from "@/utils/CustomComponent";
import Link from "next/link";

export const SectionMarketplace = ({goods = [], title = '', anchor = ''}) => {
    return (
        <Box
            id={anchor}
            sx={{
                mt: '100px',
            }}
        >
            <Box>
                <Typography
                    variant={'h2'}
                    sx={{
                        textAlign: 'center',
                        fontSize: {xs: '2.4rem', md: '3rem'},
                        fontWeight: 800,
                    }}
                >
                    {title}
                </Typography>
            </Box>
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
                    justifyContent: {xs: 'unset', md: 'space-between'},
                    listStyle: 'none',
                    padding: 0,
                    width: {xs: '1300px', md: '100%'},
                    columnGap: {xs: '30px', md: '30px', lg: 'unset'},
                }}
            >
                {goods.map(ele => {
                const {id, image, title, rating, price, urlGood} = ele;
                return (
                    <Box
                        key={id}
                        component={'li'}
                    >
                        <Link href={urlGood}>
                            <CustomImage
                                src={image}
                                alt={''}
                                width={295}
                                height={298}
                            />
                            <Typography>
                                {title}
                            </Typography>
                            <Typography>
                                {rating}
                            </Typography>
                            <Typography>
                                `R${price}`
                            </Typography>
                        </Link>
                    </Box>
                )
                })}
            </Box>
            </Box>
        </Box>
    )
}