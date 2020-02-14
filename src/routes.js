import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';

const routes = createAppContainer(
    createSwitchNavigator({
        Home: {
            screen: Home
          }
    })
);

export default routes;