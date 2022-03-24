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

import Image from "next/image";
import logo99foto from "../public/logo/99foto_logo.svg";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

const pages_left = ["FOTOGRAFIA ŚLUBNA", "SESJA ZDJĘCIOWA", "KILKA HISTORII"];
const pages_right = ["MISJA i FAQ", "OFERTA", "BLOG", "STREFA KLIENTA"];
const logo = ["LOGO"];

const AppBarWithResponsiveMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      <MuiAppBar position="absolute" color="transparent" elevation={0}>
        <Container fixed>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item lg={5}>
                <Item>
                  <Box>
                    {pages_left.map((page) => (
                      <Button
                        variant="menuButton"
                        key={page}
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                </Item>
              </Grid>
              <Grid item lg={2}>
                <Item>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="menuButton"
                      sx={{ pt: 2, pb: 2 }}
                      key={1}
                      onClick={handleCloseNavMenu}
                    >
                      <Image src={logo99foto} width={100} height={140} />
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item lg={5}>
                <Item>
                  <Box>
                    {pages_right.map((page) => (
                      <Button
                        variant="menuButton"
                        key={page}
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
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
                }}
              >
                {pages_left.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                {pages_right.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}
            >
              99FOTO.PL
            </Typography>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </Slide>
  );
};

export default AppBarWithResponsiveMenu;
