module.exports = function override(config, env) {
  // Find the source-map-loader rule
  const sourceMapLoaderRule = config.module.rules.find(
    (rule) => rule.loader && rule.loader.includes("source-map-loader")
  );

  if (sourceMapLoaderRule) {
    // Exclude the problematic file from source-map-loader
    if (!sourceMapLoaderRule.exclude) {
      sourceMapLoaderRule.exclude = [];
    }
    sourceMapLoaderRule.exclude.push(/@mediapipe\/tasks-vision/);
  }

  return config;
};
