import { Router } from 'express';
import User from './app/models/User'

import UserController from './app/controllers/UserController'

const routes = new Router();

routes.post('/users', UserController.store)

routes.get('/', async (req, res) => {
    const user = await User.create({
        name:"J433ho4nat67an Grymuza",
        email:"jhon45y567zatta2n32@hotmail.com",
        password_hash:'123673544256'
    })
    return res.json(user);
});
export default routes;
