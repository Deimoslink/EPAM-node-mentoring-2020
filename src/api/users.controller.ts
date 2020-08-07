import express, {NextFunction, Request, Response, Router} from 'express';
import {createValidator} from 'express-joi-validation';
import {UserService} from '../services/users.service';
import {getUsersQuerySchema} from '../controller-validators/users.schemas';
import {UserInstance} from '../types/user.interface';

export const routerUsers: Router = express.Router();

const validator = createValidator();
const userService: UserService = new UserService();


routerUsers.get('/', validator.query(getUsersQuerySchema), async (req: Request, res: Response, next: NextFunction) => {
    const limit = req.query.limit ? parseInt(req.query.limit.toString()) : undefined;
    let data: UserInstance[];
    if (req.query.loginSubstring) {
        data = await userService.findUsersByLogin(req.query.loginSubstring.toString(), limit);
    } else {
        data = await userService.getAllUsers(limit);
    }
    res.status(200).json(data);
});

routerUsers.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    const data = await userService.getUserById(req.params.userId);
    res.status(200).json(data);
});

routerUsers.get('/:userId/with-group', async (req: Request, res: Response, next: NextFunction) => {
    const data = await userService.getUserWithGroup(req.params.userId);
    res.status(200).json(data);
});

routerUsers.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const data = await userService.addUser(req.body).catch(e => next(e));
    res.status(200).json(data);
});

routerUsers.patch('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    const targetUser = await userService.getUserById(req.params.userId);
    if (targetUser) {
        await userService.updateUser(targetUser, req.body).catch(e => next(e));
        const data = await userService.getUserById(req.params.userId);
        res.status(200).json(data);
    } else {
        const error = new Error('Not found');
        next(error);
    }
});

routerUsers.delete('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    const targetUser = await userService.getUserById(req.params.userId);
    if (targetUser) {
        await userService.deleteUser(req.params.userId).catch(e => next(e));
        const data = await userService.getUserById(req.params.userId);
        res.status(200).json(data);
    } else {
        const error = new Error('Not found');
        next(error);
    }
});

