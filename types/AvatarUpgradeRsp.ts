// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AvatarUpgradeRsp.proto" (syntax proto3)
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
 *   CMD_ID = 1792;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AvatarUpgradeRsp
 */
export interface AvatarUpgradeRsp {
    /**
     * @generated from protobuf field: int32 retcode = 8;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint64 avatar_guid = 14;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: uint32 cur_level = 9;
     */
    curLevel: number;
    /**
     * @generated from protobuf field: map<uint32, float> cur_fight_prop_map = 13;
     */
    curFightPropMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, float> old_fight_prop_map = 6;
     */
    oldFightPropMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 old_level = 12;
     */
    oldLevel: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUpgradeRsp$Type extends MessageType<AvatarUpgradeRsp> {
    constructor() {
        super("AvatarUpgradeRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "cur_fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 6, name: "old_fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 12, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarUpgradeRsp>): AvatarUpgradeRsp {
        const message = { retcode: 0, avatarGuid: 0n, curLevel: 0, curFightPropMap: {}, oldFightPropMap: {}, oldLevel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarUpgradeRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarUpgradeRsp): AvatarUpgradeRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 avatar_guid */ 14:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_level */ 9:
                    message.curLevel = reader.uint32();
                    break;
                case /* map<uint32, float> cur_fight_prop_map */ 13:
                    this.binaryReadMap13(message.curFightPropMap, reader, options);
                    break;
                case /* map<uint32, float> old_fight_prop_map */ 6:
                    this.binaryReadMap6(message.oldFightPropMap, reader, options);
                    break;
                case /* uint32 old_level */ 12:
                    message.oldLevel = reader.uint32();
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
    private binaryReadMap13(map: AvatarUpgradeRsp["curFightPropMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof AvatarUpgradeRsp["curFightPropMap"] | undefined, val: AvatarUpgradeRsp["curFightPropMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarUpgradeRsp.cur_fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap6(map: AvatarUpgradeRsp["oldFightPropMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof AvatarUpgradeRsp["oldFightPropMap"] | undefined, val: AvatarUpgradeRsp["oldFightPropMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarUpgradeRsp.old_fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: AvatarUpgradeRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, WireType.Varint).int32(message.retcode);
        /* uint64 avatar_guid = 14; */
        if (message.avatarGuid !== 0n)
            writer.tag(14, WireType.Varint).uint64(message.avatarGuid);
        /* uint32 cur_level = 9; */
        if (message.curLevel !== 0)
            writer.tag(9, WireType.Varint).uint32(message.curLevel);
        /* map<uint32, float> cur_fight_prop_map = 13; */
        for (let k of Object.keys(message.curFightPropMap))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Bit32).float(message.curFightPropMap[k as any]).join();
        /* map<uint32, float> old_fight_prop_map = 6; */
        for (let k of Object.keys(message.oldFightPropMap))
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Bit32).float(message.oldFightPropMap[k as any]).join();
        /* uint32 old_level = 12; */
        if (message.oldLevel !== 0)
            writer.tag(12, WireType.Varint).uint32(message.oldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarUpgradeRsp
 */
export const AvatarUpgradeRsp = new AvatarUpgradeRsp$Type();
