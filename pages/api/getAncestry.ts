//  TODO: Create Schema
//  !IMPORTANT: Create Schema and make a JSON file filled with what should be in it.

import type { NextApiRequest, NextApiResponse } from 'next';

type DNDClass = {
  cName: string;
  cID: number;
  subClasses: Array<string>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DNDClass>
) {
  res
    .status(200)
    .json({ cName: 'poop', cID: 0, subClasses: ['poop1', 'poop2', 'poop3'] });
}
