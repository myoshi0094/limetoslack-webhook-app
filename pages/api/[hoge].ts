import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { hoge } = request.query;
  return response.end(`Hello ${hoge}!`);
}
