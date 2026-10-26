
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)({
    marginTop: '8px',
    '& .MuiPaper-root': {
        backgroundColor: '#f5f3ff',
        color: '#312e81',
        minWidth: '180px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(49, 46, 129, 0.16)',
        border: '1px solid #ddd6fe',
        overflow: 'hidden',
    },
    '& .MuiList-root': {
        padding: '6px',
    },
});

const ProfileBox = styled(Box)({
    padding: '8px 14px',
    borderRadius: '2px',
    backgroundColor: '#fff',
    color: '#000000',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
        backgroundColor: '#fff',
    },
});

const StyledMenuItem = styled(MenuItem)({
    borderRadius: '8px',
    marginBottom: '4px',
    fontSize: '14px',
    gap: '12px',
    '&:hover': {
        backgroundColor: '#e0e7ff',
    },
});

const Logout = styled(Typography)({
    fontSize: '14px',
    fontWeight: 500,
});

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const logoutUser = () => {
        setAccount('');
        handleClose();
    };

    return (
        <>
            <ProfileBox onClick={handleClick}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {account}
                </Typography>
            </ProfileBox>

            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    Profile
                </StyledMenuItem>

                <StyledMenuItem onClick={logoutUser}>
                    <PowerSettingsNewIcon
                        sx={{ color: '#dc2626' }}
                        fontSize="small"
                    />
                    <Logout>Logout</Logout>
                </StyledMenuItem>
            </Component>
        </>
    );
};

export default Profile;
