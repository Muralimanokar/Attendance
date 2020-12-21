module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    class: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    gender:{
      type:DataTypes.STRING
    }
  });
  return User;
};