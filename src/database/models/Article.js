module.exports = (sequelize, dataTypes) => {
    const alias = 'Article'
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull:false
          },
          title: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          body:{
            type: dataTypes.TEXT,
            allowNull:false
          },
          description:{
            type: dataTypes.TEXT,
            allowNull:false
          },
          date:{
            type: dataTypes.CHAR(255),
            allowNull:false
          }
    }
    const config = {
        tableName: 'articles',
        timestamps: true,
        underscored: true
      };

    const Article = sequelize.define(alias, cols, config)

    Article.associate = function(models){
      Article.belongsTo(models.Category, {
          as: 'categories',
          foreignKey: 'category_id'
      })
    }

    return Article
}