// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChapterStateNotify.proto" (syntax proto3)
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
import { ChapterState } from "./ChapterState";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 442;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ChapterStateNotify
 */
export interface ChapterStateNotify {
    /**
     * @generated from protobuf field: uint32 chapter_id = 9;
     */
    chapterId: number;
    /**
     * @generated from protobuf field: ChapterStateNotify.NeedBeginTime need_begin_time = 13;
     */
    needBeginTime?: ChapterStateNotify_NeedBeginTime;
    /**
     * @generated from protobuf field: ChapterState chapter_state = 1;
     */
    chapterState: ChapterState;
    /**
     * @generated from protobuf field: ChapterStateNotify.NeedPlayerLevel need_player_level = 5;
     */
    needPlayerLevel?: ChapterStateNotify_NeedPlayerLevel;
}
/**
 * @generated from protobuf message ChapterStateNotify.NeedPlayerLevel
 */
export interface ChapterStateNotify_NeedPlayerLevel {
    /**
     * @generated from protobuf field: bool is_limit = 12;
     */
    isLimit: boolean;
    /**
     * @generated from protobuf field: uint32 config_need_player_level = 3;
     */
    configNeedPlayerLevel: number;
}
/**
 * @generated from protobuf message ChapterStateNotify.NeedBeginTime
 */
export interface ChapterStateNotify_NeedBeginTime {
    /**
     * @generated from protobuf field: bool is_limit = 4;
     */
    isLimit: boolean;
    /**
     * @generated from protobuf field: uint32 config_need_begin_time = 14;
     */
    configNeedBeginTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify$Type extends MessageType<ChapterStateNotify> {
    constructor() {
        super("ChapterStateNotify", [
            { no: 9, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "need_begin_time", kind: "message", T: () => ChapterStateNotify_NeedBeginTime },
            { no: 1, name: "chapter_state", kind: "enum", T: () => ["ChapterState", ChapterState, "CHAPTER_STATE_"] },
            { no: 5, name: "need_player_level", kind: "message", T: () => ChapterStateNotify_NeedPlayerLevel }
        ]);
    }
    create(value?: PartialMessage<ChapterStateNotify>): ChapterStateNotify {
        const message = { chapterId: 0, chapterState: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChapterStateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChapterStateNotify): ChapterStateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 chapter_id */ 9:
                    message.chapterId = reader.uint32();
                    break;
                case /* ChapterStateNotify.NeedBeginTime need_begin_time */ 13:
                    message.needBeginTime = ChapterStateNotify_NeedBeginTime.internalBinaryRead(reader, reader.uint32(), options, message.needBeginTime);
                    break;
                case /* ChapterState chapter_state */ 1:
                    message.chapterState = reader.int32();
                    break;
                case /* ChapterStateNotify.NeedPlayerLevel need_player_level */ 5:
                    message.needPlayerLevel = ChapterStateNotify_NeedPlayerLevel.internalBinaryRead(reader, reader.uint32(), options, message.needPlayerLevel);
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
    internalBinaryWrite(message: ChapterStateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 chapter_id = 9; */
        if (message.chapterId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.chapterId);
        /* ChapterStateNotify.NeedBeginTime need_begin_time = 13; */
        if (message.needBeginTime)
            ChapterStateNotify_NeedBeginTime.internalBinaryWrite(message.needBeginTime, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* ChapterState chapter_state = 1; */
        if (message.chapterState !== 0)
            writer.tag(1, WireType.Varint).int32(message.chapterState);
        /* ChapterStateNotify.NeedPlayerLevel need_player_level = 5; */
        if (message.needPlayerLevel)
            ChapterStateNotify_NeedPlayerLevel.internalBinaryWrite(message.needPlayerLevel, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify
 */
export const ChapterStateNotify = new ChapterStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedPlayerLevel$Type extends MessageType<ChapterStateNotify_NeedPlayerLevel> {
    constructor() {
        super("ChapterStateNotify.NeedPlayerLevel", [
            { no: 12, name: "is_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "config_need_player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChapterStateNotify_NeedPlayerLevel>): ChapterStateNotify_NeedPlayerLevel {
        const message = { isLimit: false, configNeedPlayerLevel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChapterStateNotify_NeedPlayerLevel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChapterStateNotify_NeedPlayerLevel): ChapterStateNotify_NeedPlayerLevel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_limit */ 12:
                    message.isLimit = reader.bool();
                    break;
                case /* uint32 config_need_player_level */ 3:
                    message.configNeedPlayerLevel = reader.uint32();
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
    internalBinaryWrite(message: ChapterStateNotify_NeedPlayerLevel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_limit = 12; */
        if (message.isLimit !== false)
            writer.tag(12, WireType.Varint).bool(message.isLimit);
        /* uint32 config_need_player_level = 3; */
        if (message.configNeedPlayerLevel !== 0)
            writer.tag(3, WireType.Varint).uint32(message.configNeedPlayerLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify.NeedPlayerLevel
 */
export const ChapterStateNotify_NeedPlayerLevel = new ChapterStateNotify_NeedPlayerLevel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedBeginTime$Type extends MessageType<ChapterStateNotify_NeedBeginTime> {
    constructor() {
        super("ChapterStateNotify.NeedBeginTime", [
            { no: 4, name: "is_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "config_need_begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChapterStateNotify_NeedBeginTime>): ChapterStateNotify_NeedBeginTime {
        const message = { isLimit: false, configNeedBeginTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChapterStateNotify_NeedBeginTime>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChapterStateNotify_NeedBeginTime): ChapterStateNotify_NeedBeginTime {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_limit */ 4:
                    message.isLimit = reader.bool();
                    break;
                case /* uint32 config_need_begin_time */ 14:
                    message.configNeedBeginTime = reader.uint32();
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
    internalBinaryWrite(message: ChapterStateNotify_NeedBeginTime, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_limit = 4; */
        if (message.isLimit !== false)
            writer.tag(4, WireType.Varint).bool(message.isLimit);
        /* uint32 config_need_begin_time = 14; */
        if (message.configNeedBeginTime !== 0)
            writer.tag(14, WireType.Varint).uint32(message.configNeedBeginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify.NeedBeginTime
 */
export const ChapterStateNotify_NeedBeginTime = new ChapterStateNotify_NeedBeginTime$Type();