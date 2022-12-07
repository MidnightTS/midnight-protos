"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGReplayOperationData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGOperation_1 = require("./GCGOperation");
// @generated message type with reflection information, may provide speed optimized methods
class GCGReplayOperationData$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGReplayOperationData", [
            { no: 1, name: "op", kind: "message", T: () => GCGOperation_1.GCGOperation },
            { no: 8, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { controllerId: 0 };
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
                case /* GCGOperation op */ 1:
                    message.op = GCGOperation_1.GCGOperation.internalBinaryRead(reader, reader.uint32(), options, message.op);
                    break;
                case /* uint32 controller_id */ 8:
                    message.controllerId = reader.uint32();
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
        /* GCGOperation op = 1; */
        if (message.op)
            GCGOperation_1.GCGOperation.internalBinaryWrite(message.op, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 controller_id = 8; */
        if (message.controllerId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGReplayOperationData
 */
exports.GCGReplayOperationData = new GCGReplayOperationData$Type();
