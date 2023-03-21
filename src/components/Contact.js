import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import toast from "react-hot-toast";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmite = async (e) => {
    e.preventDefault();
    setButtonText("Sending");

    const sendMessage = async () => {
      return new Promise(async (resolve, reject) => {
        try {
          let response = await fetch("/contact", {
            method: "POST",
            headers: {
              "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
          if (response.status === 200) {
            resolve(response);
          } else {
            reject(response);
          }
        } catch (error) {
          reject(error);
        }
      });
    };

    await toast.promise(sendMessage(), {
      loading: "Sending Message...",
      success: () => {
        setFormDetails(formInitialDetails);
        setButtonText("Send");
        return <b>Message Send Successfully</b>;
      },
      error: (error) => {
        console.log(error);
        setButtonText("Send");
        return "Something went wrong, please try again";
      },
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Conctact Me"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6} className="animate__animated animate__fadeIn">
            <h2>Get It Touch</h2>
            <form onSubmit={handleSubmite}>
              <Row>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      onFormUpdate("firstName", event.target.value)
                    }
                    required
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      onFormUpdate("lastName", event.target.value)
                    }
                    required
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(event) =>
                      onFormUpdate("email", event.target.value)
                    }
                    required
                  />
                </Col>
                <Col md={6} className="px-1">
                  <input
                    type="number"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(event) =>
                      onFormUpdate("phone", event.target.value)
                    }
                    required
                  />
                </Col>
                <div className="submit">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(event) =>
                      onFormUpdate("message", event.target.value)
                    }
                    required
                  />
                  <button type="submit" disabled={buttonText === "Sending"}>
                    <span>{buttonText}</span>
                  </button>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
