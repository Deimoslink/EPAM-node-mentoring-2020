import {sequelize} from '../data-access/db-connection';
import {User} from '../data-models/user.model-definition';

const defaultData = [
    {
        "login": "Tammi_Neal",
        "password": "password",
        "age": 34,
        "isDeleted": false
    },
    {
        "login": "Amber_Fuller",
        "password": "password",
        "age": 17,
        "isDeleted": false
    },
    {
        "login": "Iris_Duncan",
        "password": "password",
        "age": 66,
        "isDeleted": false
    },
    {
        "login": "Liliana_Olsen",
        "password": "password",
        "age": 21,
        "isDeleted": false
    },
    {
        "login": "Fern_Tucker",
        "password": "password",
        "age": 29,
        "isDeleted": false
    },
    {
        "login": "Nguyen_Holland",
        "password": "password",
        "age": 16,
        "isDeleted": false
    },
    {
        "login": "Nunez_Forbes",
        "password": "password",
        "age": 43,
        "isDeleted": false
    },
    {
        "login": "Perkins_Potts",
        "password": "password",
        "age": 69,
        "isDeleted": false
    },
    {
        "login": "Holland_Bolton",
        "password": "password",
        "age": 28,
        "isDeleted": false
    },
    {
        "login": "Ina_Buckley",
        "password": "password",
        "age": 34,
        "isDeleted": false
    },
    {
        "login": "Buckner_Henson",
        "password": "password",
        "age": 16,
        "isDeleted": false
    },
    {
        "login": "Mclaughlin_French",
        "password": "password",
        "age": 57,
        "isDeleted": false
    },
    {
        "login": "Rice_Garner",
        "password": "password",
        "age": 35,
        "isDeleted": false
    },
    {
        "login": "Tommie_Nieves",
        "password": "password",
        "age": 24,
        "isDeleted": false
    },
    {
        "login": "Rose_Doyle",
        "password": "password",
        "age": 19,
        "isDeleted": false
    },
    {
        "login": "Strickland_Petersen",
        "password": "password",
        "age": 55,
        "isDeleted": false
    },
    {
        "login": "Kristine_Willis",
        "password": "password",
        "age": 37,
        "isDeleted": false
    },
    {
        "login": "Mccarty_Todd",
        "password": "password",
        "age": 60,
        "isDeleted": false
    },
    {
        "login": "Caitlin_Mooney",
        "password": "password",
        "age": 73,
        "isDeleted": false
    },
    {
        "login": "Reed_Le",
        "password": "password",
        "age": 56,
        "isDeleted": false
    },
    {
        "login": "Riggs_Phillips",
        "password": "password",
        "age": 30,
        "isDeleted": false
    },
    {
        "login": "Cleveland_Estrada",
        "password": "password",
        "age": 76,
        "isDeleted": false
    },
    {
        "login": "Dominguez_Dalton",
        "password": "password",
        "age": 55,
        "isDeleted": false
    },
    {
        "login": "Melba_Mullins",
        "password": "password",
        "age": 73,
        "isDeleted": false
    },
    {
        "login": "Noreen_Mayo",
        "password": "password",
        "age": 57,
        "isDeleted": false
    },
    {
        "login": "Becky_Velasquez",
        "password": "password",
        "age": 23,
        "isDeleted": false
    },
    {
        "login": "Ellison_Odonnell",
        "password": "password",
        "age": 17,
        "isDeleted": false
    },
    {
        "login": "Roberson_Webb",
        "password": "password",
        "age": 16,
        "isDeleted": false
    },
    {
        "login": "Felicia_Hubbard",
        "password": "password",
        "age": 58,
        "isDeleted": false
    },
    {
        "login": "Stafford_Riley",
        "password": "password",
        "age": 17,
        "isDeleted": false
    },
    {
        "login": "Salinas_Cortez",
        "password": "password",
        "age": 70,
        "isDeleted": false
    },
    {
        "login": "Susie_Dodson",
        "password": "password",
        "age": 22,
        "isDeleted": false
    },
    {
        "login": "Kerry_Flynn",
        "password": "password",
        "age": 44,
        "isDeleted": false
    },
    {
        "login": "Charlotte_Palmer",
        "password": "password",
        "age": 51,
        "isDeleted": false
    },
    {
        "login": "Suarez_Johnson",
        "password": "password",
        "age": 28,
        "isDeleted": false
    },
    {
        "login": "Kinney_Stanton",
        "password": "password",
        "age": 77,
        "isDeleted": false
    },
    {
        "login": "Rosemary_Rosales",
        "password": "password",
        "age": 64,
        "isDeleted": false
    },
    {
        "login": "Kenya_Lloyd",
        "password": "password",
        "age": 69,
        "isDeleted": false
    },
    {
        "login": "Salazar_Wong",
        "password": "password",
        "age": 26,
        "isDeleted": false
    },
    {
        "login": "Ayers_Bernard",
        "password": "password",
        "age": 37,
        "isDeleted": false
    },
    {
        "login": "Janet_Avila",
        "password": "password",
        "age": 79,
        "isDeleted": false
    },
    {
        "login": "Gracie_Hodges",
        "password": "password",
        "age": 77,
        "isDeleted": false
    },
    {
        "login": "Hamilton_Kelley",
        "password": "password",
        "age": 43,
        "isDeleted": false
    },
    {
        "login": "Nikki_Lawrence",
        "password": "password",
        "age": 70,
        "isDeleted": false
    },
    {
        "login": "Stacey_Abbott",
        "password": "password",
        "age": 37,
        "isDeleted": false
    },
    {
        "login": "Christina_Dixon",
        "password": "password",
        "age": 68,
        "isDeleted": false
    },
    {
        "login": "Nixon_Mcgowan",
        "password": "password",
        "age": 42,
        "isDeleted": false
    },
    {
        "login": "William_Dudley",
        "password": "password",
        "age": 71,
        "isDeleted": false
    },
    {
        "login": "Michelle_Hendricks",
        "password": "password",
        "age": 33,
        "isDeleted": false
    },
    {
        "login": "Carrillo_Sargent",
        "password": "password",
        "age": 52,
        "isDeleted": false
    }
];

const populateUsers = async () => {
    await sequelize.authenticate();
    await User.sync({force: true});
    await User.bulkCreate(defaultData);
};

populateUsers().then(() => {
    console.info('Table with users was created and populated');
}).catch(err => console.log(err));
