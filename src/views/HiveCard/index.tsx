// material-ui
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Avatar from '@mui/material/Avatar';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useState } from 'react';

const image = ['AB', 'TH', 'HG', 'FF', 'BG', 'AX'];

const SamplePage = () => {
    const [swipeElement, setSwipeElement] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleSwipe = (swiper: any) => {
        setSwipeElement(true);
        setCurrentIndex(swiper.realIndex);
        console.log('Current Index:', swiper.realIndex);
    };
    return (
        <MainCard title="Sample Card">
            <Swiper
                onSlideChange={handleSwipe}
                pagination={{ clickable: true }}
                navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
                modules={[Navigation, Pagination]}
                slidesPerView={5}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 2.5
                }}
                style={{
                    height: '62vh'
                }}
            >
                {image.map((img, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Avatar>{img}</Avatar>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box id="swiper-prev">
                    <ArrowCircleLeftIcon id="arrow-back" sx={{ fontSize: 40 }} />
                </Box>
                <Box id="pagination"></Box>
                <Box id="swiper-next">
                    <ArrowCircleRightIcon id="arrow-forward" sx={{ fontSize: 40 }} />
                </Box>
            </Box>
        </MainCard>
    );
};

export default SamplePage;
