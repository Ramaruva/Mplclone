import "./App.css";
import { FruitDartGame } from "./components/FruitDartGame";
import MplTop from "./components/MplTop/MplTop";
import Footer from "./footer/Footer";

function App() {
	return (
		<div className="App">
			<FruitDartGame />
      <Footer/>
      <MplTop/>
      
		</div>
	);
}

export default App;
