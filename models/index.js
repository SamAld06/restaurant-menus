const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)

Menu.belongsToMany(Item)
Item.belongsToMany(Menu)
module.exports = { Restaurant, Menu }
