import type { CSuiteConfig } from './CSuiteConfig'

import { NumberVar } from '../tinyCSS/CSSVar'

/** default simple example configuration for external project
 * using cushy kit
 */

export const CSuite_theme1: CSuiteConfig = {
    clickAndSlideMultiplicator: 1,
    showWidgetUndo: true,
    showWidgetMenu: true,
    showWidgetDiff: true,
    showToggleButtonBox: false,
    inputBorder: new NumberVar('input-border', 8),
    base: { lightness: 0.987, chroma: 0.01, hue: 286 },
    baseStr: 'oklch(0.987 0.01 286)',
    text: { contrast: 0.824 },
    labelText: { contrast: 0.48, chroma: 0.035 },
    shiftDirection: 1,
    inputHeight: 1.6,
    showWidgetExtra: true,
    truncateLabels: false,
}
