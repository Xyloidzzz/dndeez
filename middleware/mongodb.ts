import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

declare var process: {
  env: {
    DATABASE_URL: string;
  };
};

// FIXME: Fix this bullshit.
const connectDB = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return connectDB(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.DATABASE_URL, {
    autoCreate: true,
  });
  return connectDB(req, res);
};

export default connectDB;
