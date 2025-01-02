import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Player from "./pages/player";
import AdicionarVideo from "./pages/adicionarVideo";
import NotFound from "./pages/notFound";


export default function AppRoutes() {
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/novo" element={<AdicionarVideo />} />
                <Route path="/video/:id" element={<Player />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    )
}