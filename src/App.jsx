import Cabecalho from "@/components/cabecalho"
import AppRoutes from "./Routes"
import styled from "styled-components"
import Rodape from "./components/rodape"
import { VideoProvider } from "./context/videoContex"
import { useResolvedPath } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import MenuMobile from "./components/menuMobile"

const AppConteiner = styled.div`
  width: 100%; 
  background-color: var(--cor-quaternaria);
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cor-terciaria);
`


function App() {
  const [alternative, setAlternative] = useState(false);
  const path = useResolvedPath().pathname;

  const leyoutMobile = useMediaQuery({maxWidth: 859}); 
  
  useEffect(() => {
    if (path === '/video/novo') {
      setAlternative(true);
    } else {
      setAlternative(false);
    }
  }, [path]);

  return (
    <AppConteiner>
        {!leyoutMobile && <Cabecalho alternative={alternative} />}
        <VideoProvider>
          <MainContent>
            <AppRoutes />
          </MainContent>
        </VideoProvider>
        {!leyoutMobile ? <Rodape /> : <MenuMobile />}
    </AppConteiner>
  )
}

export default App
