const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, defaultValue: 'active' }
}, { timestamps: false });

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`Server running on http://localhost:${PORT}`);
});
