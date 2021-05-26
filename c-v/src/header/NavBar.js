import React,{useState} from "react";
import "./NavBar.css";

const NavBar = () => {
  let [data, setData] =useState(new Date())
  let h = data.getHours();
  let m = data.getMinutes();
  setInterval(()=> {
    setData(new Date())
  }, 1000)

  let ZH = h >= 10 ? h : "0" + h
  let ZM = m >= 10 ? m : "0" + m



  return (
    <div className="wrapper">
      <div class="wrapper__clock">
        {ZH +": " + ZM  }
      </div>

      <div class="wrapper__block">
        <span class="wrapper__item">Main</span>
        <span class="wrapper__item">About Me</span>
        <span class="wrapper__item">Projects</span>
        <span class="wrapper__item">Education</span>
        <span class="wrapper__item">Contacts</span>
      </div>
    </div>
  );
};

export default NavBar;
