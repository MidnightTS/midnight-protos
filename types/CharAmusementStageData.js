"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharAmusementStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CharAmusementStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("CharAmusementStageData", [
            { no: 3, name: "finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finishTime: 0, isOpen: false, stageId: 0 };
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
                case /* uint32 finish_time */ 3:
                    message.finishTime = reader.uint32();
                    break;
                case /* bool is_open */ 6:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 stage_id */ 4:
                    message.stageId = reader.uint32();
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
        /* uint32 finish_time = 3; */
        if (message.finishTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.finishTime);
        /* bool is_open = 6; */
        if (message.isOpen !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 stage_id = 4; */
        if (message.stageId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CharAmusementStageData
 */
exports.CharAmusementStageData = new CharAmusementStageData$Type();
