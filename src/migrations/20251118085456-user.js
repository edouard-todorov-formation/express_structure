'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('user', { 
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false       
            },
            email: {
                type: Sequelize.STRING(155),
                allowNull: false,
                unique: true //!!!! obligatoire pour l'identifaint de connexion
            },
            password_hash: {
                type: Sequelize.STRING(300),
                allowNull: false
            },
            role: {
                type: Sequelize.ENUM("user", "admin"),
                defaultValue: ("user")
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('user');
  }
};
