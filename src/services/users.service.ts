import {Op} from 'sequelize';
import {User} from '../data-models/user.model-definition';
import {UserAttributes, UserCreationAttributes, UserInstance} from '../types/user.interface';
import {Group} from '../data-models/group.model-definition';

export class UserService {

    public async getUserById(id: string): Promise<UserInstance | null> {
        return User.findByPk(id);
    }

    public async getAllUsers(limit?: number): Promise<UserInstance[]> {
        return User.findAll({
            where: {isDeleted: false},
            order: [['login', 'ASC']],
            limit: limit
        })
    }

    public async findUsersByLogin(loginSubstring: string, limit?: number): Promise<UserInstance[]> {
        return User.findAll({
            where: {isDeleted: false, login: {[Op.like]: `%${loginSubstring}%`}},
            order: [['login', 'ASC']],
            limit: limit
        })
    }

    public async addUser(newUser: UserCreationAttributes): Promise<UserInstance> {
        return User.create(newUser);
    }

    public async updateUser(targetUser: UserInstance, user: Partial<UserAttributes>): Promise<void> {
        await User.update({...user}, {where: {id: targetUser.id}});
    }

    public async deleteUser(id: string): Promise<void> {
        await User.update({isDeleted: true}, {where: {id}});
    }

    public async getUserWithGroup(id: string): Promise<any> {
        return User.findByPk(id, {include: {model: Group, attributes: ['id', 'name', 'permissions'], through: {attributes: []}}})
    }

    public async findUserByCreds(login: string, password: string): Promise<UserInstance | null> {
        return User.findOne({where: {login: login, password: password}});
    }
}
