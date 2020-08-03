import {UserI} from '../data-models/user.interface';

export class UserService {

    private users: Array<UserI> = [
        {
            "id": 0,
            "login": "Tammi_Neal",
            "password": "password",
            "age": 34,
            "isDeleted": false
        },
        {
            "id": 1,
            "login": "Amber_Fuller",
            "password": "password",
            "age": 17,
            "isDeleted": false
        },
        {
            "id": 2,
            "login": "Iris_Duncan",
            "password": "password",
            "age": 66,
            "isDeleted": false
        },
        {
            "id": 3,
            "login": "Liliana_Olsen",
            "password": "password",
            "age": 21,
            "isDeleted": false
        },
        {
            "id": 4,
            "login": "Fern_Tucker",
            "password": "password",
            "age": 29,
            "isDeleted": false
        },
        {
            "id": 5,
            "login": "Nguyen_Holland",
            "password": "password",
            "age": 16,
            "isDeleted": false
        },
        {
            "id": 6,
            "login": "Nunez_Forbes",
            "password": "password",
            "age": 43,
            "isDeleted": false
        },
        {
            "id": 7,
            "login": "Perkins_Potts",
            "password": "password",
            "age": 69,
            "isDeleted": false
        },
        {
            "id": 8,
            "login": "Holland_Bolton",
            "password": "password",
            "age": 28,
            "isDeleted": false
        },
        {
            "id": 9,
            "login": "Ina_Buckley",
            "password": "password",
            "age": 34,
            "isDeleted": false
        },
        {
            "id": 10,
            "login": "Buckner_Henson",
            "password": "password",
            "age": 16,
            "isDeleted": false
        },
        {
            "id": 11,
            "login": "Mclaughlin_French",
            "password": "password",
            "age": 57,
            "isDeleted": false
        },
        {
            "id": 12,
            "login": "Rice_Garner",
            "password": "password",
            "age": 35,
            "isDeleted": false
        },
        {
            "id": 13,
            "login": "Tommie_Nieves",
            "password": "password",
            "age": 24,
            "isDeleted": false
        },
        {
            "id": 14,
            "login": "Rose_Doyle",
            "password": "password",
            "age": 19,
            "isDeleted": false
        },
        {
            "id": 15,
            "login": "Strickland_Petersen",
            "password": "password",
            "age": 55,
            "isDeleted": false
        },
        {
            "id": 16,
            "login": "Kristine_Willis",
            "password": "password",
            "age": 37,
            "isDeleted": false
        },
        {
            "id": 17,
            "login": "Mccarty_Todd",
            "password": "password",
            "age": 60,
            "isDeleted": false
        },
        {
            "id": 18,
            "login": "Caitlin_Mooney",
            "password": "password",
            "age": 73,
            "isDeleted": false
        },
        {
            "id": 19,
            "login": "Reed_Le",
            "password": "password",
            "age": 56,
            "isDeleted": false
        },
        {
            "id": 20,
            "login": "Riggs_Phillips",
            "password": "password",
            "age": 30,
            "isDeleted": false
        },
        {
            "id": 21,
            "login": "Cleveland_Estrada",
            "password": "password",
            "age": 76,
            "isDeleted": false
        },
        {
            "id": 22,
            "login": "Dominguez_Dalton",
            "password": "password",
            "age": 55,
            "isDeleted": false
        },
        {
            "id": 23,
            "login": "Melba_Mullins",
            "password": "password",
            "age": 73,
            "isDeleted": false
        },
        {
            "id": 24,
            "login": "Noreen_Mayo",
            "password": "password",
            "age": 57,
            "isDeleted": false
        },
        {
            "id": 25,
            "login": "Becky_Velasquez",
            "password": "password",
            "age": 23,
            "isDeleted": false
        },
        {
            "id": 26,
            "login": "Ellison_Odonnell",
            "password": "password",
            "age": 17,
            "isDeleted": false
        },
        {
            "id": 27,
            "login": "Roberson_Webb",
            "password": "password",
            "age": 16,
            "isDeleted": false
        },
        {
            "id": 28,
            "login": "Felicia_Hubbard",
            "password": "password",
            "age": 58,
            "isDeleted": false
        },
        {
            "id": 29,
            "login": "Stafford_Riley",
            "password": "password",
            "age": 17,
            "isDeleted": false
        },
        {
            "id": 30,
            "login": "Salinas_Cortez",
            "password": "password",
            "age": 70,
            "isDeleted": false
        },
        {
            "id": 31,
            "login": "Susie_Dodson",
            "password": "password",
            "age": 22,
            "isDeleted": false
        },
        {
            "id": 32,
            "login": "Kerry_Flynn",
            "password": "password",
            "age": 44,
            "isDeleted": false
        },
        {
            "id": 33,
            "login": "Charlotte_Palmer",
            "password": "password",
            "age": 51,
            "isDeleted": false
        },
        {
            "id": 34,
            "login": "Suarez_Johnson",
            "password": "password",
            "age": 28,
            "isDeleted": false
        },
        {
            "id": 35,
            "login": "Kinney_Stanton",
            "password": "password",
            "age": 77,
            "isDeleted": false
        },
        {
            "id": 36,
            "login": "Rosemary_Rosales",
            "password": "password",
            "age": 64,
            "isDeleted": false
        },
        {
            "id": 37,
            "login": "Kenya_Lloyd",
            "password": "password",
            "age": 69,
            "isDeleted": false
        },
        {
            "id": 38,
            "login": "Salazar_Wong",
            "password": "password",
            "age": 26,
            "isDeleted": false
        },
        {
            "id": 39,
            "login": "Ayers_Bernard",
            "password": "password",
            "age": 37,
            "isDeleted": false
        },
        {
            "id": 40,
            "login": "Janet_Avila",
            "password": "password",
            "age": 79,
            "isDeleted": false
        },
        {
            "id": 41,
            "login": "Gracie_Hodges",
            "password": "password",
            "age": 77,
            "isDeleted": false
        },
        {
            "id": 42,
            "login": "Hamilton_Kelley",
            "password": "password",
            "age": 43,
            "isDeleted": false
        },
        {
            "id": 43,
            "login": "Nikki_Lawrence",
            "password": "password",
            "age": 70,
            "isDeleted": false
        },
        {
            "id": 44,
            "login": "Stacey_Abbott",
            "password": "password",
            "age": 37,
            "isDeleted": false
        },
        {
            "id": 45,
            "login": "Christina_Dixon",
            "password": "password",
            "age": 68,
            "isDeleted": false
        },
        {
            "id": 46,
            "login": "Nixon_Mcgowan",
            "password": "password",
            "age": 42,
            "isDeleted": false
        },
        {
            "id": 47,
            "login": "William_Dudley",
            "password": "password",
            "age": 71,
            "isDeleted": false
        },
        {
            "id": 48,
            "login": "Michelle_Hendricks",
            "password": "password",
            "age": 33,
            "isDeleted": false
        },
        {
            "id": 49,
            "login": "Carrillo_Sargent",
            "password": "password",
            "age": 52,
            "isDeleted": false
        }
    ];

    public getUserById(id: string): UserI | undefined {
        return this.users.find((user: UserI) => user.id.toString() === id);
    }

    public getAllUsers(): Array<UserI> {
        return this.users
            .filter((user: UserI) => !user.isDeleted)
            .sort((a: UserI, b: UserI) => a.login > b.login ? 1 : -1);
    }

    public findUsersByLogin(loginSubstring: string): Array<UserI> {
        return this.getAllUsers().filter((user: UserI) => user.login.includes(loginSubstring))
    }

    public addUser(newUser: Omit<UserI, 'id'>): UserI {
        const newId = this.users.length;
        const user = {...newUser, id: newId};
        this.users.push(user);
        return user;
    }

    public updateUser(targetUser: UserI, newValues: Partial<UserI>, ): UserI {
        return Object.assign(targetUser, newValues);
    }

    public deleteUser(user: UserI): void {
        user.isDeleted = true;
    }
}
