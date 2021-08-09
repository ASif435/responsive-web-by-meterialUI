import {Grid, makeStyles} from '@material-ui/core';
import Feed from './components/Feed';
import LeftBar from './components/LeftBar';
import Nav from './components/Nav';
import RightBar from './components/RightBar';
import Add from './components/Add';

const useStyle = makeStyles((theme)=>({
    right:{
      [theme.breakpoints.down("sm")]:{
        display:"none"
      }
    }
 }))
const App = () => {
  const classes = useStyle()
  return <>
    <Nav/>
    <Grid container >
      <Grid item sm={2} xs={2}>
        <LeftBar/>
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed/>
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <RightBar/>
      </Grid>
    </Grid>

    <Add/>
  </>;
};

export default App;