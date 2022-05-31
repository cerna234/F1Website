// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Drivers = sequelize.define("Drivers", {
        Name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Team:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        Number:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nationality:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DriverRank:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Imageurl:{
            type:DataTypes.STRING,
            allowNull:false,
        }

       
       

        
   
    });
 
    

    return Drivers;
};