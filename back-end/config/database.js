const mongoose = require('mongoose');
require('dotenv').config();
// etablir la connection à la bd
const connectToDatabase = async () => {
    try {
/*         mongodb+srv://azerty1234:<password>@cluster0.iun5kdp.mongodb.net/?retryWrites=true&w=majority
 */        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }), 
        
        console.log('La connection à la BD est à été établie avec succès !!!');
        
    } catch (error) {
        console.error('Impossible de se connecter à la BDD', error);
    }

};

// etablir la deconnection
const disconnectFromDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('La déconnection à la BD est à été réussi !!!');
    } catch (error) {
        console.error('Impossible de se déconnecter de la BDD', error);
    }
};

const initDatabase = async () => {
    await connectToDatabase();
};

module.exports = { initDatabase, disconnectFromDB };