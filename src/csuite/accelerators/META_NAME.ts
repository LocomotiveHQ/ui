import type { KeyName } from '../commands/CommandManager'
import type { MouseEvent } from 'react'

import { getOS } from '../environment/getOS'

const platform = getOS() // process.platform

export const MOD_KEY = (platform === 'Mac' ? 'cmd' : 'ctrl') as KeyName

export const META_NAME = (platform === 'Mac' ? 'cmd' : 'win') as KeyName

export const hasMod = (ev: MouseEvent<any, any> | KeyboardEvent): boolean => {
    if (platform === 'Mac') return ev.metaKey
    return ev.ctrlKey
}
