import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects1 = [
  {
    title: "MERN E-commerse",
    description: "Fullstack ReactJs Website",
    imgSrc: projImg1,
    links: [
      {
        text: "Website",
        href: "https://ecom-svl.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/ecommerce-challenge",
      },
    ],
  },
  {
    title: "Angular",
    description: "Github Search Tool",
    imgSrc: projImg2,
    links: [
      {
        text: "Website",
        href: "https://github-search-tool.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/github-search-tool",
      },
    ],
  },
  {
    title: "Flask Portfolio",
    description: "Python",
    imgSrc: projImg3,
    links: [
      {
        text: "Website",
        href: "https://flask-portfolio.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/portfolio-web",
      },
    ],
  },
];
const projects2 = [
  {
    title: "Python",
    description: "Tkinter-apps",
    imgSrc: projImg4,
    links: [
      {
        text: "Github",
        href: "https://github.com/Sevalas/tkinter-apps",
      },
    ],
  },
  {
    title: "Flask Mailer",
    description: "Mail Api and MongoDB",
    imgSrc: projImg5,
    links: [
      {
        text: "Website",
        href: "https://mailer-app.onrender.com/",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/mailer-app",
      },
    ],
  },
  {
    title: "Users Api Restful",
    description: "Java, SpringBoot Hibernate, JWT",
    imgSrc: projImg6,
    links: [
      {
        text: "Website",
        href: "https://users-api-restful.onrender.com/swagger-ui/index.html",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/users-api-restful",
      },
    ],
  },
];
const projects3 = [
  {
    title: "Java",
    description: "Spring Boot Api",
    imgSrc: projImg7,
    links: [
      {
        text: "Website",
        href: "https://spring-boot-challenge.onrender.com/swagger-ui.html",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/spring-challenge",
      },
    ],
  },
  {
    title: "Java",
    description: "Client Api Challenge",
    imgSrc: projImg6,
    links: [
      {
        text: "Website",
        href: "https://client-api-challenge.onrender.com/swagger-ui.html",
      },
      {
        text: "Github",
        href: "https://github.com/Sevalas/client-api-challenge",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col className="animate__animated animate__fadeIn">
            <h2>Projects</h2>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imgSrc={project.imgSrc}
                          links={project.links}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imgSrc={project.imgSrc}
                          links={project.links}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imgSrc={project.imgSrc}
                          links={project.links}
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Color Sharp 2"
      />
    </section>
  );
}
