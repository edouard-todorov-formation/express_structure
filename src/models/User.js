"use.strict"

const  {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class User extends Model {
        static associate(models) {
            //definir des relations
        }
    }

    User.init(
        {
            email: {
                type: DataTypes.STRING(155),
                allowNull: false,
                unique: true, //!!!! obligatoire pour l'identifaint de connexion
                validate:{
                    isEmail: true // !!!! verification du format d'email
                }
            },
            password_hash: {
                type: DataTypes.STRING(300),
                allowNull: false
            },
            role: {
                type: DataTypes.ENUM("user", "admin"),
                defautValue: ("user")
            }
        },{
            sequelize,
                sequelize,
                modelName: "User", //le nom du model en javascript
                tableName: "user", //le nom de la table en db
                underscored: true, // snake case => kamelcase
                timestamps: true, // gestion du created at et updated automatiquement
                createdAt: "created_at",
                updatedAt: "updated_at",
        }
    );
    return User;
}
