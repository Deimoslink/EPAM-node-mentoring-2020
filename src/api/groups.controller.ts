import express, {NextFunction, Request, Response, Router} from 'express';
import {GroupsService} from '../services/groups.service';
import {GroupInstance} from '../types/group.interface';
import {createValidator} from 'express-joi-validation';
import {addUsersToGroupBodySchema} from '../controller-validators/groups.schemas';

export const routerGroups: Router = express.Router();

const validator = createValidator();
const groupsService: GroupsService = new GroupsService();


routerGroups.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const data: GroupInstance[] = await groupsService.getAllGroups();
    res.status(200).json(data);
});

routerGroups.get('/:groupId', async (req: Request, res: Response, next: NextFunction) => {
    const data = await groupsService.getGroupById(req.params.groupId);
    res.status(200).json(data);
});

routerGroups.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const data = await groupsService.addGroup(req.body).catch(e => next(e));
    res.status(200).json(data);
});

routerGroups.post('/:groupId/add-users', validator.body(addUsersToGroupBodySchema), async (req: Request, res: Response, next: NextFunction) => {
    await groupsService.addUsersToGroup(parseInt(req.params.groupId), req.body.userIds).catch(e => next(e));
    res.status(200).json();
});

routerGroups.patch('/:groupId', async (req: Request, res: Response, next: NextFunction) => {
    const targetGroup = await groupsService.getGroupById(req.params.groupId);
    if (targetGroup) {
        await groupsService.updateGroup(targetGroup, req.body).catch(e => next(e));
        const data = await groupsService.getGroupById(req.params.groupId);
        res.status(200).json(data);
    } else {
        const error = new Error('Not found');
        next(error);
    }
});

routerGroups.delete('/:groupId', async (req: Request, res: Response, next: NextFunction) => {
    const targetGroup = await groupsService.getGroupById(req.params.groupId);
    if (targetGroup) {
        await groupsService.deleteGroup(targetGroup).catch(e => next(e));
        await groupsService.getGroupById(req.params.groupId);
        res.status(200).json();
    } else {
        const error = new Error('Not found');
        next(error);
    }
});

