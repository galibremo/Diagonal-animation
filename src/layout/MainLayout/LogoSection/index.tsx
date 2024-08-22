import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Link from '@mui/material/Link';
import { DASHBOARD_PATH } from 'config';
import Box from '@mui/material/Box';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const logoVariants = {
        initial: {
            x: '50vw',
            y: '50vh',
            opacity: 0,
            scale: 1
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                delay: 0.5
            }
        },
        final: {
            x: '0%',
            y: '0%',
            rotate: 360,
            transition: {
                delay: 2,
                duration: 1.5,
                ease: 'easeInOut',
                type: 'spring',
                stiffness: 150,
                damping: 20
            }
        }
    };

    return (
        <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="theme-logo">
            <motion.div className="logo-wrapper" initial="initial" animate={['center', 'final']} variants={logoVariants}>
                <Box>
                    <Logo />
                </Box>
            </motion.div>
        </Link>
    );
};

export default LogoSection;
