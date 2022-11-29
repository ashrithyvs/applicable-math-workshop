import {
  Navbar,
  Hero,
  About,
  Organizers,
  Speakers,
  Registration,
  Contact,
  Committee,
} from "./components";

function App() {
  return (
    <div className="flex flex-col m-0 p-0">
      <Navbar />
      <Hero />
      <About />
      <Organizers />
      <Committee />
      <Speakers />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
