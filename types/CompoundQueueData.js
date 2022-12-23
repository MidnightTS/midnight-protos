"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompoundQueueData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CompoundQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("CompoundQueueData", [
            { no: 5, name: "wait_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "output_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "output_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "compound_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { waitCount: 0, outputTime: 0, outputCount: 0, compoundId: 0 };
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
                case /* uint32 wait_count */ 5:
                    message.waitCount = reader.uint32();
                    break;
                case /* uint32 output_time */ 14:
                    message.outputTime = reader.uint32();
                    break;
                case /* uint32 output_count */ 10:
                    message.outputCount = reader.uint32();
                    break;
                case /* uint32 compound_id */ 12:
                    message.compoundId = reader.uint32();
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
        /* uint32 wait_count = 5; */
        if (message.waitCount !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.waitCount);
        /* uint32 output_time = 14; */
        if (message.outputTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.outputTime);
        /* uint32 output_count = 10; */
        if (message.outputCount !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.outputCount);
        /* uint32 compound_id = 12; */
        if (message.compoundId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.compoundId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CompoundQueueData
 */
exports.CompoundQueueData = new CompoundQueueData$Type();
