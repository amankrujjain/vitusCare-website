import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-3.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-8.jpg"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/c-banner-7.jpg"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
