export default {
    type: "object",
    properties: {
      from: { type: 'string' },
      to: { type: 'string' },
      subject: { type: 'string' },
      host: { type: 'string' },
      user: { type: 'string' },
      pass: { type: 'string' },
      secure: { type: 'boolean' },
      port: { type: 'number'}
    },
    required: ['from', 'to', 'subject', 'user', 'pass']
  } as const;
  