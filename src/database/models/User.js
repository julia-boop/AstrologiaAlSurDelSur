module.exports = (sequelize, dataTypes) => {
    const alias = 'User'
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          email: {
            type: dataTypes.STRING(150),
            allowNull: false,
            unique: true
          },
          password: {
            type: dataTypes.STRING(150),
            allowNull: false
          },
          name:{
            type: dataTypes.STRING(100)
          },
          last_name:{
            type: dataTypes.STRING(100)
          },
          role:{
              type: dataTypes.INTEGER(10).UNSIGNED
          }
    }
    const config = {
        tableName: 'users',
        timestamps: true,
        underscored: true
      };

    const User = sequelize.define(alias, cols, config)

    return User
}