// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WeaponAwakenRsp.proto" (syntax proto3)
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
 *   CMD_ID = 610;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message WeaponAwakenRsp
 */
export interface WeaponAwakenRsp {
    /**
     * @generated from protobuf field: map<uint32, uint32> cur_affix_level_map = 3;
     */
    curAffixLevelMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint64 avatar_guid = 8;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint64 target_weapon_guid = 14;
     */
    targetWeaponGuid: bigint;
    /**
     * @generated from protobuf field: map<uint32, uint32> old_affix_level_map = 15;
     */
    oldAffixLevelMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 target_weapon_awaken_level = 2;
     */
    targetWeaponAwakenLevel: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WeaponAwakenRsp$Type extends MessageType<WeaponAwakenRsp> {
    constructor() {
        super("WeaponAwakenRsp", [
            { no: 3, name: "cur_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "old_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "target_weapon_awaken_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WeaponAwakenRsp>): WeaponAwakenRsp {
        const message = { curAffixLevelMap: {}, avatarGuid: 0n, retcode: 0, targetWeaponGuid: 0n, oldAffixLevelMap: {}, targetWeaponAwakenLevel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WeaponAwakenRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WeaponAwakenRsp): WeaponAwakenRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> cur_affix_level_map */ 3:
                    this.binaryReadMap3(message.curAffixLevelMap, reader, options);
                    break;
                case /* uint64 avatar_guid */ 8:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 target_weapon_guid */ 14:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> old_affix_level_map */ 15:
                    this.binaryReadMap15(message.oldAffixLevelMap, reader, options);
                    break;
                case /* uint32 target_weapon_awaken_level */ 2:
                    message.targetWeaponAwakenLevel = reader.uint32();
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
    private binaryReadMap3(map: WeaponAwakenRsp["curAffixLevelMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WeaponAwakenRsp["curAffixLevelMap"] | undefined, val: WeaponAwakenRsp["curAffixLevelMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.cur_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap15(map: WeaponAwakenRsp["oldAffixLevelMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof WeaponAwakenRsp["oldAffixLevelMap"] | undefined, val: WeaponAwakenRsp["oldAffixLevelMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.old_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: WeaponAwakenRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> cur_affix_level_map = 3; */
        for (let k of Object.keys(message.curAffixLevelMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.curAffixLevelMap[k as any]).join();
        /* uint64 avatar_guid = 8; */
        if (message.avatarGuid !== 0n)
            writer.tag(8, WireType.Varint).uint64(message.avatarGuid);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* uint64 target_weapon_guid = 14; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(14, WireType.Varint).uint64(message.targetWeaponGuid);
        /* map<uint32, uint32> old_affix_level_map = 15; */
        for (let k of Object.keys(message.oldAffixLevelMap))
            writer.tag(15, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.oldAffixLevelMap[k as any]).join();
        /* uint32 target_weapon_awaken_level = 2; */
        if (message.targetWeaponAwakenLevel !== 0)
            writer.tag(2, WireType.Varint).uint32(message.targetWeaponAwakenLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponAwakenRsp
 */
export const WeaponAwakenRsp = new WeaponAwakenRsp$Type();
