import {Box, Typography} from "@mui/material";
import {CustomLink} from "@/utils/CustomComponent";

export const RenderLinkForFooter = ({title = '', dataLink = []}) => {
    return (
        <Box>
            <Typography
                sx={{
                    fontSize: '1.5em',
                }}
            >
                <b>
                    {title}
                </b>
            </Typography>
            <Box
                component={'ul'}
                sx={{
                    listStyle: 'none',
                    padding: 0,
                }}
            >
                {dataLink.map(ele => {
                    const {id, title, link} = ele;
                    return (
                        <Box
                            key={id}
                            component={'li'}
                            sx={{
                                '& + &': {
                                    marginTop: '20px'
                                },
                            }}
                        >
                            <CustomLink
                                href={link}
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                    fontFamily: 'open sans, sans-serif',
                                    lineHeight: '1.375',
                                    color: '#616060',
                                }}
                            >
                                {title}
                            </CustomLink>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}