const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', '', {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};