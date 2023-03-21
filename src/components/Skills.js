import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import webDevelopment from "../assets/img/web-development.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import angular from "../assets/img/angular.png";
import node from "../assets/img/node.png";
import typescript from "../assets/img/typescript.png";
import springboot from "../assets/img/springboot.png";
import more from "../assets/img/more.png";
import colorSharp from "../assets/img/color-sharp.png";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselItems = [
  { src: webDevelopment, text: "Web Development" },
  { src: java, text: "Java" },
  { src: javascript, text: "Javascript" },
  { src: python, text: "Python" },
  { src: react, text: "React" },
  { src: angular, text: "Angular" },
  { src: node, text: "Node" },
  { src: typescript, text: "Typescript" },
  { src: springboot, text: "Springboot" },
  { src: more, text: "And More..." },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box animate__animated animate__fadeIn">
              <h2>Skills</h2>
              <p>
                Active listening, proactivity, preactivity, passion for
                learning, public speaking, autonomy, teamwork, adaptability,
                innovation, creativity, rigor, tendency to critical thinking.
              </p>
              <Carousel
                responsive={responsive}
                className="skills-slider"
                infinite
              >
                {carouselItems.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.src} alt={item.text} />
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Color Sharp"
      />
    </section>
  );
}
