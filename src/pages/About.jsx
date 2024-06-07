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
      flexDirection: 'column', flexGrow: 1, position: 'relative'
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
        <Card key={images[currentIndex]} sx={{ marginTop: "20px"}}>
          <CardMedia
            component="img"
            image={images[currentIndex]}
            sx={{ width: '150px', height: "150px" }}
          />
        </Card>
      </Fade>
      <Typography variant="h1" sx={{ zIndex: 1, margin: "20px" }}>About Me</Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
      I'm a recent coding bootcamp graduate with a passion for building exceptional web solutions. My background might seem a little eclectic – I've spent years helping customers design their dream homes at Home Depot, and even served as a Chaplain Assistant in the military. But these experiences all have something in common: a desire to help others and a love for working collaboratively.
      </Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
      Now, I've channeled that energy into the world of web development.  I'm a fast learner, able to think on my feet in high-pressure situations, and excited to leverage my technical skills (JavaScript, React, Node.js, and more!) to bring your web ideas to life.
      </Typography>
      <Typography variant="body1" sx={{ zIndex: 1, textAlign: 'center', margin: "20px" }}>
      Outside of code, I find myself drawn to learning new things.  Whether it's exploring the latest web development trends or diving into a good book (fantasy is a particular favorite!), I'm always curious and eager to grow.      
      </Typography>
      

    </Container>
  );
}