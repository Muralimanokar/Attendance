module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define("attendance", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    
  });
  return Attendance;
};