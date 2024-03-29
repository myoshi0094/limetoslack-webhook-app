import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosRequestConfig } from "axios";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  //slackwebhookURLを挿入
  axios.post('https://hooks.slack.com/services/hoge/fuga', {
    text: 'Hello, World!'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    env: process.env.MY_SECRET,
  });
}