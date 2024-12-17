import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from 'react-h5-audio-player';
import { Box } from '@chakra-ui/react';


function AudioPlayerCustom() {
    return (
        <Box height="10%" position="fixed" bottom="0" left="0" right="0" zIndex="10" display="flex">
            <AudioPlayer autoPlay src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/>
        </Box>
    )
}

export default AudioPlayerCustom
