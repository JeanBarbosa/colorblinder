import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';

const routes = createAppContainer(
    createSwitchNavigator({
        Home
    })
);

export default routes;