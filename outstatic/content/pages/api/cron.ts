import type { NextApiRequest, NextApiResponse } from 'next';
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.query.key !== 'sharedKey') {
    response.status(404).end();
    return;
  }
 
  response.status(200).json({ success: true });
}