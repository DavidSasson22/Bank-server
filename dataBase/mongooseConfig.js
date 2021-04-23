const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://David_Sasson:qeri6zkd@bank-api.wofmo.mongodb.net/bankDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("database connect")
});