import Carousel from 'react-bootstrap/Carousel';
import {Image} from "react-bootstrap";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
          alt={""}
          width={"100%"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
          alt={""}
          width={"100%"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"https://www.rabstol.net/uploads/gallery/main/50/rabstol_net_texture_28.jpg"}
          alt={""}
          width={"100%"}
          height={"300px"}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
