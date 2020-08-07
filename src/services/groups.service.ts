import {GroupAttributes, GroupCreationAttributes, GroupInstance} from '../types/group.interface';
import {Group} from '../data-models/group.model-definition';


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
}
