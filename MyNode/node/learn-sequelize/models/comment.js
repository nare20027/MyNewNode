const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
	static init(sequelize) {
		return super.init({
			comment: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: true,
				defaultValue: Sequelize.NOWL,
			},
		}, {
		 sequelize,
		 timestamps: false,
		 modelName: 'Comment',
		 tableName: 'comments',
		 paranoid: false,
		 charset: 'utf8',
		 collate: 'utf8mb4_general_ci',
		});
	}
	// Uses 테이블과의 관계 정의 
	static associate(db) {
		db.Comment.belongsTo(db.User, { foreignKey: 'commenter', sourceKey: 'id' });
	}
};