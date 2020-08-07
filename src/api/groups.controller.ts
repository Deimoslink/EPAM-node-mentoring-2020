import express, {NextFunction, Request, Response, Router} from 'express';
import {GroupsService} from '../services/groups.service';
import {GroupInstance} from '../types/group.interface';

export const routerGroups: Router = express.Router();

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

