import { Container, Typography, Box, Card, CardMedia, Fade } from '@mui/material';
import { useState, useEffect } from 'react';
import backgroundImage from "../assets/Pic1.jpg";
import image1 from "../assets/Pic2.jpg";
import image2 from "../assets/Pic3.jpg";
import image3 from "../assets/Pic4.jpg";


export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image index
  const [visible, setVisible] = useState(false); // State for image visibility
  const [isFirstRender, setIsFirstRender] = useState(true); // State for tracking initial render

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through images
      setIsFirstRender(false); // Set to false after first render
      setVisible(true); // Set image visible after transition
      setTimeout(() => setVisible(false), 3000); // Hide image after 2 seconds (adjust as needed)
    }, 4000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(timeoutId); // Clear timer on unmount
  }, []); // Empty dependency array for continuous cycling

  const images = [image1, image2, image3]; // Array of image paths

  return (
    <Container sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', minHeight: '80vh', position: 'relative'
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)',
          zIndex: -1,
        }}
      />
      <Fade in={isFirstRender ? true : visible} timeout={1000}>
        <Card key={images[currentIndex]}>
          <CardMedia
            component="img"
            image={images[currentIndex]}
            sx={{ width: '150px', height: "150px" }}
          />
        </Card>
      </Fade>
      <Typography variant="h1" sx={{ zIndex: 1 }}>About Me</Typography>
      <Typography variant="body1" sx={{ zIndex: 1 }}>
        Some stuff about me
      </Typography>
    </Container>
  );
}