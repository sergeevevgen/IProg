import React from 'react';
import './App.css';
import logo from './images/1.jpg';
import c1 from './images/Murcielago.png';
import c2 from './images/R34GTR.png';
import c3 from './images/Supra.png';
import f from './images/F40.png';
import f1 from './images/F1.png';
import con from './images/Countach.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const pages = ['News', 'Autos', 'Sell'];
function App() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: '#c0e8ed' }}>
      <AppBar position="static" style={{background: '#5e4949e5', marginBottom: 40}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="gray">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Luxury Motors
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Luxury Motors">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Emblem" src={logo} variant="rounded" sx={{width: 150}}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Container>
        <Carousel>
          <div>
              <img src={c1} />
              <p className="legend">Lamborghini Murcielago</p>
          </div>
          <div>
              <img src={c2} />
              <p className="legend">Nissan Skyline R34 GT-R</p>
          </div>
          <div>
              <img src={c3} />
              <p className="legend">Toyota Supra</p>
          </div>
        </Carousel>
        <Typography variant="h4" align= 'center' color='#5e4949e5' >
          Newest cars in our store
        </Typography>
        <Divider variant="middle" sx={{margin: 4}}/>
        <Grid container rowSpacing={{ xs: 1, md: 1 }} columnSpacing={{ xs: 1, sm: 5, md: 3 }}  sx={{marginBottom: 5}}>
            <Card sx={{ maxWidth: 370, margin: 1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={f}
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ferrari F40
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Ferrari F40 is a mid-engine, rear-wheel drive sports car engineered by Nicola Materazzi with styling by Pininfarina.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 370, margin: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={f1}
                  alt="F1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    McLaren F1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 370, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={con}
                alt="Countach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lamborghini Countach
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The Lamborghini Countach is a rear mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 to 1990.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
      <AppBar position="static" style={{background: '#5e4949e5'}}>
          <Container maxWidth="md">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Luxury Motors">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Emblem" src={logo} variant="rounded" sx={{width: 150}}/>
                  </IconButton>
                </Tooltip>
              </Box>
            <Divider orientation="vertical" color='white' flexItem sx={{margin: 3}}/>
            <Typography 
              variant="h6"
              noWrap
              component="div"
              color='white'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                © 2021 Admix
            </Typography>
            </Toolbar>
          </Container>
      </AppBar>
    </Box>
  );
}

export default App;