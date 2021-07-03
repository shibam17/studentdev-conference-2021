import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Card from "./components/Cards";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />

      <Grid container spacing={4,0}>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
