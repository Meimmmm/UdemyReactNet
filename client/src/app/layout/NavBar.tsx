import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean
    toggleDarkMode: () => void; //なんでvoid?
}

export default function NavBar({darkMode, toggleDarkMode}: Props) {
    //const darkMode = true;

  return (
    <AppBar position="fixed"> {/* fixed to the top of screen */}
        <Toolbar>
            <Typography variant="h6">RE=STORE</Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}