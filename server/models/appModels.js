const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')


  const Item = sequelize.define('Item', {
    item_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    item_name: DataTypes.STRING,
    item_type: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  })

  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    order_date: DataTypes.TIME,
    total: DataTypes.DECIMAL,
    status: DataTypes.STRING,
  })

  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    user_name: DataTypes.STRING,
    phone: DataTypes.TEXT
  })

  const Order_Item = sequelize.define('Order_Item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    requests: DataTypes.TEXT
  })


Order.hasMany(Order_Item, { foreignKey: 'order_id' });
Order_Item.belongsTo(Order, { foreignKey: 'order_id' });

Item.hasMany(Order_Item, { foreignKey: 'item_id' });
Order_Item.belongsTo(Item, { foreignKey: 'item_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

module.exports= {Item, Order, User, Order_Item}