import * as esbuild from 'esbuild'

async function watch() {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    platform: 'node',
    target: 'es2016',
    bundle: true,
    sourcemap: true,
    minify: true,
    external: ['swagger-ui-express'],
  })
  await ctx.watch()
  console.log('Watching...')
}
watch()
