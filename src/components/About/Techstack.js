import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPycharm,
  SiHeroku,
  SiPostman,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJira,
  SiOracle,
  SiJavascript
} from "react-icons/si";
import { FaJava, FaPython, FaAws, FaNode, FaNetworkWired } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import "./Techstack.css";

const techItems = [
  { icon: <SiLinux />, name: "Linux" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiJupyter />, name: "Jupyter" },
  { icon: <SiPycharm />, name: "PyCharm" },
  { icon: <SiHeroku />, name: "Heroku" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiBitbucket />, name: "Bitbucket" },
  { icon: <SiJira />, name: "Jira" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <IoLogoReact />, name: "React" },
  { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
  { icon: <SiOracle />, name: "Oracle" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaNetworkWired />, name: "Networks" }
];

function Techstack() {
  return (
    <div className="techstack">
      <div className="techstackHeader">
        <h3>My Tech Stack</h3>
      </div>
      <div className="techstackContainer">
        <div className="tech--scroll">
          {techItems.map((item, index) => (
            <div key={index} className="tech--box">
              {item.icon}
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techstack;
