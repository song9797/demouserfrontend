
import { Typography, AppBar, Toolbar, Button, IconButton, SvgIcon, SvgIconProps, Avatar, Popover,  Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import { useStyles } from "./styles/styles";
import { useHistory} from "react-router-dom";
import React, { useEffect, useState } from "react";


function HomeIcon(props: SvgIconProps){
  return(
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>

  );
}


function MainAppBar(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isSignin,setSignin] = useState(false);
  const [Signup,setSignup] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  var currentUserID=null
  var currentUserName=null
  const history = useHistory();
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  function ClickSignIn(){
    return(
      history.push('/signin')
    )
  }
  function ClickSignUp(event: React.MouseEvent<HTMLElement, MouseEvent>){
    setSignup(event.currentTarget)
  }
  function handleCloseSignUp(){
    setSignup(null)
  }
  function ChooseSeller(){
    handleCloseSignUp()
    return(history.push('/signup-seller'))
  }

  function ChooseBuyer (){
    handleCloseSignUp()
    return(history.push('/signup-buyer'))
  }

  async function ClickLogout(){
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userName')
    return(
      history.push('/')
    )
  }
  function ClickHome(){
    return(
      history.push('/')
    )
  }
  // useEffect(()=>{
  //   if(sessionStorage.getItem('userId')===null){
  //     setSignin(false)
  //   }else {setSignin(true)}
  // })
  const classes = useStyles();
  if(sessionStorage.getItem('userId')===null){
    return(
      <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton  onClick={ClickHome} edge="start" className={classes.Button} color="inherit" aria-label="mainlogo">
            <HomeIcon color='inherit'></HomeIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                Kuyaho
            </Typography>
          <Button  onClick={ClickSignUp} className={classes.Button} variant= "contained" color = "inherit">Sign Up</Button>
          <Dialog open ={Boolean(Signup)} onClose={handleCloseSignUp}>
            <DialogTitle><Typography>사용자 유형 선택</Typography></DialogTitle>
            <DialogContent>
              <Typography gutterBottom>사용자 유형을 선택해 주세요</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={ChooseBuyer} className={classes.Button} variant= "contained" color = "inherit">구매자</Button>
              <Button onClick={ChooseSeller} className={classes.Button} variant= "contained" color = "inherit">판매자</Button>
            </DialogActions>
          </Dialog>
          <Button  onClick={ClickSignIn} className={classes.Button} variant= "contained" color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
    );

  }else
  {
    currentUserID= sessionStorage.getItem('userId')
    currentUserName= sessionStorage.getItem('userName')
    return(
      <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton  onClick={ClickHome} edge="start" className={classes.Button} color="inherit" aria-label="mainlogo">
            <HomeIcon color='inherit'></HomeIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                Kuyaho
            </Typography>
            <Avatar  aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}className={classes.Button}></Avatar>
            <Popover id="mouse-over-popover" open={open} anchorEl={anchorEl}
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography>User: {currentUserName}</Typography>
              <Typography>ID: {currentUserID}</Typography>
            </Popover>
            
          <Button  onClick={ClickLogout} className={classes.Button} variant= "contained" color = "inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default MainAppBar;
