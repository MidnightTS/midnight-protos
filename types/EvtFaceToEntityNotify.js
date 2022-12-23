"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtFaceToEntityNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtFaceToEntityNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtFaceToEntityNotify", [
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 4, name: "face_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, forwardType: 0, faceEntityId: 0 };
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
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* ForwardType forward_type */ 8:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 face_entity_id */ 4:
                    message.faceEntityId = reader.uint32();
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
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* ForwardType forward_type = 8; */
        if (message.forwardType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 face_entity_id = 4; */
        if (message.faceEntityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.faceEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtFaceToEntityNotify
 */
exports.EvtFaceToEntityNotify = new EvtFaceToEntityNotify$Type();
