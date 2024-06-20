import type { CovariantFC } from '../variance/CovariantFC'
import type { BaseField } from './BaseField'
import type { Channel, ChannelId, Producer } from './Channel'

export type SchemaDict = { [key: string]: IBlueprint }

export interface IBlueprint<out W extends BaseField = BaseField> {
    // real fields
    type: W['type']
    config: W['$Config']

    // type utils
    $Field: W
    $Type: W['type']
    $Config: W['$Config']
    $Serial: W['$Serial']
    $Value: W['$Value']

    LabelExtraUI?: CovariantFC<{ widget: W }> /* 🧮 */
    // Make<X extends IWidget>(type: X['type'], config: X['$Config']): ISpec<X>

    // -----------
    producers: Producer<any, any>[]
    publish<T>(chan: Channel<T> | ChannelId, produce: (self: W['$Field']) => T): this
    subscribe<T>(chan: Channel<T> | ChannelId, effect: (arg: T, self: W['$Field']) => void): this

    reactions: { expr: (self: any) => any; effect: (arg: any, self: any) => void }[]
    addReaction<T>(expr: (self: W['$Field']) => T, effect: (arg: T, self: W['$Field']) => void): this
}
