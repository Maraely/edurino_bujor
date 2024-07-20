import {Route, Switch} from "wouter";
import MainPage from './MainPage/MainPage.jsx';
import GamePage from './GamePage/GamePage.jsx';
import RobinGamePage from './RobinGame/RobinGamePage.jsx';
import CongratulationPage from './CongratulationPage/CongratulationPage.jsx'
import './App.css';

function App() {
        return (
            <div className={'app'}>
                <Switch>
                    <Route path="/">
                        <MainPage />
                    </Route>

                    <Route path="/games">
                        <GamePage />
                    </Route>

                    <Route path="/game/robin">
                        <RobinGamePage />
                        </Route>

                    <Route path="/congratulations" >
                           <CongratulationPage />
                        </Route>

                </Switch>
            </div>
        );
    }



export default App
