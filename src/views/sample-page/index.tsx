import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { HexGrid, Text, Layout, Hexagon, Pattern } from 'react-hexgrid';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const hexagonVariants = {
    initial: { opacity: 0.05, scale: 0.95, filter: 'blur(0.1px)' },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1
        }
    }
};

const SamplePage = () => {
    const [hovered, setHovered] = useState(false);

    const width = 400; // Set the desired width
    const height = (width * Math.sqrt(8)) / 2;

    return (
        <MainCard title="Hive">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
                    <Layout size={{ x: 10, y: 10 }} flat={true} spacing={hovered ? 1.03 : 0.98} origin={{ x: 0, y: 0 }}>
                        <motion.g initial="initial" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                            <Hexagon q={0} r={0} s={0} style={{ fill: '#438e96', stroke: 'none' }}>
                                <Text style={{ fill: 'white', fontSize: '1.5' }}>How are you doing!</Text>
                            </Hexagon>
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={0} r={-1} s={1} style={{ fill: hovered ? 'url(#pat-1)' : '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={0} r={1} s={-1} style={{ fill: hovered ? 'url(#pat-2)' : '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={1} r={-1} s={0} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={1} r={0} s={-1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-1} r={1} s={0} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-1} r={0} s={1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={0} r={-2} s={2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={1} r={-2} s={1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={2} r={-2} s={0} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={2} r={-1} s={-1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={2} r={-0} s={-2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={1} r={1} s={-2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={0} r={2} s={-2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-1} r={2} s={-1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-2} r={2} s={0} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-2} r={1} s={1} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={0} r={-2} s={2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-2} r={0} s={2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                        <motion.g variants={hexagonVariants} initial="initial" animate={hovered ? 'visible' : 'initial'}>
                            <Hexagon q={-1} r={-1} s={2} style={{ fill: '#438e96', stroke: 'none' }} />
                        </motion.g>
                    </Layout>
                    <Pattern
                        id="pat-1"
                        link="data:image/jpeg;base64,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"
                    />
                    <Pattern
                        id="pat-2"
                        link="data:image/jpeg;base64,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"
                    />
                </HexGrid>
                <Button onClick={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    CLICK
                </Button>
                <Box
                    sx={{
                        width: `${height}px`,
                        height: `${width}px`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            height: '0',
                            borderTop: `${height / 2}px solid transparent`,
                            borderBottom: `${height / 2}px solid transparent`
                        },
                        '&:before': {
                            right: '100%',
                            borderRight: `${width / 2}px solid #fff`
                        },
                        '&:after': {
                            left: '100%',
                            borderLeft: `${width / 2}px solid #fff`
                        }
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                            backgroundColor: 'primary.main'
                        }}
                    >
                        <ReactPlayer url="https://www.twitch.tv/galibremo" width="100%" height="100%" playing muted loop controls />
                    </Box>
                </Box>
            </Box>
        </MainCard>
    );
};

export default SamplePage;
