import { dts } from 'rollup-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

const config = [
    {
        input: '/Users/loco/dev/CushyStudio/lib/csuite/index.LIBRARY.d.ts',
        output: [{ file: '/Users/loco/dev/CushyStudio/@cushy/forms/main.d.ts', format: 'es' }],
        external: [/.s?css$/], // ignore .css and .scss file
        plugins: [dts(), visualizer({ template: 'raw-data' })],
    },
]

export default config
