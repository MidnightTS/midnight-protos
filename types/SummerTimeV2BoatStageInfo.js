"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeV2BoatStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2BoatStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeV2BoatStageInfo", [
            { no: 11, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, stageId: 0, openTime: 0, bestScore: 0 };
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
                case /* bool is_open */ 11:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 13:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 open_time */ 5:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 best_score */ 10:
                    message.bestScore = reader.uint32();
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
        /* bool is_open = 11; */
        if (message.isOpen !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 13; */
        if (message.stageId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 open_time = 5; */
        if (message.openTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 best_score = 10; */
        if (message.bestScore !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.bestScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2BoatStageInfo
 */
exports.SummerTimeV2BoatStageInfo = new SummerTimeV2BoatStageInfo$Type();
