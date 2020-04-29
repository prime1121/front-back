import React, { Component } from "react";
import { Link } from "react-router-dom";

class PopupProfile extends Component {
  render() {
    return (
      <body>
        <div
          className="popup"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20%",
            width: "60%",
            border: "1px solid black",
            padding: "10px",
            backgroundColor: "coral",
          }}
        >
          <p>
            Thank you for participating. You now have{" "}
            <b>
              <span>{this.props.pntsEarned}</span>
            </b>{" "}
            Goodpoints.
          </p>
          <div className="col s6" style={{ marginInlineStart: "30%" }}>
            <Link
              to="/profile"
              style={{
                width: "100px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                padding: "3px 8px",
                backgroundColor: "blue",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Continue
            </Link>
            {"    "}
            <Link
              to="/"
              style={{
                width: "100px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                padding: "3px 8px",
                backgroundColor: "blue",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Log Out
            </Link>
          </div>
        </div>
      </body>
    );
  }
}

export default PopupProfile;
