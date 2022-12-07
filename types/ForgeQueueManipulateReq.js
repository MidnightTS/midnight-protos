"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQueueManipulateReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForgeQueueManipulateType_1 = require("./ForgeQueueManipulateType");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueManipulateReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeQueueManipulateReq", [
            { no: 3, name: "forge_queue_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "manipulate_type", kind: "enum", T: () => ["ForgeQueueManipulateType", ForgeQueueManipulateType_1.ForgeQueueManipulateType, "FORGE_QUEUE_MANIPULATE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { forgeQueueId: 0, manipulateType: 0 };
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
                case /* uint32 forge_queue_id */ 3:
                    message.forgeQueueId = reader.uint32();
                    break;
                case /* ForgeQueueManipulateType manipulate_type */ 4:
                    message.manipulateType = reader.int32();
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
        /* uint32 forge_queue_id = 3; */
        if (message.forgeQueueId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.forgeQueueId);
        /* ForgeQueueManipulateType manipulate_type = 4; */
        if (message.manipulateType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.manipulateType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueManipulateReq
 */
exports.ForgeQueueManipulateReq = new ForgeQueueManipulateReq$Type();
