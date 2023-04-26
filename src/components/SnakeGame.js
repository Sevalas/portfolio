import { useRef, useState } from "react";
import icon from "../assets/img/snake.svg";
import { Transition } from "react-transition-group";
import caseIcon from "../assets/img/gameboy.svg";
import close from "../assets/img/close.svg";
import GameCanvas from "./GameCanvas";

const CSS_SHAKE = "shake-horizontal";

export default function SnakeGame({ setGeneralSwipeHandlers }) {
  const [showCase, setShowCase] = useState(false);
  const [inPropIcon, setInPropIcon] = useState(true);
  const [inPropCase, setInPropCase] = useState(false);
  const nodeRefIcon = useRef(null);
  const nodeRefCase = useRef(null);

  const duration = 500;

  const defaultStyleIcon = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  };

  const defaultStyleCase = {
    position: "fixed",
    transition: `${duration}ms linear`,
  };

  const transitionStylesIcon = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0, pointerEvents: "none" },
    exited: { opacity: 0, pointerEvents: "none" },
  };

  const transitionStylesCase = {
    entering: { bottom: "0" },
    entered: { bottom: "0" },
    exiting: { bottom: "-100%" },
    exited: { bottom: "-100%" },
  };

  const openCase = () => {
    document.body.style.overflow = "hidden";
    setShowCase(!showCase);
    setTimeout(function () {
      setInPropCase(!inPropCase);
      setInPropIcon(!inPropIcon);
    }, 100);
  };

  const closeCase = () => {
    setTimeout(function async() {
      if (nodeRefCase && nodeRefCase.current) {
        nodeRefCase.current.classList.remove(CSS_SHAKE);
      }
      setShowCase(!showCase);
    }, duration);
    setInPropCase(!inPropCase);
    setInPropIcon(!inPropIcon);
    document.body.style.overflow = "auto";
    setGeneralSwipeHandlers({});
  };

  return (
    <div className="snake-game">
      <Transition
        nodeRef={nodeRefIcon}
        in={inPropIcon}
        out={inPropIcon}
        timeout={duration}
      >
        {(state) => (
          <button
            type="button"
            style={{
              ...defaultStyleIcon,
              ...transitionStylesIcon[state],
            }}
            ref={nodeRefIcon}
          >
            <img
              src={icon}
              alt="Snake Icon"
              onClick={openCase}
              className="icon"
            />
          </button>
        )}
      </Transition>
      {showCase && (
        <Transition
          nodeRef={nodeRefCase}
          in={inPropCase}
          out={inPropCase}
          timeout={duration}
        >
          {(state) => (
            <div
              className="case"
              style={{
                ...defaultStyleCase,
                ...transitionStylesCase[state],
              }}
              ref={nodeRefCase}
            >
              <img src={caseIcon} alt="" />
              <button className="close-button" onClick={closeCase}>
                <img src={close} alt="" />
              </button>
              <GameCanvas
                caseRef={nodeRefCase}
                setGeneralSwipeHandlers={setGeneralSwipeHandlers}
              />
            </div>
          )}
        </Transition>
      )}
    </div>
  );
}
