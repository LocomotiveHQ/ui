import type { BaseSelectEntry, Widget_selectOne } from './WidgetSelectOne'

import { observer } from 'mobx-react-lite'

import { InputBoolUI } from '../../checkbox/InputBoolUI'

export const WidgetSelectOne_TabUI = observer(function WidgetSelectOne_TabUI_<T extends BaseSelectEntry>(p: {
    widget: Widget_selectOne<T>
}) {
    const widget = p.widget
    const selected = widget.serial.val
    return (
        <div
            tw={[
                //
                'flex',
                (widget.config.wrap ?? true) && 'flex-wrap',
                'rounded ml-auto justify-end',
                'select-none',
                'gap-x-0.5 gap-y-0',
            ]}
        >
            {widget.choices.map((c) => {
                const isSelected = selected?.id === c.id
                return (
                    <InputBoolUI
                        key={c.id}
                        icon={c.icon}
                        value={isSelected}
                        display='button'
                        text={c.label ?? c.id}
                        onValueChange={(value) => {
                            if (value === isSelected) return
                            widget.value = c
                        }}
                    />
                )
            })}
        </div>
    )
})
