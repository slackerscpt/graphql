const { sequelize } = require('./database');

const UserModel = sequelize.import('./user');
//const UserModel = require('./user', sequelize);

const CarModel = sequelize.import('./car');
//const CarModel = require('./car', sequelize);

const models = {
    User: UserModel,
    Car: CarModel
}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]){
        models[key].associate(models)
    }
});
module.exports = models