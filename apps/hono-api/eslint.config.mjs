import baseConfig from '../../eslint.config.mjs'

export default baseConfig.append({
  rules: {
    'no-console': 'off',
  },
})
