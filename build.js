import * as esbuild from 'esbuild'
import tsid from 'unplugin-isolated-decl/esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['index.ts'],
  outdir: 'dist',
  plugins: [tsid({ transformer: 'oxc', sourceMap: false })] // source map is still emitted
})
