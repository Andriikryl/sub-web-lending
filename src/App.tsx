import "./App.css";
import Buy from "./components/buy/Buy";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Questions from "./components/questions/Questions";
import Types from "./components/types/Types";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Buy />
      <Types />
      <Info />
      <Questions />
    </main>
  );
}

export default App;
