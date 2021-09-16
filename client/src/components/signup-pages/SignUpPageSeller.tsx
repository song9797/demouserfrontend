import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles/style';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { SellerInfoProps } from './interfaces/signupInterface';
import axios from 'axios';





export default function SignUpPageSeller(){
  const server = `http://localhost:3001/seller/Create`;
    const classes = useStyles();
    const history = useHistory();
    const [confirmPassword, setconfirmPassword]= useState("");
    const [User, setUserInfo] = useState<SellerInfoProps>({
      userid: "",
      name: "",
      phonenumber: "",
      business_number: "",
      account_number: "",
      password: "",
    });
    
    
    function ClickBack(){
      return(
        history.push('/')
      )
    }
    function onChangehandler(event:any){
        event?.preventDefault()
        setUserInfo({
          ...User,
          [event.target.name]: event.target.value
        });
    }
    function changeConfirmPassWord(event:any){
        event?.preventDefault()
        setconfirmPassword(event.target.value)
      }
    
    function submitHandler(event:any){
      event?.preventDefault()
      if(User.password !== confirmPassword){
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

      axios({
        method: 'post',
        url: server,
        data:{
          userid: User.userid,
          name: User.name,
          phonenumber: User.phonenumber,
          business_number: User.business_number,
          account_number: User.account_number,
          password: User.password
        },
        withCredentials: false,
        
      })
      console.log({    
        userId: User.userid,
        name: User.name,
        phonenumber: User.phonenumber,
        business_number: User.business_number,
        account_number: User.account_number,
        password: User.password
      })
      alert('회원가입이 완료되었습니다.')
      return(
        history.push('/signin')
      )
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"name="Name" variant="outlined" required 
                fullWidth id="Name"label="Name"autoFocus
                value={User.name} onChange={onChangehandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="id" name="id" variant="outlined" required
                fullWidth id="id" label="ID" autoFocus
                value={User.userid} onChange={onChangehandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="account_number" 
                label="account_number" type="account_number" id="account_number" autoComplete="account_number"
                value={User.account_number} onChange={onChangehandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="business_number" 
                label="business_number" type="business_number" id="business_number" autoComplete="business_number"
                value={User.business_number} onChange={onChangehandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="phonenumber"
                label="phoneNumber" type="phonenumber" id="phonenumber"
                autoComplete="phonenumber"
                value={User.phonenumber} onChange={onChangehandler}
              />
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="password"
                label="PassWord" type="password" id="password"
                autoComplete="current-password"
                value={User.password} onChange={onChangehandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth
                name="passwordConfirm" label="PasswordConfirm" type="password"
                value={confirmPassword} onChange={changeConfirmPassWord}
              />
              
            </Grid>
          </Grid>
          <Button
            type="submit" fullWidth variant="contained"
            color="primary" className={classes.submit}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Button
            onClick={ClickBack} fullWidth
            variant="contained"color="primary">
            back
            </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}