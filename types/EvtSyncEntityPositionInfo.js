"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtSyncEntityPositionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtSyncEntityPositionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtSyncEntityPositionInfo", [
            { no: 10, name: "state_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "face_angle_compact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "normalized_time_compact", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stateHash: 0, faceAngleCompact: 0, entityId: 0, normalizedTimeCompact: 0 };
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
                case /* uint32 state_hash */ 10:
                    message.stateHash = reader.uint32();
                    break;
                case /* int32 face_angle_compact */ 4:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* Vector pos */ 14:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 normalized_time_compact */ 13:
                    message.normalizedTimeCompact = reader.uint32();
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
        /* uint32 state_hash = 10; */
        if (message.stateHash !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.stateHash);
        /* int32 face_angle_compact = 4; */
        if (message.faceAngleCompact !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* Vector pos = 14; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 normalized_time_compact = 13; */
        if (message.normalizedTimeCompact !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtSyncEntityPositionInfo
 */
exports.EvtSyncEntityPositionInfo = new EvtSyncEntityPositionInfo$Type();
