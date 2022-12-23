// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HideAndSeekPlayerBattleInfo.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message HideAndSeekPlayerBattleInfo
 */
export interface HideAndSeekPlayerBattleInfo {
    /**
     * @generated from protobuf field: bool is_ready = 12;
     */
    isReady: boolean;
    /**
     * @generated from protobuf field: repeated uint32 skill_list = 11;
     */
    skillList: number[];
    /**
     * @generated from protobuf field: uint32 avatar_id = 15;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: uint32 costume_id = 4;
     */
    costumeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerBattleInfo$Type extends MessageType<HideAndSeekPlayerBattleInfo> {
    constructor() {
        super("HideAndSeekPlayerBattleInfo", [
            { no: 12, name: "is_ready", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HideAndSeekPlayerBattleInfo>): HideAndSeekPlayerBattleInfo {
        const message = { isReady: false, skillList: [], avatarId: 0, costumeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HideAndSeekPlayerBattleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HideAndSeekPlayerBattleInfo): HideAndSeekPlayerBattleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_ready */ 12:
                    message.isReady = reader.bool();
                    break;
                case /* repeated uint32 skill_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillList.push(reader.uint32());
                    else
                        message.skillList.push(reader.uint32());
                    break;
                case /* uint32 avatar_id */ 15:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 costume_id */ 4:
                    message.costumeId = reader.uint32();
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
    internalBinaryWrite(message: HideAndSeekPlayerBattleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_ready = 12; */
        if (message.isReady !== false)
            writer.tag(12, WireType.Varint).bool(message.isReady);
        /* repeated uint32 skill_list = 11; */
        if (message.skillList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillList.length; i++)
                writer.uint32(message.skillList[i]);
            writer.join();
        }
        /* uint32 avatar_id = 15; */
        if (message.avatarId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.avatarId);
        /* uint32 costume_id = 4; */
        if (message.costumeId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekPlayerBattleInfo
 */
export const HideAndSeekPlayerBattleInfo = new HideAndSeekPlayerBattleInfo$Type();
