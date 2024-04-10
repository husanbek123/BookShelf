import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./pages";
import Layout from "./components/Layout";
import Login from "./pages/Registration/LogIn";
import { ThemeProvider, createTheme } from "@mui/material";
import NotFoundPage from "./pages/404";
import Register from "./pages/Registration/Register";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useStorage from "./utils/store";
import { useEffect } from "react";

export const queryClient = new QueryClient();

function App() {
  const { userData } = useStorage();
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#6200EE",
      },
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.secret.length <= 0) {
      navigate("/register");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<Layout isLayoutExists={false} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
