import {routerUsers} from './users.controller';
import {UserCreationAttributes} from '../types/user.interface';
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
mockApp.use('/users', routerUsers);

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

const newUser: UserCreationAttributes = {
    login: 'autotests',
    password: 'password',
    age: 18,
    isDeleted: false
};
let newUserId: number;

test('should get users', async (done) => {
    await request(mockApp)
        .get('/users')
        .expect((res: Response) => {
            expect(res.body.length).toBeGreaterThan(0);
        });
    done();
});

test('should add a user', async(done) => {
    await request(mockApp)
        .post('/users')
        .send(newUser)
        .expect((res: Response) => {
            expect(res.body.id).toBeTruthy();
            newUserId = res.body.id;
        });
    done();
});

test('should get a particular user', async(done) => {
    await request(mockApp)
        .get(`/users/${newUserId}`)
        .expect((res: Response) => {
            expect(res.body.login).toBe(newUser.login);
            expect(res.body.password).toBe(newUser.password);
            expect(res.body.age).toBe(newUser.age);
        });
    done();
});

test('should delete a particular user', async(done) => {
    await request(mockApp)
        .delete(`/users/${newUserId}`)
        .expect((res: Response) => {
            expect(res.body.isDeleted).toBe(true);
        });
    done();
});
