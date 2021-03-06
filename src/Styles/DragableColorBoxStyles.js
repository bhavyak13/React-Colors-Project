import { makeStyles } from '@mui/styles';
import Sizes from './Sizes';

const useStyles = makeStyles({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6.5px",
        backgroundColor: (props) => props.background,
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)',
        },
        [Sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [Sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [Sizes.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: 'flex',
        justifyContent: "space-between",

    },
    deleteIcon: {
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out'
    }
})

export default useStyles;