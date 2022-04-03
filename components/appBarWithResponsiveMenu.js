import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import logo99foto from "../public/logo/99foto_logo.svg";
import logo99fotomobile from "../public/logo/99foto_logo_mobile.svg";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { keyframes } from "@mui/system";

const pages_left = [
  { name: "FOTOGRAFIA ŚLUBNA", url: "/fotografia-slubna-krakow" },
  { name: "SESJA ZDJĘCIOWA", url: "/sesja-zdjeciowa-krakow" },
  { name: "KILKA HISTORII", url: "/reportaze-slubne-sesje-plenerowe" },
];

const pages_right = [
  { name: "MISJA i FAQ", url: "/misja-i-faq" },
  { name: "OFERTA", url: "/oferta-fotografii-slubnej" },
  { name: "BLOG", url: "/blog-1" },
  { name: "STREFA KLIENTA", url: "/strefa-klienta" },
];

const AppBarWithResponsiveMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const triggerScrollDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const triggerScrollUp = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1800,
  });

  const handleScrollTopClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const spin = keyframes`
    0%
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  `;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Zoom in={triggerScrollUp}>
        <Box sx={{ position: "fixed", zIndex: "tooltip", bottom: 40, right: 35, animation: `${spin} 2s infinite ease` }}>
          <Fab color="primary" size="medium" aria-label="scroll back to top" onClick={handleScrollTopClick}>
            <KeyboardArrowUp sx={{ color: "black", fontSize: 60 }} />
          </Fab>
        </Box>
      </Zoom>
      <Slide appear={true} direction="down" in={!triggerScrollDown}>
        <MuiAppBar position="absolute" color="transparent" elevation={0}>
          <Container>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Grid container direction="row" alignItems="center">
                <Grid item lg={5}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      {pages_left.map((page, key) => (
                        <Link key={key} href={page.url} passHref>
                          <Button variant="menuButton" key={key}>
                            {page.name}
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  </Item>
                </Grid>
                <Grid item lg={2}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center", ml: "40px" }}>
                      <Link key={1} href="/" passHref>
                        <Button variant="menuButton" sx={{ pt: 2, pb: 2 }} key={1} onClick={handleCloseNavMenu}>
                          <Image src={logo99foto} width={100} height={140} />
                        </Button>
                      </Link>
                    </Box>
                  </Item>
                </Grid>
                <Grid item lg={5}>
                  <Item>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      {pages_right.map((page, key) => (
                        <Link key={key} href={page.url} passHref>
                          <Button variant="menuButton" key={key}>
                            {page.name}
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Container>
            <Toolbar id="back-to-top-anchor" disableGutters sx={{px:3}}>
              <Box sx={{ display: { xs: "flex", lg: "none" }, width: '100%' }} justifyContent="center" alignItems="center" >
                <Link key={1} href="/" passHref>
                  <Button variant="menuButton" key={1} onClick={handleCloseNavMenu}>
                    <Image src={logo99foto} width={105} height={140} />
                  </Button>
                </Link>
              </Box>
              <Box sx={{  display: { xs: "flex", lg: "none"}}} justifyContent="center" alignItems="center">
                <IconButton size="large" variant="outlined" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{backgroundColor: "white"}}>
                  <MenuIcon sx={{ color: "black", fontSize: '1.5rem' }}/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", lg: "none" },
                  }}>
                  {pages_left.map((page, key) => (
                    <Link key={key} href={page.url} passHref>
                      <MenuItem key={key} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  {pages_right.map((page, key) => (
                    <Link key={key} href={page.url} passHref>
                      <MenuItem key={key} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>             
            </Toolbar>
          </Container>
        </MuiAppBar>
      </Slide>
    </>
  );
};

export default AppBarWithResponsiveMenu;
