import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const Logo = styled(props => {
    const {href, sx, ...other} = props;
    return <Link href={href} {...other}>SHOP.CO</Link>
})(({sx}) => {
    return {
        fontSize: '2rem',
        fontWeight: 800,
        fontFamily: 'Poppins, sans-serif',
        color: 'black',
        textDecoration: 'none',
        ...sx,
    }
});

export const HeaderNavBtn = styled(props => {
    const {sx, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        position: 'relative',
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'open sans, sans-serif',
        lineHeight: 1.375,
        color: 'black',
        textDecoration: 'none',
        '&:hover::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: 'black',
        },
        ...sx,
    }
});

export const HeaderSerchInput = styled(props => {
    const {sx, type, name, ...other} = props;
    return <input
                type={type}
                name={name}
                placeholder={'Search...'}
                {...other}
           />
})(({theme, sx}) => {
    return {
        display: 'block',
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '100px',
        },
        [theme.breakpoints.up('md')]: {
            width: '300px',
        },
        height: '40px',
        borderRadius: '32px',
        backgroundColor: '#F0F0F0',
        border: 'unset',
        placeholder: 'search',
        paddingLeft: '50px',
        ...sx,
    }
});

export const CustomImage = styled(props => {
    const {sx, src, alt, width, height, ...other} = props;
    return <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                {...other}
           />
})(({sx}) => {
    return {
        borderRadius: '20px',
        ...sx,
    }
});

export const CustomLink = styled(props => {
    const {sx, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        textDecoration: 'none',
        ...sx,
    }
})

export const SubscribeInput = styled(props => {
    const {sx, type, name, placeholder, ...other} = props;
    return <input
                type={type}
                name={name}
                placeholder={placeholder}
                {...other}
           />
})(({theme, sx}) => {
    return {
        [theme.breakpoints.up('xs')]: {
            width: 'calc(100% - 40px)',
        },
        [theme.breakpoints.up('md')]: {
            width: '205px',
        },
        ...sx,
    }
});

export const CustomInput = styled(props => {
    const {sx, type, name, placeholder, ...other} = props;
    return <input type={type} name={name} placeholder={placeholder} {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const SelectButtonSize = styled(props => {
    const {sx, type, name, ...other} = props;
    return <input type={type} name={name} {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const CustomLabel = styled(props => {
    const {sx, ...other} = props;
    return <label {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});

export const CustomSpan = styled(props => {
    const {sx, ...other} = props;
    return <span {...other}/>
})(({sx}) => {
    return {
        ...sx,
    }
});