import React, { Component } from "react";
import "./home.css";
import { BsList } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { FaFacebookMessenger } from "react-icons/fa"


class home extends Component {
  render() {
    return (
      <div className="contain">
        <h1>A.G.I Infotech </h1>

        
        <Dropdown>
          <Dropdown.Toggle>
            {" "}
            <BsList />{" "} 
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/home">Home</Dropdown.Item>
            <Dropdown.Item href="/front">Index</Dropdown.Item>
            <Dropdown.Item href="#/action-3">About Us</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Our Services</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Tools Used</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="Content">
          <div className="content1">
            Pseudo <br />
            Descriptive Of Company................
          </div>
          <div className="content2">
            Pseudo Descriptive <br />
            Of Company................
          </div>
          <div className="content3">
            Pseudo Descriptive <br />
            Of Company................
          </div>
        </div>
        <div className="endcontain">
            <FaFacebookMessenger />
        </div>
      </div>
    );
  }
}
export default home;
