// Original Code from: https://mongoosejs.com/docs/typescript.html
// TODO: Change all this code and combine some files cause this shit is a little overkill unnecessary.
import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
// TODO: Change to reflect dndeez requirements.
// Username, No email, player or dungeon master
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
const UserModel = model<User>('User', schema);

run().catch((err) => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/test');

  const doc = new UserModel({
    name: 'Test',
    email: 'test@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png',
  });
  await doc.save();

  console.log(doc.email); // 'bill@initech.com'
}
