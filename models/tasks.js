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
            type: DataTypes.DATEONLY,
            defaultValue: sequelize.NOW
        },
        time: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
    });

    Task.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Task;
};
