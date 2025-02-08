import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


function App() {

  const [darkMode, setDarkMode] = useState(false);
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
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />   {/* 受け渡し */}
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
