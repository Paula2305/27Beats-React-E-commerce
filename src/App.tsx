import { Outlet } from 'react-router';
import './App.css'
import Navbar from "./components/navigation/navbar.component";
import { ChakraProvider } from "@chakra-ui/react";
import AudioPlayerCustom from './components/audioplayer/audio-player-components';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <ChakraProvider >
        <Navbar/>
        <Outlet/>
        <Footer/>
        <AudioPlayerCustom/>
    </ChakraProvider>
  )
}

export default App
