"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterStateNotify_NeedBeginTime = exports.ChapterStateNotify_NeedPlayerLevel = exports.ChapterStateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChapterState_1 = require("./ChapterState");
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChapterStateNotify", [
            { no: 9, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "need_begin_time", kind: "message", T: () => exports.ChapterStateNotify_NeedBeginTime },
            { no: 1, name: "chapter_state", kind: "enum", T: () => ["ChapterState", ChapterState_1.ChapterState, "CHAPTER_STATE_"] },
            { no: 5, name: "need_player_level", kind: "message", T: () => exports.ChapterStateNotify_NeedPlayerLevel }
        ]);
    }
    create(value) {
        const message = { chapterId: 0, chapterState: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 chapter_id */ 9:
                    message.chapterId = reader.uint32();
                    break;
                case /* ChapterStateNotify.NeedBeginTime need_begin_time */ 13:
                    message.needBeginTime = exports.ChapterStateNotify_NeedBeginTime.internalBinaryRead(reader, reader.uint32(), options, message.needBeginTime);
                    break;
                case /* ChapterState chapter_state */ 1:
                    message.chapterState = reader.int32();
                    break;
                case /* ChapterStateNotify.NeedPlayerLevel need_player_level */ 5:
                    message.needPlayerLevel = exports.ChapterStateNotify_NeedPlayerLevel.internalBinaryRead(reader, reader.uint32(), options, message.needPlayerLevel);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 chapter_id = 9; */
        if (message.chapterId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.chapterId);
        /* ChapterStateNotify.NeedBeginTime need_begin_time = 13; */
        if (message.needBeginTime)
            exports.ChapterStateNotify_NeedBeginTime.internalBinaryWrite(message.needBeginTime, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ChapterState chapter_state = 1; */
        if (message.chapterState !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.chapterState);
        /* ChapterStateNotify.NeedPlayerLevel need_player_level = 5; */
        if (message.needPlayerLevel)
            exports.ChapterStateNotify_NeedPlayerLevel.internalBinaryWrite(message.needPlayerLevel, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify
 */
exports.ChapterStateNotify = new ChapterStateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedPlayerLevel$Type extends runtime_5.MessageType {
    constructor() {
        super("ChapterStateNotify.NeedPlayerLevel", [
            { no: 12, name: "is_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "config_need_player_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isLimit: false, configNeedPlayerLevel: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_limit = 12; */
        if (message.isLimit !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isLimit);
        /* uint32 config_need_player_level = 3; */
        if (message.configNeedPlayerLevel !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configNeedPlayerLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify.NeedPlayerLevel
 */
exports.ChapterStateNotify_NeedPlayerLevel = new ChapterStateNotify_NeedPlayerLevel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChapterStateNotify_NeedBeginTime$Type extends runtime_5.MessageType {
    constructor() {
        super("ChapterStateNotify.NeedBeginTime", [
            { no: 4, name: "is_limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "config_need_begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isLimit: false, configNeedBeginTime: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_limit = 4; */
        if (message.isLimit !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isLimit);
        /* uint32 config_need_begin_time = 14; */
        if (message.configNeedBeginTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.configNeedBeginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChapterStateNotify.NeedBeginTime
 */
exports.ChapterStateNotify_NeedBeginTime = new ChapterStateNotify_NeedBeginTime$Type();
