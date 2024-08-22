import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { initial } from 'lodash-es';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 2,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1
    }
};

const Hive = () => (
    <Box
        sx={{
            width: '100%',
            height: '80vh',
            overflow: 'hidden',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #d0e, #91f)'
        }}
    >
        <motion.ul
            style={{
                width: '150px',
                height: '150px',
                display: 'grid',
                overflow: 'hidden',
                margin: '0',
                listStyle: 'none',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50px'
            }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {[0, 1, 2, 3].map((index) => (
                <motion.li key={index} style={{ background: 'white', borderRadius: '100%' }} variants={item} />
            ))}
        </motion.ul>
    </Box>
);

export default Hive;
