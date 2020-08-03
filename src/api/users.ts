import express, {NextFunction, Request, Response, Router} from 'express';
import {createValidator} from 'express-joi-validation';
import {UserService} from '../services/users.service';
import {UserI} from '../data-models/user.interface';
import {createUserSchema, getUsersQuerySchema, updateUserSchema} from '../data-models/user.schemas';

export const routerUsers: Router = express.Router();

const validator = createValidator();
const userService: UserService = new UserService();


routerUsers.get('/', validator.query(getUsersQuerySchema), (req: Request, res: Response, next: NextFunction) => {
    let users: Array<UserI>;
    if (req.query.loginSubstring) {
        users = userService.findUsersByLogin(req.query.loginSubstring.toString())
    } else {
        users = userService.getAllUsers();
    }
    if (req.query.limit) {
        users = users.splice(0, parseInt(req.query.limit.toString()))
    }
    res.status(200).json(users);
});

routerUsers.get('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const user: UserI | undefined = userService.getUserById(req.params.userId);
    if (user) {
        res.status(200).json(user);
    } else {
        const error = new Error('User does not exist');
        next(error);
    }
});

routerUsers.post('/', validator.body(createUserSchema), (req: Request, res: Response, next: NextFunction) => {
    const user: UserI = userService.addUser(req.body);
    res.status(200).json(user);
});

routerUsers.patch('/:userId', validator.body(updateUserSchema), (req: Request, res: Response, next: NextFunction) => {
    const user: UserI | undefined = userService.getUserById(req.params.userId);
    if (user) {
        userService.updateUser(user, req.body);
        res.status(200).json(user);
    } else {
        const error = new Error('User does not exist');
        next(error);
    }
});

routerUsers.delete('/:userId', (req: Request, res: Response, next: NextFunction) => {
    const user: UserI | undefined = userService.getUserById(req.params.userId);
    if (user) {
        userService.deleteUser(user);
        res.status(200).json();
    } else {
        const error = new Error('User does not exist');
        next(error);
    }
});

