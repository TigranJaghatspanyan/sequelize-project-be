const env = {
  host: process.env.BE_HOST ?? 'http://localhost:5000',
  token: process.env.JWT_SECRET ?? "baurishvonces"
};

export default env;
