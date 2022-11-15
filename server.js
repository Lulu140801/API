const express = require('express');
const db = require('./models/index');
const app = express();
app.use(express.json());


app.use('/users', require('./routers/user'));


db.instance.sync({force: true}).then(() => {
    console.log('Database connected');

    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });
}).catch((e) => {
    console.error(e);
});