import { useState, useContext } from "react";
import { Dialog, Box, TextField, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { view } from "framer-motion/client";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
    height: 70vh;
    width: 80vh;
    box-sizing: border-box;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height: 100%;
    width: 28%;
    padding: 45px 35px;
    box-sizing: border-box;

    & > p, & > h5 {
        color: #fff;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    box-sizing: border-box;

    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const accountIntitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    }

    const loginInitialValues = {
        username: '',
        password: ''
    }

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountIntitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const { setAccount } = useContext(DataContext);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialValues.login);
        setError(false);
    };

    const toggleSignup = () => {
        toggleAccount(accountIntitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signUpUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        authenticateLogin(login);
        console.log(response);
        if(response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else{
            setError(true);
        }
    }

    

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    maxWidth: 'unset'
                }
            }}
        >
            <Component>
                <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>

                    <Image>
                        <Typography variant="h5">{account.heading}
                        </Typography>

                        <Typography style={{ marginTop: 20 }}>
                            {account.subHeading}
                        </Typography>
                    </Image>

                    { account.view === 'login' ?
                    <Wrapper>
                        <TextField
                            variant="standard"
                            onChange={(e) => onValueChange(e)}
                            name='username'
                            placeholder="Enter username"
                            label="Enter Email/Mobile Number"
                        />

                        {error && <Error>
                            Please enter Valid username or password
                        </Error>}

                        <TextField
                            variant="standard"
                            onChange={(e) => onValueChange(e)}
                            name='password'
                            placeholder="Enter Password"
                            type="password"
                        />

                        <Text>
                            By continuing, you agree to our Terms of Service and Privacy Policy.
                        </Text>

                        <LoginButton onClick={() => loginUser()}>
                            Login
                        </LoginButton>

                        <Typography style={{ textAlign: 'center' }}>
                            OR
                        </Typography>

                        <RequestOTP>
                            Request OTP
                        </RequestOTP>

                        <CreateAccount onClick={() => toggleSignup()}>
                            New to Flipkart? Create an account
                        </CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField
                            variant="standard"
                            placeholder="Enter Firstname"
                            onChange={(e) => onInputChange(e)}
                            name='firstname'
                            label="Enter Firstname"
                        />
                        <TextField
                            variant="standard"
                            placeholder="Enter Lastname"
                            onChange={(e) => onInputChange(e)}
                            name='lastname'
                            label="Enter Lastname"
                        />
                        <TextField
                            variant="standard"
                            placeholder="Enter Username"
                            onChange={(e) => onInputChange(e)}
                            name='username'
                            label="Enter Username"
                        />
                        <TextField
                            variant="standard"
                            placeholder="Enter Email"
                            onChange={(e) => onInputChange(e)}
                            name='email'
                            label="Enter your Email"
                        />
                        <TextField
                            variant="standard"
                            placeholder="Enter Password"
                            onChange={(e) => onInputChange(e)}
                            name='password'
                            label="Enter Password"
                        />
                        <TextField
                            variant="standard"
                            placeholder="Enter Phone Number"
                            onChange={(e) => onInputChange(e)}
                            name='phone'
                            label="Enter Mobile Number"
                        />
                        
                        <LoginButton
                        onClick={() => signUpUser()}>
                            Continue
                        </LoginButton>
                    </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
