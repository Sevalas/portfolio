import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const period = 2000;

export default function Footer() {
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
    <section className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="pill-box wow slideInUp">
              <h3>
                I'm open to participate in your proposal, always willing to meet
                new projects and look for ways to learn, develop, meet people,
                interact with new technologies and grow in my career.
              </h3>
            </div>
          </Col>
          <Col sm={6} className="align-items-center text-center my-3">
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sebastian-valencia-lasprilla"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Sevalas"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>
              Copyright 2023. All Right Reserved. Sebastian Valencia Lasprilla
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
