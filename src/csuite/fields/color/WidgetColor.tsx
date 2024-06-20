import type { FieldConfig } from '../../model/FieldConfig'
import type { FieldSerial } from '../../model/FieldSerial'
import type { IBlueprint } from '../../model/IBlueprint'
import type { Model } from '../../model/Model'
import type { Problem_Ext } from '../../model/Validation'

import { runInAction } from 'mobx'
import { nanoid } from 'nanoid'

import { BaseField } from '../../model/BaseField'
import { registerWidgetClass } from '../WidgetUI.DI'
import { WidgetColorUI } from './WidgetColorUI'

// CONFIG
export type Widget_color_config = FieldConfig<{ default?: string }, Widget_color_types>

// SERIAL
export type Widget_color_serial = FieldSerial<{
    type: 'color'
    /** color, stored as string */
    value: string
}>

// VALUE
export type Widget_color_value = string

// TYPES
export type Widget_color_types = {
    $Type: 'color'
    $Config: Widget_color_config
    $Serial: Widget_color_serial
    $Value: Widget_color_value
    $Field: Widget_color
}

// STATE
export class Widget_color extends BaseField<Widget_color_types> {
    DefaultHeaderUI = WidgetColorUI
    DefaultBodyUI = undefined
    readonly id: string

    readonly type: 'color' = 'color'

    get baseErrors(): Problem_Ext {
        return null
    }

    readonly defaultValue: string = this.config.default ?? '#000000'
    get hasChanges() { return this.value !== this.defaultValue } // prettier-ignore
    reset = () => (this.value = this.defaultValue)

    serial: Widget_color_serial

    constructor(
        //
        public readonly form: Model,
        public readonly parent: BaseField | null,
        public readonly spec: IBlueprint<Widget_color>,
        serial?: Widget_color_serial,
    ) {
        super()
        this.id = serial?.id ?? nanoid()
        const config = spec.config
        this.serial = serial ?? {
            type: 'color',
            collapsed: config.startCollapsed,
            id: this.id,
            value: config.default ?? '#000000',
        }
        this.init({
            DefaultHeaderUI: false,
            DefaultBodyUI: false,
        })
    }

    get value(): Widget_color_value {
        return this.serial.value
    }
    setValue(val: Widget_color_value) {
        this.value = val
    }
    set value(next: Widget_color_value) {
        if (this.serial.value === next) return
        runInAction(() => {
            this.serial.value = next
            this.bumpValue()
        })
    }
}

// DI
registerWidgetClass('color', Widget_color)
