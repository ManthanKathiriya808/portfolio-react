import React from 'react'
import FuzzyText from '../fuzytext/FuzzyText'
import ChromaGrid from './projectCard/ChromaGrid ';



const Projects = () => {

 const items = [
  {
    image: "/ecomerce.png", // Image from public folder
    title: "Ecommerce App",
    subtitle: "React + Firebase + Redux",
    handle: "@ecommerce",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/Ecommerce-firebase-redux.git",
    liveUrl: "https://ecommerce-firebase-redux.vercel.app/"
  },
  {
    image: "/weather.png", // Image from public folder
    title: "Weather App",
    subtitle: "React + APi + Tailwind",
    handle: "@weather",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/final-weather-app.git",
    liveUrl: "https://final-weather-app-nu.vercel.app/"
  },
  {
    image: "/note.png", // Image from public folder
    title: "Note Keeper",
    subtitle: "Express + Node + Tailwind",
    handle: "@notekeeprer",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/note-keeper-backend.git",
    liveUrl: "https://note-keeper-backend.vercel.app/"
  },
  {
    image: "/movie.png", // Image from public folder
    title: "Ecommerce App",
    subtitle: "React + Firebase + Redux + TMDB APi",
    handle: "@movie",
      borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/react-test.git",
    liveUrl: "https://react-test-suu3.vercel.app/"
  },
  {
    image: "/book.png", // Image from public folder
    title: "BookBazzar",
    subtitle: "JavaScript + Bootstrap + UIverse + APi",
    handle: "@ecommerce",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/bookbazar-final.git",
    liveUrl: "https://bookbazar-final.vercel.app/"
  },
  {
    image: "/todo.png", // Image from public folder
    title: "Todo App",
    subtitle: "React + Tailwind",
    handle: "@todo",
       borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/final-todo-react.git",
    liveUrl: "https://final-todo-react.vercel.app/"
  },
  {
    image: "/expense.png", // Image from public folder
    title: "Expense Tracker",
    subtitle: "React + Tailwind + react-Chart + Api",
    handle: "@expense",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/expense-tracker.git",
    liveUrl: "https://expense-tracker-mu-azure.vercel.app/"
  },
  {
    image: "/admin.png",
    title: "Admin Table Website",
    subtitle: "Redux + React + Tailwind",
    handle: "@Admin",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    githubUrl: "https://github.com/ManthanKathiriya808/Admin-Table-Redux-tool-kit.git",
    liveUrl: "https://admin-table-redux-tool-kit.vercel.app/"
  }
];

  return (
    <div>
      <div>
         <div className='max-w-7xl  text-white mt-1 mx-auto  py-7'>
      <div className='title text-center pb-4 flex justify-center' >
        <FuzzyText
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  Projects.
</FuzzyText>
      </div>

      <div className='py-7 my-7 '>
     <div style={{  position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
    className=''
  />
</div>
      </div>


    </div>
    </div>
    </div>
  )
}

export default Projects
