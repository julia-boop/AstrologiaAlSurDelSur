module.exports = (sequelize, dataTypes) => {
    const alias = 'Category'
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(150),
            allowNull: false
          }
    }
    const config = {
        tableName: 'categories',
        timestamps: true,
        underscored: true
      };

    const Category = sequelize.define(alias, cols, config)

    return Category
}