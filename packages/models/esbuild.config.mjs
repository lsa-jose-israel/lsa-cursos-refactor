import * as esbuild from 'esbuild'

async function build() {
  await esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    platform: 'node',
    target: 'es2016',
    bundle: true,
    sourcemap: true,
    minify: true,
  })
  console.log('Build finished.')
}
build()
