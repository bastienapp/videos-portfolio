import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";

function App() {
  const experiences = [
    {
      id: 1,
      date: "2017-2020",
      company: "Wild Code School",
      description: "Formateur Java et JavaScript",
      skills: ["Java", "Spring", "JavaScript", "React", "Node"],
      geoloc: { lat: 0.47, lon: 1.44 },
    },
    {
      id: 2,
      date: "2008-2017",
      company: "Planet Cards",
      description: "Développeur Web",
      skills: ["Android", "Objective-C"],
      geoloc: { lat: 0.45, lon: 1.43 },
    },
  ];

  return (
    <div className="App">
      <Header />
      {experiences.map((experience) => (
        <Experience key={experience.id} {...experience} />
      ))}
    </div>
  );
}

export default App;
