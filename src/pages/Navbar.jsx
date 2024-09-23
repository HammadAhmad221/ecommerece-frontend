import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Logout, Shop2, Store } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Divider,
  Drawer,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

import Cart from "./customer/components/Cart";
import { updateCustomer } from "../redux/userHandle";

const Navbar = () => {
  const { currentUser, currentRole } = useSelector((state) => state.user);

  const totalQuantity =
    currentUser &&
    currentUser.cartDetails &&
    currentUser.cartDetails.reduce((total, item) => total + item.quantity, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentRole === "Customer") {
      dispatch(updateCustomer(currentUser, currentUser._id));
    }
  }, [currentRole, currentUser, dispatch]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSign, setAnchorElSign] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const open = Boolean(anchorElUser);
  const openSign = Boolean(anchorElSign);

  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenSigninMenu = (event) => {
    setAnchorElSign(event.currentTarget);
  };

  const handleCloseSigninMenu = () => {
    setAnchorElSign(null);
  };

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "transparent", paddingTop: "1rem" }}
      >
        <Toolbar disableGutters>
          <HomeWrapper>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-red-400 p-1 rounded-lg">
                <img
                  src="/six-lays.png"
                  alt="6Lays"
                  className="w-16 h-16 rounded-lg"
                />
              </div>

              <div className="bg-red-400 rounded-lg p-0">
                <IconButton
                  sx={{
                    display: { xs: "flex", md: "flex" },
                  }}
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none" },
                justifyContent: "center",
              }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="/about-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Blogs
                </Link>
              </Button>
            </Box>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={handleCloseDrawer}
              sx={{ width: "33%" }}
            >
              <Box
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <ListItem button>
                  <Link
                    to="/about-us"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    About Us
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link
                    to="/blogs"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    Blogs
                  </Link>
                </ListItem>
              </Box>
            </Drawer>

            {currentRole === null && (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleOpenSigninMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Sign in
                </Button>
                <Menu
                  anchorEl={anchorElSign}
                  id="menu-appbar"
                  open={openSign}
                  onClose={handleCloseSigninMenu}
                  onClick={handleCloseSigninMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: styles.styledPaper,
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => navigate("/Customerlogin")}>
                    <Avatar />
                    <Link to="/Customerlogin">Sign in as customer</Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/Sellerlogin")}>
                    <ListItemIcon>
                      <Store fontSize="small" />
                    </ListItemIcon>
                    <Link to="/Sellerlogin">Sign in as seller</Link>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {currentRole === "Customer" && (
              <Box sx={{ flexGrow: 0, display: "flex" }}>
                <Tooltip title="Cart">
                  <IconButton
                    onClick={handleOpenCart}
                    sx={{ width: "4rem", color: "inherit", p: 0 }}
                  >
                    <Badge badgeContent={totalQuantity} color="error">
                      <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 32, height: 32, backgroundColor: "#8970dc" }}
                    >
                      {String(currentUser.name).charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  id="menu-appbar"
                  open={open}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: styles.styledPaper,
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => navigate("/Profile")}>
                    <Avatar />
                    <Link to="/Profile">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/Orders")}>
                    <ListItemIcon>
                      <Shop2 fontSize="small" />
                    </ListItemIcon>
                    <Link to="/Orders">My Orders</Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => navigate("/Logout")}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    <Link to="/Logout">Logout</Link>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </HomeWrapper>
        </Toolbar>
      </Container>

      {isCartOpen && (
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={handleCloseCart}
          PaperProps={{
            sx: {
              width: "30rem",
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          {/* <Cart /> */}
          <Cart setIsCartOpen={setIsCartOpen} />
        </Drawer>
      )}
    </AppBar>
  );
};

const styles = {
  styledPaper: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default Navbar;
