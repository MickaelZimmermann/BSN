import mongoose from 'mongoose';

const mongoUrl: string = process.env.MONGO_URL || 'mongodb://userdb:27017/demo';

mongoose.connect(mongoUrl);

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    services: {
        type: String,
        required: true,
    }
});


const Home = mongoose.model('Home', HomeSchema);

export default Home;