import Home from '../home';
import CreateEvent from '../createEvent';
import Event from '../event';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/create',
        component: CreateEvent
    },
    {
        path: '/event',
        component: Event,
    }
];

export default routes;
