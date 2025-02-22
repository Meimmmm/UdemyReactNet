import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";

const midLinks = [
    { title: 'catatog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rigthLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}

// type Props = {
//     darkMode: boolean
//     toggleDarkMode: () => void; //なんでvoid?
// }

// export default function NavBar({ darkMode, toggleDarkMode }: Props) {
export default function NavBar() {
    //const darkMode = true;
    
    // 読み込みフラグ
    const {isLoading, darkMode} = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();

    return (
        <AppBar position="fixed"> {/* fixed to the top of screen */}
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} sx={navStyles} to={'/'} variant="h6">RE-STORE</Typography>
                    {/* <IconButton onClick={toggleDarkMode}> */}
                    <IconButton onClick={() => dispatch(setDarkMode())}>
                        {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                    </IconButton>
                </Box>
                <List sx={{display: 'flex'}}>
                    {/* map over each one of those elements of the array */}
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{color: 'inherit'}}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {rigthLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
            {/* 読み込みフラグ */}
            {isLoading && (
                <Box sx={{width: '100%'}}>
                    <LinearProgress color="secondary" />
                </Box>
            )}
        </AppBar>
    )
}