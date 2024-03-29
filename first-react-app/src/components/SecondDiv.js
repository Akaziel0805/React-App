import "./Styles.css";
import josh from "../pics/josh.jpg";
import eye from "../pics/eye.jpg";
import Jinx from "../pics/Jinx.jpg";
import { OpenPopUp, ClosePopUp } from "../helpers/PopUp";

const SecondDiv = () => {
  const slideContainer = document.querySelectorAll(".slider");
  for (let i = 0; i < slideContainer.length; i++) {
    console.log(slideContainer.length);
    const slider = function () {
      const slides = slideContainer[i].querySelectorAll(".slide");
      const btnLeft = slideContainer[i].querySelector(".slider__btn--left");
      const btnRight = slideContainer[i].querySelector(".slider__btn--right");
      const dotContainer = slideContainer[i].querySelector(".dots");

      let curSlide = 0;
      const maxSlide = slides.length;

      const createDots = function () {
        slides.forEach(function (_, i) {
          dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };

      const activateDot = function (slide) {
        slideContainer[i]
          .querySelectorAll(".dots__dot")
          .forEach((dot) => dot.classList.remove("dots__dot--active"));

        slideContainer[i]
          .querySelector(`.dots__dot[data-slide="${slide}"]`)
          .classList.add("dots__dot--active");
      };

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      };

      const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
      };
      init();

      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
      });

      dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    };
    slider();
  }

  return (
    <div className="div-second secondMain">
      <div className="popup openpop">
        <div className="popUpJinx">
          <p>
            While most look at Jinx and see only a mad woman wielding an array
            of dangerous weapons, a few remember her as a relatively innocent
            girl from Zaun—a tinkerer with big ideas who never quite fit in. No
            one knows for certain what happened to turn that sweet young child
            into a wildcard, infamous for her wanton acts of destruction. But
            once Jinx exploded onto the scene in Piltover, her unique talent for
            sowing anarchy instantly became the stuff of legend.
          </p>
          <img className="img-popup" src={Jinx} />
        </div>
        <a href="javascript:void(0)" className="closebtn" onClick={ClosePopUp}>
          &times;
        </a>
      </div>

      <div className="div-context">
        <p className="context">P O R T F O L I O</p>
      </div>
      <div className="slider">
        <div className="slide">
          <img className="img1" src={josh} />
        </div>

        <div className="slide">
          <img className="img2" src={eye} />
        </div>

        <div className="slide" onClick={OpenPopUp}>
          <img className="img img3" src={Jinx} />
        </div>

        <div className="slide"></div>
        <div className="slider__btn slider__btn--left">&nbsp;&#8249;</div>
        <div className="slider__btn slider__btn--right">&nbsp;&#8250;</div>
        <div className="dots"></div>
      </div>
      <div className="skills">
        <div className="loc">
          <div className="circle">
            <ion-icon className="icon" name="logo-css3"></ion-icon>
          </div>
          <div className="circle">
            <ion-icon className="icon" name="logo-html5"></ion-icon>
          </div>
          <div className="circle">
            <ion-icon className="icon" name="logo-javascript"></ion-icon>
          </div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
