"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAnimatorStateChangedInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorStateChangedInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAnimatorStateChangedInfo", [
            { no: 4, name: "fade_duration", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "to_state_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "layer", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 3, name: "Unk3300_KLMEKMGFGPD", kind: "scalar", jsonName: "Unk3300KLMEKMGFGPD", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "normalized_time_compact", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_MEOPKEDJCIN", kind: "scalar", jsonName: "Unk3300MEOPKEDJCIN", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "face_angle_compact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fadeDuration: 0, toStateHash: 0, layer: 0, unk3300KLMEKMGFGPD: false, normalizedTimeCompact: 0, unk3300MEOPKEDJCIN: false, faceAngleCompact: 0, entityId: 0 };
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
                case /* float fade_duration */ 4:
                    message.fadeDuration = reader.float();
                    break;
                case /* uint32 to_state_hash */ 11:
                    message.toStateHash = reader.uint32();
                    break;
                case /* uint32 layer */ 1:
                    message.layer = reader.uint32();
                    break;
                case /* Vector pos */ 5:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* bool Unk3300_KLMEKMGFGPD = 3 [json_name = "Unk3300KLMEKMGFGPD"];*/ 3:
                    message.unk3300KLMEKMGFGPD = reader.bool();
                    break;
                case /* uint32 normalized_time_compact */ 6:
                    message.normalizedTimeCompact = reader.uint32();
                    break;
                case /* bool Unk3300_MEOPKEDJCIN = 7 [json_name = "Unk3300MEOPKEDJCIN"];*/ 7:
                    message.unk3300MEOPKEDJCIN = reader.bool();
                    break;
                case /* int32 face_angle_compact */ 15:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
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
        /* float fade_duration = 4; */
        if (message.fadeDuration !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.fadeDuration);
        /* uint32 to_state_hash = 11; */
        if (message.toStateHash !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.toStateHash);
        /* uint32 layer = 1; */
        if (message.layer !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.layer);
        /* Vector pos = 5; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_KLMEKMGFGPD = 3 [json_name = "Unk3300KLMEKMGFGPD"]; */
        if (message.unk3300KLMEKMGFGPD !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.unk3300KLMEKMGFGPD);
        /* uint32 normalized_time_compact = 6; */
        if (message.normalizedTimeCompact !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.normalizedTimeCompact);
        /* bool Unk3300_MEOPKEDJCIN = 7 [json_name = "Unk3300MEOPKEDJCIN"]; */
        if (message.unk3300MEOPKEDJCIN !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300MEOPKEDJCIN);
        /* int32 face_angle_compact = 15; */
        if (message.faceAngleCompact !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAnimatorStateChangedInfo
 */
exports.EvtAnimatorStateChangedInfo = new EvtAnimatorStateChangedInfo$Type();
