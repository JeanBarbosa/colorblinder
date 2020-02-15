import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Game from './pages/Game';

const routes = createAppContainer(
    createSwitchNavigator({
        Home: {
            screen: Home
        },
        Game: {
            screen: Game,
            navigationOptions: {
                gesturesEnabled: false,
            },
        }
    })
);

export default routes;