"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestProgressUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestProgressUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestProgressUpdateNotify", [
            { no: 9, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "finish_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "fail_progress_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { questId: 0, finishProgressList: [], failProgressList: [] };
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
                case /* uint32 quest_id */ 9:
                    message.questId = reader.uint32();
                    break;
                case /* repeated uint32 finish_progress_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishProgressList.push(reader.uint32());
                    else
                        message.finishProgressList.push(reader.uint32());
                    break;
                case /* repeated uint32 fail_progress_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.failProgressList.push(reader.uint32());
                    else
                        message.failProgressList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 quest_id = 9; */
        if (message.questId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.questId);
        /* repeated uint32 finish_progress_list = 12; */
        if (message.finishProgressList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishProgressList.length; i++)
                writer.uint32(message.finishProgressList[i]);
            writer.join();
        }
        /* repeated uint32 fail_progress_list = 15; */
        if (message.failProgressList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.failProgressList.length; i++)
                writer.uint32(message.failProgressList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestProgressUpdateNotify
 */
exports.QuestProgressUpdateNotify = new QuestProgressUpdateNotify$Type();
