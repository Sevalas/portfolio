import { ArrowRightCircle } from "react-bootstrap-icons";

export default function ProjectCard({ title, description, imgSrc, links }) {
  return (
    <>
      <div className="projects-imgbx">
        <img src={imgSrc} alt={title} />
        <div className="projects-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {links &&
            links.length > 0 &&
            links.map((link, index) => (
              <div key={index} className="pt-2">
                <a href={link.href} target="_blank" rel="noreferrer">
                  <button>
                    <span>{link.text}</span>
                    <ArrowRightCircle size={35} />
                  </button>
                </a>
              </div>
            ))}
          <div></div>
        </div>
      </div>
    </>
  );
}
