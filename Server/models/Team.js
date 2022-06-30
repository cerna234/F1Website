// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        teamName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamColor:{
            type:DataTypes.STRING,
            allowNull:false
        },
        teamLogo:{
            type:DataTypes.STRING,
            allowNull:false
        },

        teamCountry:{
            type:DataTypes.STRING,
            allowNull:false
        },
        founded:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
        
    
       
        

    },{
        timestamps: false
    });
 

    Team.associate = (models) => {
        Team.hasMany(models.Drivers);
        models.Drivers.belongsTo(Team);
    }

    

    return Team;
};