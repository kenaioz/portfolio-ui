import {
  IoLogoReact,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiSqlite,
  SiStyledcomponents,
  SiFlask,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

export const techData = {
  frontend: [
    {
      name: "HTML",
      icon: IoLogoHtml5,
      backgroundColor: "#E44D26",
      status: "experience",
    },
    {
      name: "CSS",
      icon: IoLogoCss3,
      backgroundColor: "#1572B6",
      status: "experience",
    },
    {
      name: "Styled-Components",
      icon: SiStyledcomponents,
      backgroundColor: "#DB7093",
      status: "experience",
    },
    {
      name: "Tailwindcss",
      icon: SiTailwindcss,
      backgroundColor: "#38B2AC",
      status: "learning",
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
      backgroundColor: "#F0DB4F",
      status: "experience",
    },
    {
      name: "ReactJS",
      icon: IoLogoReact,
      backgroundColor: "#61DAFB",
      status: "experience",
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
      backgroundColor: "#3178C6",
      status: "learning",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: IoLogoNodejs,
      backgroundColor: "#8CC84B",
      status: "experience",
    },
    {
      name: "Python",
      icon: IoLogoPython,
      backgroundColor: "#306998",
      status: "experience",
    },
    {
      name: "MongoDB",
      icon: SiFlask,
      backgroundColor: "#000000",
      status: "experience",
    },
    {
      name: "Django",
      icon: SiDjango,
      backgroundColor: "#092E20",
      status: "want",
    },
    {
      name: "GoLang",
      icon: FaGolang,
      backgroundColor: "#00ADD8",
      status: "want",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: GrMysql,
      backgroundColor: "#4479A1",
      status: "experience",
    },
    {
      name: "SQLite",
      icon: SiSqlite,
      backgroundColor: "#003B57",
      status: "experience",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      backgroundColor: "#13AA52",
      status: "want",
    },
  ],
};
