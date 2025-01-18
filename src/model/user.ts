import { DataTypes, Model, Sequelize, UUID } from "sequelize";
import { v4 as uuidv4 } from "uuid";

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize,
    }
  );
  return User;
};
