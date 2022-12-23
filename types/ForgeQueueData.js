"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQueueData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeQueueData", [
            { no: 1, name: "next_finish_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "forge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "finish_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "queue_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "total_finish_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "unfinish_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { nextFinishTimestamp: 0, forgeId: 0, finishCount: 0, queueId: 0, totalFinishTimestamp: 0, avatarId: 0, unfinishCount: 0 };
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
                case /* uint32 next_finish_timestamp */ 1:
                    message.nextFinishTimestamp = reader.uint32();
                    break;
                case /* uint32 forge_id */ 5:
                    message.forgeId = reader.uint32();
                    break;
                case /* uint32 finish_count */ 7:
                    message.finishCount = reader.uint32();
                    break;
                case /* uint32 queue_id */ 4:
                    message.queueId = reader.uint32();
                    break;
                case /* uint32 total_finish_timestamp */ 15:
                    message.totalFinishTimestamp = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 12:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 unfinish_count */ 3:
                    message.unfinishCount = reader.uint32();
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
        /* uint32 next_finish_timestamp = 1; */
        if (message.nextFinishTimestamp !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.nextFinishTimestamp);
        /* uint32 forge_id = 5; */
        if (message.forgeId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.forgeId);
        /* uint32 finish_count = 7; */
        if (message.finishCount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.finishCount);
        /* uint32 queue_id = 4; */
        if (message.queueId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.queueId);
        /* uint32 total_finish_timestamp = 15; */
        if (message.totalFinishTimestamp !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.totalFinishTimestamp);
        /* uint32 avatar_id = 12; */
        if (message.avatarId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 unfinish_count = 3; */
        if (message.unfinishCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unfinishCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueData
 */
exports.ForgeQueueData = new ForgeQueueData$Type();
