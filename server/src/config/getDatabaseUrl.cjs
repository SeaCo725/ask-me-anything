const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/ask-me-anything_development",
      test: "postgres://postgres:postgres@localhost:5432/ask-me-anything_test",
      e2e: "postgres://postgres:postgres@localhost:5432/ask-me-anything_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
