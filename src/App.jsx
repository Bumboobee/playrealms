import Hero from "./components/hero";
import About from "./components/about";
import Navbar from "./components/navbar";
import Features from "./components/features";
import Story from "./components/story";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
};
export default App;
