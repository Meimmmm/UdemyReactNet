import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

// const getInitialDarkMode = () => {
//   const storedDarkMode = localStorage.getItem('darkMode');
//   return storedDarkMode ? JSON.parse(storedDarkMode) : true;
// };

function App() {

  // const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const {darkMode} = useAppSelector(state => state.ui)
  const palleteType = darkMode ? 'dark' : 'light';  //darkMode の値に応じて 'dark' または 'light' の文字列を格納(darkMode が true なら 'dark'、false なら 'light' を palleteType に代入)
  const theme = createTheme({
    palette: {          //palette は、テーマの主要な色の設定を行うオブジェクト
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  //3-36 NavBarじゃなくて書くのこっちか
  // const toggleDarkMode = () => {
  //   // localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  //   setDarkMode(!darkMode);
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />   受け渡し */}
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode
            ? 'radial-gradient(circle, #1e3aBa, #111827)'
            : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 6 //padding avobe and below
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>  {/* marginTop */}
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>


  )
}

export default App
