const babelConfig = api => {
    api.cache(true)


  const presetEnv = ["@babel/preset-env", { modules: false, loose: true }];

  const presetReact = "@babel/preset-react";

  const presets = [presetEnv, presetReact];

  return {
    presets
  };
};

module.exports = babelConfig;
