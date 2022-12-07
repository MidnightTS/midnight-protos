"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternProjectionLevelInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LanternProjectionLevelInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternProjectionLevelInfo", [
            { no: 7, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_can_start", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_show_tips", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "min_finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFinished: false, isCanStart: false, id: 0, isShowTips: false, minFinishTime: 0 };
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
                case /* bool is_finished */ 7:
                    message.isFinished = reader.bool();
                    break;
                case /* bool is_can_start */ 14:
                    message.isCanStart = reader.bool();
                    break;
                case /* uint32 id */ 10:
                    message.id = reader.uint32();
                    break;
                case /* bool is_show_tips */ 15:
                    message.isShowTips = reader.bool();
                    break;
                case /* uint32 min_finish_time */ 5:
                    message.minFinishTime = reader.uint32();
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
        /* bool is_finished = 7; */
        if (message.isFinished !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinished);
        /* bool is_can_start = 14; */
        if (message.isCanStart !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isCanStart);
        /* uint32 id = 10; */
        if (message.id !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.id);
        /* bool is_show_tips = 15; */
        if (message.isShowTips !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isShowTips);
        /* uint32 min_finish_time = 5; */
        if (message.minFinishTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.minFinishTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternProjectionLevelInfo
 */
exports.LanternProjectionLevelInfo = new LanternProjectionLevelInfo$Type();
