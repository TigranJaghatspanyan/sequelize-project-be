const jwt = {
  secret: process.env.JWT_SECRET ?? "baurishvonces",
  ttl: 3600,
};

export default jwt;
