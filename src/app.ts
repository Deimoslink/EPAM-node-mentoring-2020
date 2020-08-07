import express, {Application, NextFunction, Request, Response} from 'express';
import {routerUsers} from './api/users.controller';
import morgan = require('morgan');
import * as bodyParser from 'body-parser';
import {sequelize} from './data-access/db-connection';
import {User} from './data-models/user.model-definition';
import {routerGroups} from './api/groups.controller';
import {Group} from './data-models/group.model-definition';
import {UserGroup} from './data-models/user-group.model-definiton';

const port = process.env.PORT || 3000;
const app: Application = express();


// Logger
app.use(morgan('dev'));

// Body parser
app.use(bodyParser.json());

// Routes
app.use('/users', routerUsers);
app.use('/groups', routerGroups);

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.json({
        error: {
            message: err.message
        }
    });
});

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });

sequelize.authenticate().then(() => {
    User.sync().then();
    Group.sync().then();
    UserGroup.sync().then();

    User.belongsToMany(Group, { through: UserGroup, foreignKey: 'userId' });
    Group.belongsToMany(User, { through: UserGroup, foreignKey: 'groupId' });

    app.listen(port, () => console.log(`server is running on port ${port}`));
}).catch(err => console.log(err));


