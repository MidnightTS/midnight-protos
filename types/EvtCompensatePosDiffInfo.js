"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtCompensatePosDiffInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtCompensatePosDiffInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtCompensatePosDiffInfo", [
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "normalized_time_compact", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "cur_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "face_angle_compact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "cur_pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { entityId: 0, normalizedTimeCompact: 0, curHash: 0, faceAngleCompact: 0 };
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
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 normalized_time_compact */ 5:
                    message.normalizedTimeCompact = reader.uint32();
                    break;
                case /* uint32 cur_hash */ 7:
                    message.curHash = reader.uint32();
                    break;
                case /* int32 face_angle_compact */ 11:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* Vector cur_pos */ 6:
                    message.curPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.curPos);
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
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 normalized_time_compact = 5; */
        if (message.normalizedTimeCompact !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        /* uint32 cur_hash = 7; */
        if (message.curHash !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.curHash);
        /* int32 face_angle_compact = 11; */
        if (message.faceAngleCompact !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* Vector cur_pos = 6; */
        if (message.curPos)
            Vector_1.Vector.internalBinaryWrite(message.curPos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtCompensatePosDiffInfo
 */
exports.EvtCompensatePosDiffInfo = new EvtCompensatePosDiffInfo$Type();
