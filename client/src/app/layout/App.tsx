import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  //const darkMode = true;  //現在ダークモードが有効かどうかを保持する変数
  const palleteType = darkMode ? 'dark' : 'light';  //darkMode の値に応じて 'dark' または 'light' の文字列を格納(darkMode が true なら 'dark'、false なら 'light' を palleteType に代入)
  const theme = createTheme({
    //palette は、テーマの主要な色の設定を行うオブジェクト
    palette: {
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

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

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
          <Catalog products={products} />
        </Container>
      </Box>

    </ThemeProvider>


  )
}

export default App
