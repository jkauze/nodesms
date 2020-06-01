const mongoose = require('mongoose');

// module.exports = {
//     url: 'mongodb://localhost:27017/your_database_name',
//     user: 'username',
//     pwd: 'password'
// }

mongoose.connect('mongodb://localhost:27018/smsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(db => console.log("DB connected"))
.catch(err => console.log(err))