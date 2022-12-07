// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "BrickBreakerLevelInfo.proto" (syntax proto3)
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
 * @generated from protobuf message BrickBreakerLevelInfo
 */
export interface BrickBreakerLevelInfo {
    /**
     * @generated from protobuf field: repeated uint32 chosen_avatar_list = 5;
     */
    chosenAvatarList: number[];
    /**
     * @generated from protobuf field: uint32 level_id = 3;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool is_finish = 13;
     */
    isFinish: boolean;
    /**
     * @generated from protobuf field: uint32 max_score = 8;
     */
    maxScore: number;
    /**
     * @generated from protobuf field: repeated uint32 chosen_skill_list = 14;
     */
    chosenSkillList: number[];
    /**
     * @generated from protobuf field: bool is_can_start = 1;
     */
    isCanStart: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerLevelInfo$Type extends MessageType<BrickBreakerLevelInfo> {
    constructor() {
        super("BrickBreakerLevelInfo", [
            { no: 5, name: "chosen_avatar_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "chosen_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_can_start", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<BrickBreakerLevelInfo>): BrickBreakerLevelInfo {
        const message = { chosenAvatarList: [], levelId: 0, isFinish: false, maxScore: 0, chosenSkillList: [], isCanStart: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BrickBreakerLevelInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BrickBreakerLevelInfo): BrickBreakerLevelInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 chosen_avatar_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenAvatarList.push(reader.uint32());
                    else
                        message.chosenAvatarList.push(reader.uint32());
                    break;
                case /* uint32 level_id */ 3:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_finish */ 13:
                    message.isFinish = reader.bool();
                    break;
                case /* uint32 max_score */ 8:
                    message.maxScore = reader.uint32();
                    break;
                case /* repeated uint32 chosen_skill_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.chosenSkillList.push(reader.uint32());
                    else
                        message.chosenSkillList.push(reader.uint32());
                    break;
                case /* bool is_can_start */ 1:
                    message.isCanStart = reader.bool();
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
    internalBinaryWrite(message: BrickBreakerLevelInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 chosen_avatar_list = 5; */
        if (message.chosenAvatarList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenAvatarList.length; i++)
                writer.uint32(message.chosenAvatarList[i]);
            writer.join();
        }
        /* uint32 level_id = 3; */
        if (message.levelId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.levelId);
        /* bool is_finish = 13; */
        if (message.isFinish !== false)
            writer.tag(13, WireType.Varint).bool(message.isFinish);
        /* uint32 max_score = 8; */
        if (message.maxScore !== 0)
            writer.tag(8, WireType.Varint).uint32(message.maxScore);
        /* repeated uint32 chosen_skill_list = 14; */
        if (message.chosenSkillList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.chosenSkillList.length; i++)
                writer.uint32(message.chosenSkillList[i]);
            writer.join();
        }
        /* bool is_can_start = 1; */
        if (message.isCanStart !== false)
            writer.tag(1, WireType.Varint).bool(message.isCanStart);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerLevelInfo
 */
export const BrickBreakerLevelInfo = new BrickBreakerLevelInfo$Type();
