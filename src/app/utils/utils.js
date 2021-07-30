function requireFromEnv(key) {
  if (!process.env[key]) {
    logger.error(`[APP ERROR] Missing env variable: ${key}`)
    return process.exit(1)
  }
  return process.env[key]
}

module.exports = requireFromEnv
