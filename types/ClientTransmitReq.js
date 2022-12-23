"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTransmitReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const TransmitReason_1 = require("./TransmitReason");
// @generated message type with reflection information, may provide speed optimized methods
class ClientTransmitReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientTransmitReq", [
            { no: 3, name: "reason", kind: "enum", T: () => ["TransmitReason", TransmitReason_1.TransmitReason, "TRANSMIT_REASON_"] },
            { no: 9, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { reason: 0, sceneId: 0 };
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
                case /* TransmitReason reason */ 3:
                    message.reason = reader.int32();
                    break;
                case /* uint32 scene_id */ 9:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector rot */ 6:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 4:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* TransmitReason reason = 3; */
        if (message.reason !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 scene_id = 9; */
        if (message.sceneId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* Vector rot = 6; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 4; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientTransmitReq
 */
exports.ClientTransmitReq = new ClientTransmitReq$Type();
