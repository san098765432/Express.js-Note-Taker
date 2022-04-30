const express = require ('express') 
const homeRoutes = require ('./routes/homeroutes')
const apiRoutes = require ('./routes/apiroutes')
const { process_params } = require('express/lib/router')

const PORT = process.env.PORT || 8080 
const app = express()   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(homeRoutes);

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`)); 

