import {Box} from "@mui/material";
import {IconRating} from "@/utils/createSvg";
import {yellow} from "@mui/material/colors";

const rating = (grade) => {
    const stars = []
    while (stars.length < 5) {
        if (Math.round(+grade) > stars.length ) {
            stars.push(<IconRating
                sx={{
                    // backgroundColor: 'red',
                    fill: 'red'
                }}
            />)
        } else {
            stars.push(<IconRating/>);
        }
    }
    return stars
}
export const CreateRating = ({grade = 0}) => {
    return (
        <Box
            component={'ul'}
            sx={{
                display: 'flex',
                listStyle: 'none',
                padding: 0,
            }}
        >
            {rating(grade).map((stars, index) => {
                return (
                    <Box
                        key={index}
                        component={'li'}
                    >
                        {stars}
                    </Box>
                )
            })}

        </Box>
    )
}