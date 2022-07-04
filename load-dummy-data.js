const { sequelize } = require('./models/database');
const models = require('./models');


const createData = async() => {
    await models.User.create({
        name: 'Josh',
        cars: [{
            make: 'Ford', 
            model: 'F-150',
            color: 'Grey'
        }]
    },
    {
        include: [models.Car]
    })

    await models.User.create({
        name: 'Brooke',
        cars: [{
            make: 'Ford', 
            model: 'Edge',
            color: 'Red'
        }]
    },
    {
        include: [models.Car]
    })

    await models.User.create({
        name: 'Dave',
        cars: [{
            make: 'Honda', 
            model: 'Civic',
            color: 'Grey'
        }, {
            make: 'Honda', 
            model: 'Civic',
            color: 'Red'
        }]
    },
    {
        include: [models.Car]
    })

}

sequelize.sync({ force: true}).then(async() => {
    try {
        await createData();
        process.exit();
    }
    catch(error) {
        console.error(error);
    }
});