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
        Points:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Imageurl:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RlT-ytB9A_TQFLKMqVYpdJiiRbckTCThmw&usqp=CAU",
        },

        teamColor:{
            type:DataTypes.STRING,
            allowNull:false,
        }


       
       

        
   
    });
 
    

    return Drivers;
};