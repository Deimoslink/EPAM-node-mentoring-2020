import express, {NextFunction, Request, Response, Router} from 'express';
import {createValidator} from 'express-joi-validation';
import {UserService} from '../services/users.service';
import {checkRefreshToken, generateAccessToken, generateRefreshToken} from '../tokens';
import {authBodySchema} from '../controller-validators/auth.schemas';

export const routerAuth: Router = express.Router();

const validator = createValidator();
const userService: UserService = new UserService();

routerAuth.post('/auth', validator.body(authBodySchema), async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.findUserByCreds(req.body.login, req.body.password);
    if (user) {
        res.status(200).json({
            "access-token": generateAccessToken({id: user.id, login: user.login}),
            "refresh-token": generateRefreshToken({id: user.id, login: user.login})
        });
    } else {
        res.status(403).json({status: 'failed', errors: 'Incorrect login or password'});
    }
});

routerAuth.post('/refresh-token', checkRefreshToken, async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.payload;
    res.status(200).json({
        "access-token": generateAccessToken({id: user.id, login: user.login}),
        "refresh-token": generateRefreshToken({id: user.id, login: user.login})
    });
});
