import "./Styles.css";
// import {
//   GoFirstDiv,
//   GoSecondDiv,
//   SwapPosOff,
//   SwapPosOn,
// } from "../helpers/GoDiv";

const Nav = () => {
  return (
    <div className="mySidenav sidenav">
      <div className="sidenav-a">
        <a className="nav-a" onClick={GoFirstDiv}>
          ABOUT
        </a>
        <a
          className="nav-a"
          onClick={() => {
            GoSecondDiv();
            SwapPosOff();
          }}>
          PORTFOLIO
        </a>
        <a
          className="nav-a"
          onClick={() => {
            GoSecondDiv();
            SwapPosOn();
          }}>
          SKILLS
        </a>
      </div>
      <div className="icons">
        <ul>
          <li>
            <a>
              <span>
                <ion-icon name="logo-facebook"></ion-icon>{" "}
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <ion-icon name="logo-linkedin"></ion-icon>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

function GoFirstDiv() {
  const firstMain = document.querySelector(".firstMain");

  firstMain.scrollIntoView({ behavior: "smooth" });
}

function GoSecondDiv() {
  const secondMain = document.querySelector(".secondMain");
  secondMain.scrollIntoView({ behavior: "smooth" });
}

function SwapPosOn() {
  document.querySelector(".div-context").style.opacity = 0;
  document.querySelector(".slider").style.opacity = 0;
  document.querySelector(".skills").style.opacity = 1;
}
function SwapPosOff() {
  document.querySelector(".div-context").style.opacity = 1;
  document.querySelector(".slider").style.opacity = 1;
  document.querySelector(".skills").style.opacity = 0;
}

export default Nav;
