import type {
  PhotonConfig,
  PhotonConfigResolved,
  PhotonEntryAuto,
  PhotonEntryBase,
  PhotonEntryServer,
  PhotonEntryUniversalHandler
} from './validators/types.js'

declare global {
  export namespace Photon {
    export interface EntryBase extends PhotonEntryBase {}
    export interface EntryAuto extends EntryBase, PhotonEntryAuto {}
    export interface EntryServer extends EntryBase, PhotonEntryServer {}
    export interface EntryUniversalHandler extends EntryBase, PhotonEntryUniversalHandler {}

    export type Entry = EntryAuto | EntryServer | EntryUniversalHandler

    export interface Config extends PhotonConfig {}

    export interface ConfigResolved extends Omit<PhotonConfigResolved, 'entry'> {
      entry: {
        index: Entry
        [x: string]: Entry
      }
    }
  }
}
