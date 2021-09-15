import React, { useEffect, useState } from "react";


import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import "./Main.css";
const Main = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
  const videoSource="../Videos/NSSEVENT.mp4"
  return (
    <div className="App">
      <Header data={resumeData.main} x={1} />
      <About data={resumeData.main} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
      
    </div>
  );
};

export default Main;
