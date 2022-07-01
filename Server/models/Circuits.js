// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Circuits = sequelize.define("Circuits", {
        CircuitName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CircuitLocation:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CircuitIMG:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CircuitDate:{
            type: DataTypes.STRING,
            allowNull: false,
        }

       
        
    
       
        

    },{
        timestamps: false
    });
 
    

    return Circuits;
};