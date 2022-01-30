const express = require("express");
const app = express();
const path = require("path")
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes/'))
app.use(express.static(path.join(__dirname, 'public')))


sequelize.sync({ force: false }).then(() => {
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on PORT ${PORT}`);
})
});
