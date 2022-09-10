export default {
  secret: process.env.JWT_SECRET ?? "baurishvonces",
  ttl: 3600,
};
