
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)({
    minHeight: '65vh',
    width: '80%',
    background: '#fff',
    margin: '50px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Container = styled(Box)({
    textAlign: 'center',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
});

const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (
        <Component>
            <Container>
                <img
                    src={imgurl}
                    alt="empty"
                    style={{ width: '120px', maxWidth: '100%' }}
                />
                <Typography>Your cart is empty</Typography>
                <Typography>Add items to it now</Typography>
            </Container>
        </Component>
    );
};

export default EmptyCart;
