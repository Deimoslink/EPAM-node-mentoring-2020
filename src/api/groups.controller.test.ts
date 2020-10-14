import {routerGroups} from './groups.controller';
import {Response} from 'supertest';
import express, {Application} from 'express';
import {sequelize} from '../data-access/db-connection';
import {User} from '../data-models/user.model-definition';
import {Group} from '../data-models/group.model-definition';
import {UserGroup} from '../data-models/user-group.model-definiton';
import * as bodyParser from 'body-parser';
import * as http from 'http';
const request = require('supertest');

const port = process.env.PORT || 3000;
const mockApp: Application = express();
let server: http.Server;
mockApp.use(bodyParser.json());
mockApp.use('/groups', routerGroups);

beforeAll(async () => {
    await sequelize.authenticate().then(async () => {
        await User.sync();
        await Group.sync();
        await UserGroup.sync();
        User.belongsToMany(Group, {through: UserGroup, foreignKey: 'userId'});
        Group.belongsToMany(User, {through: UserGroup, foreignKey: 'groupId'});
        server = await mockApp.listen(port);
    }).catch(err => console.log(err));
});

afterAll(async () => {
    await server.close();
});

test('should get groups', async (done) => {
    await request(mockApp)
        .get('/groups')
        .expect((res: Response) => {
            expect(res.body.length).toBeGreaterThan(0);
        });
    done();
});
