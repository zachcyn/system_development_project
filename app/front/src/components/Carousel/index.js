import { Container } from "@mui/material";
import {React, useState} from "react";
import { Carousel } from "react-bootstrap";
import images from "./images";

export default function ImageSlider() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Container sx={{maxHeight:"600px", width:window.innerWidth}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map(image => (
                <Carousel.Item key={image.id}>
                    <img
                    width="100%"
                    height="600px"
                    src={image.imgPath}
                    alt={image.label}
                    />
                    <Carousel.Caption>
                    <p>{image.label}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

