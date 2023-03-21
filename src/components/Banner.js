import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";

const toRotate = [
  "Full-Stack developer",
  "Front-End Developer",
  "Back-End Developer",
];
const period = 2000;

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            xl={5}
            className="animate__animated animate__zoomIn"
          >
            <img src={headerImg} alt="Header Img" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={7}
            className="animate__animated animate__fadeIn"
          >
            <span className="tagline mb-4">Welcome to my Portfolio</span>
            <h1>
              Hi I'm Sebastian
              <br />
              Valencia Lasprilla
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm a software enthusiast trying to discover and learn about
              multiple areas of technology.
            </p>
            <p>
              From back-end to front-end, database and cloud, Java, Python and
              Javascript, I'm exploring and developing all kinds of things in
              this huge I.T. world.
            </p>
            <a href="https://github.com/Sevalas/portfolio/raw/develop/src/assets/Sebastian%20Valencia%20Lasprilla%20CV.pdf">
              <button>
                <span>Download CV </span>
                <ArrowDownCircle size={35} />
              </button>
            </a>
            <a href="#contact">
              <button>
                <span>Let's Connect </span>
                <ArrowRightCircle size={35} />
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
