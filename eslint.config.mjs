import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    './nx/**',
    './pnpm-lock.yaml',
    '**/node_modules/**',
    '**/dist/**',
  ],
}, {
  rules: {
    'node/prefer-global/process': ['off'],
  },
})
