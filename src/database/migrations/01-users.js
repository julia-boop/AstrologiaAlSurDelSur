'use-strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                unique:true
              },
              email: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: false,
                unique: true
              },
              password: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: false
              },
              name:{
                type: Sequelize.DataTypes.STRING(100)
              },
              last_name:{
                type: Sequelize.DataTypes.STRING(100)
              },
              role:{
                  type: Sequelize.DataTypes.INTEGER(10).UNSIGNED
              },
            created_at: Sequelize.DataTypes.DATE,
            updated_at: Sequelize.DataTypes.DATE
        })
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
}