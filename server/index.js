const express = require('express')
const app = express()




const db = require('./models')

//console.log(db.sequelize); // It should not be undefined
db.sequelize.sync().then(   () => {

app.listen(3001, () => 
{
    console.log("Server is running on port 3001")

}
);

});

