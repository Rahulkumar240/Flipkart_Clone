import { Box, Typography, Menu, MenuItem } from "@mui/material"
import {styled} from '@mui/material/styles';
import { useState } from "react";
import PowersettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account }) => {

    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2, cursor: 'pointer'}}>{account}</Typography></Box>
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); logoutUser(); }}>Profile</MenuItem>
                <PowersettingsNewIcon color="primary" fontSize="small"/>
                <Logout>Logout</Logout>
            </Component>
        </>
    )
}
export default Profile;