import {GroupAttributes, GroupCreationAttributes, GroupInstance} from '../types/group.interface';
import {Group} from '../data-models/group.model-definition';
import {UserGroup} from '../data-models/user-group.model-definiton';
import {sequelize} from '../data-access/db-connection';


export class GroupsService {

    public async getGroupById(id: string): Promise<GroupInstance | null> {
        return Group.findByPk(id);
    }

    public async getAllGroups(): Promise<GroupInstance[]> {
        return Group.findAll({
            order: [['name', 'ASC']],
        })
    }

    public async addGroup(newGroup: GroupCreationAttributes): Promise<GroupInstance> {
        return Group.create(newGroup);
    }

    public async updateGroup(targetGroup: GroupInstance, group: Partial<GroupAttributes>): Promise<void> {
        await Group.update({...group}, {where: {id: targetGroup.id}});
    }

    public async deleteGroup(targetGroup: GroupInstance): Promise<void> {
        await targetGroup.destroy();
    }

    public async addUsersToGroup(groupId: number, userIds: number[]): Promise<void> {
        const t = await sequelize.transaction();
        try {
            await UserGroup.destroy({ where: { groupId: groupId }, transaction: t});
            const userGroupRelations = userIds.map(userId => ({userId: userId, groupId: groupId}));
            await UserGroup.bulkCreate(userGroupRelations, {transaction: t});
            await t.commit();
        } catch (error) {
            await t.rollback();
            throw error;
        }
    }
}
