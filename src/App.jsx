import {
  Navbar,
  Hero,
  About,
  Organizers,
  Speakers,
  Registration,
  Contact,
} from "./components";

function App() {
  return (
    <div className="flex flex-col m-0 p-0">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Organizers />
      <Speakers />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
