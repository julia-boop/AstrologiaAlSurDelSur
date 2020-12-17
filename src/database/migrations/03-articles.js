'use-strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('articles', {
            id: {
                type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true
              },
              category_id: {
                type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull:false,
                references: {
                    model: 'categories',
                    key: 'id'
                }
              },
              title: {
                type: Sequelize.DataTypes.STRING(150),
                allowNull: false
              },
              body:{
                type: Sequelize.DataTypes.TEXT,
                allowNull:false
              },
              description:{
                type: Sequelize.DataTypes.STRING(200),
                allowNull:false
              },
              date:{
                type: Sequelize.DataTypes.STRING(20),
                allowNull:false
              },
            created_at: Sequelize.DataTypes.DATE,
            updated_at: Sequelize.DataTypes.DATE
        })
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('articles');
    }
}