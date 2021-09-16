
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
import { UserInfoProps } from './interfaces/signupInterface';
import axios from 'axios';
import { url } from 'inspector';




export default function SignUpPageBuyer(){
  const server = `http://localhost:8080/buyer/Create`;
    const classes = useStyles();
    const history = useHistory();
    const [userid, setId]= useState("");
    const [name, setName]= useState("");
    const [password, setPassWord]= useState("");
    const [address, setAddress]= useState("");
    const [phoneNumber, setPhonNumber]= useState("");
    const [confirmPassword, setconfirmPassword]= useState("");
    const [User, setUserInfo] = useState<UserInfoProps>({
      userid: "",
      name: "",
      phonenumber: "",
      address: "",
      password: "",
    })
    
    function ClickBack(){
      return(
        history.push('/')
      )
    }
    function changeName(event:any){
      event?.preventDefault()
      setName(event.target.value)

    }
    function changeID(event:any){
      event?.preventDefault()
      setId(event.target.value)
    }
    function changePassWord(event:any){
      event?.preventDefault()
      setPassWord(event.target.value)
    }
    function changeConfirmPassWord(event:any){
      event?.preventDefault()
      setconfirmPassword(event.target.value)
    }
    function changeAddress(event:any){
      event?.preventDefault()
      setAddress(event.target.value)
    }
    function changePhoneNumber(event:any){
      event?.preventDefault()
      setPhonNumber(event.target.value)
    }

    function submitHandler(event:any){
      event?.preventDefault()
      if(password !== confirmPassword){
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

      // axios.post(server, {    
      //   userId: userid,
      //   name: name,
      //   phonenumber: phoneNumber,
      //   address: address,
      //   password: password,
      // },)

      axios({
        method: 'post',
        url: server,
        data:{
          userId: userid,
          name: name,
          phonenumber: phoneNumber,
          address: address,
          password: password,
        },
        withCredentials:false,
      })
      console.log({    
        userId: userid,
        name: name,
        phonenumber: phoneNumber,
        address: address,
        password: password,
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
                value={name} onChange={changeName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="id" name="id" variant="outlined" required
                fullWidth id="id" label="ID" autoFocus
                value={userid} onChange={changeID}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="address" 
                label="Address" type="address" id="address" autoComplete="address"
                value={address} onChange={changeAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="phonenumber"
                label="phoneNumber" type="phonenumber" id="phonenumber"
                autoComplete="phonenumber"
                value={phoneNumber} onChange={changePhoneNumber}
              />
            <Grid item xs={12}>
              <TextField
                variant="outlined" required fullWidth name="password"
                label="PassWord" type="password" id="password"
                autoComplete="current-password"
                value={password} onChange={changePassWord}
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