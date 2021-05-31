import { Route, Switch } from "react-router";
import { FruitDartGame } from "../components/FruitDartGame";
import { Home } from "../components/Home/Home";
export const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/ludo">
					'/ludo'
				</Route>
				<Route exact path="/fruitslice">
					'/fruitslice'
				</Route>
				<Route exact path="/bubbleshooter">
					'/bubbleshooter'
				</Route>
				<Route exact path="/fruitchop">
					'/fruitchop'
				</Route>
				<Route exact path="/runnerno-1">
					/runnerno-1'
				</Route>
				<Route exact path="/speedchess">
					'/speedchess'
				</Route>
				<Route exact path="/fantasycricket">
					fantasycricket
				</Route>
				<Route exact path="/wcc2">
					wcc2
				</Route>
				<Route exact path="/rummy">
					rummy
				</Route>
				<Route exact path="/quiz">
					quiz
				</Route>
				<Route exact path="/monstertruck">
					monstertruck
				</Route>
				<Route exact path="/goride">
					goride
				</Route>
				<Route exact path="/callbreakgame">
					callbreakgame
				</Route>
				<Route exact path="/moregames">
					moregames
				</Route>
				<Route exact path="/carromgame">
					carromgame
				</Route>
				<Route exact path="/autorajagame">
					autorajagame
				</Route>
				<Route exact path="/fantasycricketapp">
					fantasycricketapp
				</Route>
				<Route exact path="/blog">
					blog
				</Route>
				<Route exact path="/refer-earn">
					refer&earn
				</Route>
				<Route exact path="/faqs">
					faqs
				</Route>
				<Route exact path="/Terms-conditions">
					Terms-conditions
				</Route>
				<Route exact path="/gamesofskills">
					gamesofskills
				</Route>
				<Route exact path="/privacypolicy">
					privacypolicy
				</Route>
				<Route exact path="/mplfairplay">
					mplfairplay
				</Route>
				<Route exact path="/College-premier-league">
					College-premier-league
				</Route>
				<Route exact path="/mplesports">
					mplesports
				</Route>
				<Route path="/fruit-dart-game">
					<FruitDartGame />
				</Route>
				<Route exact path="/Sudoku">
					Sudoku
				</Route>
			</Switch>
		</>
	);
};
