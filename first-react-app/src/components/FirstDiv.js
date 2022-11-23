import "./Styles.css";
import { OpenForm, CloseForm } from "../helpers/Form";

import figure from "../pics/figure.png";

const FirstDiv = () => {
  return (
    <div className="container-fluid firstMain">
      <div className="phone">
        <div className="button-circle"></div>
        <div className="figure-container">
          <img className="figure-me" src={figure} />
        </div>
      </div>
      <div className="phone-second">
        <div className="button-circle"></div>
        <div className="figure-container-second">
          <div className="glow">
            <div className="letters">
              H E Y !<br />H E Y !<br />H E Y !
            </div>
          </div>
        </div>
      </div>
      <div className="phone-third">
        <div className="button-circle" onClick={OpenForm}></div>
        <div className="figure-container-third">
          <p className="name">NAME</p>
          <p className="belle">Belle</p>
          <p className="pelanio">PELANIO</p>
          <p className="contacts">CONTACTS</p>
          <p className="mail">
            <a
              className="gmail"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S-2063361917%3A1668125949824926&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osclassName=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAuzfDeD4AUrjMcm3V_am1Nz_XKlJgB5NbcV27j3hoB4Bt9gqBqJac4jrOnBQ8GbP0496HNSpg">
              bellerustian.pelanio@g.msuiit.edu.ph
            </a>
          </p>
          <p className="number">+63 908 393 7237</p>
          <p className="address">ADDRESS</p>
          <p className="add">
            A. Bonifacio Avenue, Tibanga Internal Rd, 9200 Iligan City
          </p>
          <div className="chat-popup myForm">
            <form className="form-container">
              <h1>Chat</h1>
              <label for="msg">
                <b>Message</b>
              </label>
              <textarea
                placeholder="Type message.."
                name="msg"
                required></textarea>

              <button type="submit" className="btn send">
                Send
              </button>
              <button type="button" className="btn cancel" onClick={CloseForm}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="phone-fourth">
        <div className="button-circle"></div>
        <div className="figure-container-fourth">
          <p className="education">EDUCATION</p>
          <p className="college">
            MINDANAO STATE UNIVERSITY - ILIGAN INSTITUTE OF TECHNOLOGY
          </p>
          <p className="date1">August 2019-current</p>
          <p className="program1">BSME</p>
          <p className="high">SURIGAO DEL NORTE STATE UNIVERSITY</p>
          <p className="date2">August 2017-2019</p>
          <p className="program2">STEM</p>
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
