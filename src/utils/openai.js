import OpenAI from 'openai';
const api = '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'
export const openai = new OpenAI({
  apiKey: api, dangerouslyAllowBrowser: true
});

