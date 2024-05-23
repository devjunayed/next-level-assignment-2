import config from './app/config/index';
import app from './app';
import mongoose from 'mongoose';

const port = config.port;

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
