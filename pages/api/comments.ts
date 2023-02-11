import { NextApiRequest, NextApiResponse } from 'next'
import slack from 'lib/slack'
import { WebhookRequestBody } from '@line/bot-sdk';

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: WebhookRequestBody = req.body;

  // Slackのチャンネルにテキスト通知
  await slack.sendToSlack(req.body.events[0].message.text)
  res.writeHead(201).end('Created')

}