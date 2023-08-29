//import './App.css';
//import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { orange } from '@mui/material/colors';
import { colors } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
function App() {
  const [data, setData] = useState([]);

  const getNbaData = async () => {
    await axios.get('https://www.balldontlie.io/api/v1/teams').then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getNbaData();
  }, []);
  console.log(data);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'city', headerName: 'city', width: 150 },
    { field: 'abbreviation', headerName: 'abbreviation', width: 150 },
    { field: 'conference', headerName: 'conference', width: 150 },
    { field: 'division', headerName: 'division', width: 150 },
    { field: 'custom', headerName: 'custom', width: 400 },
  ];
  const rows = data.map((row) => ({
    id: row.id,
    city: row.city,
    abbreviation: row.abbreviation,
    conference: row.conference,
    division: row.division,
    custom: row.city + ' :Danile' + row.abbreviation,
  }));

  const { datas } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <>
      <Container maxWidth="lg">
        <Grid container rowSpacing={8}>
          <Grid item xs={12}>
            <AppBar style={{ backgroundColor: 'green' }}>
              <Toolbar
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  color: 'orange',
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            container
            pt={10}
            columnGap={3}
            paddingTop={15}
            alignItems={'center'}
            justifyContent={' space-around'}
            width={'100%'}
          >
            <Grid item>
              <TextField
                helperText="Please name"
                id="demo-helper-text-aligned"
                label="Name"
                backgroundColor="green"
                style={{ borderColor: 'orange' }}
              />
            </Grid>

            <Grid>
              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
              />
            </Grid>
            {/*  <Grid>
              <Checkbox size="large" />
            </Grid> */}

            <Grid>
              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
              />
            </Grid>
            <Grid>
              <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
              />
            </Grid>
            <Grid item pb={3}>
              <Button
                variant="contained"
                style={{ backgroundColor: 'green', color: 'orange' }}
                size="large"
                fullWidth="true"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
        {/*   <div style={{ height: 400, width: '100%' }}>
          <DataGrid {...data} slots={{ toolbar: GridToolbar }} />
        </div> */}
        *
        {/* <Grid container columnSpacing={2} rowSpacing={5} pt={5}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                sx={{ height: 140, width: 200 }}
                image="/static/abc.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid> 
        </Grid>*/}
      </Container>
    </>
  );
}

export default App;
