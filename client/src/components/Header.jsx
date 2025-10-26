
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const logo = "https://cdn-icons-png.flaticon.com/512/2921/2921222.png";

  return (
    <AppBar position="static" color="secondary">
      <Toolbar style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src={logo} 
          alt="Invoice Logo" 
          style={{ width: 40, height: 40 }} 
        />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ fontWeight: 'bold', letterSpacing: 1 }}
        >
          Invoice
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
