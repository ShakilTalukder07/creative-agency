import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/Theme';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout></Layout>,
      path: '/',
      children: [
        {
          element: <Home></Home>,
          path: '/'
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
      ></RouterProvider>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
