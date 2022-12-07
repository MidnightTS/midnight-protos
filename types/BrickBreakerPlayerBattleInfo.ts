// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "BrickBreakerPlayerBattleInfo.proto" (syntax proto3)
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
 * @generated from protobuf message BrickBreakerPlayerBattleInfo
 */
export interface BrickBreakerPlayerBattleInfo {
    /**
     * @generated from protobuf field: bool is_ready = 7;
     */
    isReady: boolean;
    /**
     * @generated from protobuf field: repeated uint32 costume_id = 5;
     */
    costumeId: number[];
    /**
     * @generated from protobuf field: string nickname = 2;
     */
    nickname: string;
    /**
     * @generated from protobuf field: uint32 uid = 13;
     */
    uid: number;
    /**
     * @generated from protobuf field: repeated uint32 avatar_id = 9;
     */
    avatarId: number[];
    /**
     * @generated from protobuf field: bool is_changing = 15;
     */
    isChanging: boolean;
    /**
     * @generated from protobuf field: repeated uint32 skill_list = 3;
     */
    skillList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerPlayerBattleInfo$Type extends MessageType<BrickBreakerPlayerBattleInfo> {
    constructor() {
        super("BrickBreakerPlayerBattleInfo", [
            { no: 7, name: "is_ready", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "costume_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "avatar_id", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_changing", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BrickBreakerPlayerBattleInfo>): BrickBreakerPlayerBattleInfo {
        const message = { isReady: false, costumeId: [], nickname: "", uid: 0, avatarId: [], isChanging: false, skillList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BrickBreakerPlayerBattleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrickBreakerPlayerBattleInfo): BrickBreakerPlayerBattleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_ready */ 7:
                    message.isReady = reader.bool();
                    break;
                case /* repeated uint32 costume_id */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costumeId.push(reader.uint32());
                    else
                        message.costumeId.push(reader.uint32());
                    break;
                case /* string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* uint32 uid */ 13:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint32 avatar_id */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarId.push(reader.uint32());
                    else
                        message.avatarId.push(reader.uint32());
                    break;
                case /* bool is_changing */ 15:
                    message.isChanging = reader.bool();
                    break;
                case /* repeated uint32 skill_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillList.push(reader.uint32());
                    else
                        message.skillList.push(reader.uint32());
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
    internalBinaryWrite(message: BrickBreakerPlayerBattleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_ready = 7; */
        if (message.isReady !== false)
            writer.tag(7, WireType.Varint).bool(message.isReady);
        /* repeated uint32 costume_id = 5; */
        if (message.costumeId.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costumeId.length; i++)
                writer.uint32(message.costumeId[i]);
            writer.join();
        }
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nickname);
        /* uint32 uid = 13; */
        if (message.uid !== 0)
            writer.tag(13, WireType.Varint).uint32(message.uid);
        /* repeated uint32 avatar_id = 9; */
        if (message.avatarId.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarId.length; i++)
                writer.uint32(message.avatarId[i]);
            writer.join();
        }
        /* bool is_changing = 15; */
        if (message.isChanging !== false)
            writer.tag(15, WireType.Varint).bool(message.isChanging);
        /* repeated uint32 skill_list = 3; */
        if (message.skillList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillList.length; i++)
                writer.uint32(message.skillList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerPlayerBattleInfo
 */
export const BrickBreakerPlayerBattleInfo = new BrickBreakerPlayerBattleInfo$Type();