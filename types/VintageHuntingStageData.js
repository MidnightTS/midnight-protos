"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageHuntingStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageHuntingStageData", [
            { no: 11, name: "record_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { recordValue: 0, openTime: 0, stageId: 0, isFinish: false, isOpen: false };
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
                case /* uint32 record_value */ 11:
                    message.recordValue = reader.uint32();
                    break;
                case /* uint32 open_time */ 5:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 stage_id */ 10:
                    message.stageId = reader.uint32();
                    break;
                case /* bool is_finish */ 12:
                    message.isFinish = reader.bool();
                    break;
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
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
        /* uint32 record_value = 11; */
        if (message.recordValue !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.recordValue);
        /* uint32 open_time = 5; */
        if (message.openTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 stage_id = 10; */
        if (message.stageId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stageId);
        /* bool is_finish = 12; */
        if (message.isFinish !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isFinish);
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageHuntingStageData
 */
exports.VintageHuntingStageData = new VintageHuntingStageData$Type();
