"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SpiceStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("SpiceStageData", [
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "success_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, stageId: 0, successTimes: 0 };
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
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 5:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 success_times */ 12:
                    message.successTimes = reader.uint32();
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
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 5; */
        if (message.stageId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 success_times = 12; */
        if (message.successTimes !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.successTimes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceStageData
 */
exports.SpiceStageData = new SpiceStageData$Type();
