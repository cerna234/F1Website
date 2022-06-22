// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Drivers = sequelize.define("Drivers", {
        Name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        podiums:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        BirthPlace:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Number:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Country:{
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
        Age:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },


        teamColor:{
            type:DataTypes.STRING,
            allowNull:false,
        },

        teamName:{
            type: DataTypes.STRING,
            allowNull:false
        }

    },{
        timestamps: false
    });
 
    

    return Drivers;
};