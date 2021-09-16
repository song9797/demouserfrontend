import { Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, 
    Button, Grid,  Link, Box, Radio,  } from "@material-ui/core";
import axios from "axios";
import { url } from "inspector";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles/style";

export default function SignInPage() {
    // const [server,setServer] = useState(`http://localhost:3001`);
    var server = 'http://a63fd6c4128c045708aab71bd19256da-967814825.us-east-2.elb.amazonaws.com:8080/'
    const history = useHistory();
    const classes = useStyles();
    const [inputId,setInputId] = useState("");
    const [inputPassword,setInputPassword] = useState("");
    const [usertype, setusertype] = useState('seller')
    function ClickBack(){
      return(
        history.push('/')
      )
    }
    function InputId(event:any){
      event?.preventDefault()
      setInputId(event.target.value)
    }
    function InputPassword(event:any){
      event?.preventDefault()
      setInputPassword(event.target.value)
    }
    function onchangeHandler(event:any){
      event?.preventDefault()
      setusertype(event.target.value)
    }
    // useEffect(()=>{
    //   axios({
    //     method: 'get',
    //     url: server,
    //     withCredentials: true,
    //   })
    //   .then(res=>console.log(res))
    //   .catch()
    // },[])
    function Signin(){
      console.log(usertype)
      if(usertype === 'seller'){
        // setServer(`http://localhost:8080/auth/seller`)
        server = 'http://a63fd6c4128c045708aab71bd19256da-967814825.us-east-2.elb.amazonaws.com:8080/auth/seller'
      }else if(usertype === 'buyer'){
        // setServer(`http://localhost:8080/auth/buyer`)
        server = 'http://a63fd6c4128c045708aab71bd19256da-967814825.us-east-2.elb.amazonaws.com:8080/auth/buyer'
      }
      axios({
        method: 'post',
        url: server,
        data:
        {
          userId: inputId,
          password: inputPassword
        },
        withCredentials: false,
      })
      .then(res => {
      if(res.data.info.userId === undefined){
        alert('아이디가 존재하지 않습니다.')
      }else if(res.data.info.userId === null){
        alert('비밀번호가 맞지 않습니다.')
      }else if(res.data.info.userId === inputId){
        sessionStorage.setItem('userId',inputId)
        sessionStorage.setItem('userName',res.data.info.name)
        return(history.push('/'))
      }
      return history.push('/signin')
      })
  }
  
      
    

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined" margin="normal" required fullWidth id="userid"
              label="ID" name="userid" autoComplete="userid" autoFocus
              value={inputId} onChange={InputId}
            />
            <TextField
              variant="outlined" margin="normal" required fullWidth name="password"
              label="Password" type="password" id="password" autoComplete="current-password"
              value={inputPassword} onChange={InputPassword}
            />

            <FormControlLabel
              control={<Radio checked={usertype === 'seller'} value="seller"  onChange={onchangeHandler} />}
              label="판매자"
            />
            <FormControlLabel
              control={<Radio checked={usertype === 'buyer'} value="buyer"  onChange={onchangeHandler}/>}
              label="구매자"
            />

            <Button
               fullWidth variant="contained" color="primary" 
              className={classes.submit} onClick={Signin}
            >
              Sign In
            </Button>
            <Button
              onClick={ClickBack} fullWidth variant="contained"
              color="primary" className={classes.submit}
            >
              Back
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }