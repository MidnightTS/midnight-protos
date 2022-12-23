// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WeaponAwakenReq.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 633;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message WeaponAwakenReq
 */
export interface WeaponAwakenReq {
    /**
     * @generated from protobuf field: map<uint32, uint32> affix_level_map = 13;
     */
    affixLevelMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint64 target_weapon_guid = 5;
     */
    targetWeaponGuid: bigint;
    /**
     * @generated from protobuf field: uint64 item_guid = 6;
     */
    itemGuid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class WeaponAwakenReq$Type extends MessageType<WeaponAwakenReq> {
    constructor() {
        super("WeaponAwakenReq", [
            { no: 13, name: "affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "item_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<WeaponAwakenReq>): WeaponAwakenReq {
        const message = { affixLevelMap: {}, targetWeaponGuid: 0n, itemGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WeaponAwakenReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WeaponAwakenReq): WeaponAwakenReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> affix_level_map */ 13:
                    this.binaryReadMap13(message.affixLevelMap, reader, options);
                    break;
                case /* uint64 target_weapon_guid */ 5:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint64 item_guid */ 6:
                    message.itemGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap13(map: WeaponAwakenReq["affixLevelMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WeaponAwakenReq["affixLevelMap"] | undefined, val: WeaponAwakenReq["affixLevelMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenReq.affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: WeaponAwakenReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> affix_level_map = 13; */
        for (let k of Object.keys(message.affixLevelMap))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.affixLevelMap[k as any]).join();
        /* uint64 target_weapon_guid = 5; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(5, WireType.Varint).uint64(message.targetWeaponGuid);
        /* uint64 item_guid = 6; */
        if (message.itemGuid !== 0n)
            writer.tag(6, WireType.Varint).uint64(message.itemGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponAwakenReq
 */
export const WeaponAwakenReq = new WeaponAwakenReq$Type();
