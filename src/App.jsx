
import Test from "./Test";
import "./app.scss"
import Moy from "./components/Moy/Moy";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Letter from "./components/Letter/Letter";
import Sidebar from "./components/sidebar/Sidebar";
import Gallery from "./components/Gallery/Gallery";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      
      <Navbar/>
      <Moy/>
    </section>
    <section id="About you"><Parallax/></section>
    <section><Letter/></section>
    <section id="Gallery"><Gallery/></section>

    {/* {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
