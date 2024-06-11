import one from '../../Assets/svg/projects/one.svg'
import two from '../../Assets/svg/projects/two.svg'
import ten from '../../Assets/svg/projects/ten.svg'
import twelve from  '../../Assets/svg/projects/twelve.svg'



const projectData = [
  {
    id: 1,
    name: "E Commerce",
    desc: "This is a description of project one.",
    tags: ["React", "CSS"],
    code: "https://github.com/username/project-one",
    demo: "https://username.github.io/project-one",
    image: one // Ensure this path is correct
  },
  {
    id: 2,
    name: "Cars Application",
    desc: "This is a description of project two.",
    tags: ["JavaScript", "HTML"],
    code: "https://github.com/username/project-two",
    demo: "https://username.github.io/project-two",
    image: two // Ensure this path is correct
  },
  {
    id: 3,
    name: "Employee Managment",
    desc: "This is a description of project two.",
    tags: ["JavaScript", "HTML"],
    code: "https://github.com/username/project-two",
    demo: "https://username.github.io/project-two",
    image: twelve // Ensure this path is correct
  },
  {
    id: 4,
    name: "Weather App",
    desc: "This is a description of project two.",
    tags: ["JavaScript", "HTML"],
    code: "https://github.com/username/project-two",
    demo: "https://username.github.io/project-two",
    image: ten // Ensure this path is correct
  }
  // Add more projects as needed
];

export default projectData;
