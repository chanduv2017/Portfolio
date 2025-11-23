import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoaderFour } from "./components/ui/loader";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoaderFour />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;