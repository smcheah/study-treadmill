module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        reward: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        date: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
        },
    });

    Task.associate = function (models) {
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Task;
};
