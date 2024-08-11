const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
	static init(sequelize) {
		return super.init({ //table.colume 설정
			name: {
				type: Sequelize.STRING(20),
				allowNull: false,
				unique: true,
			},
			age: {
				type: Sequelize.INTEGER.UNSIGNED,
				allowNull: false,
			},
			married: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			comment: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
		}, { //table 설정 
		 sequelize, //model.index 연결 
		 timestamps: false, //true일 때 자동으로 createdAt와 updatedAt 컬럼을 추가해줌 
		 underscored: false,
		 modelName: 'User',
		 tableName: 'Users',
		 paranoid: false,
		 /*
			한글 입력을 위한 설정
			이모티콘까지 입력하기 위해서는 가각 utf8mb4, utf8mb4_general_ci 를 입력해야 함 
		 */
		 charset: 'utf8',
		 collate: 'utf8_general_ci',
		});
	}
	//comment 테이블과의 관계 정의 1 : N
	static associate(db) {
		db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id'});
	}
};