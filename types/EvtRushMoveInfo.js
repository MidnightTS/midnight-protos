"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtRushMoveInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtRushMoveInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtRushMoveInfo", [
            { no: 8, name: "velocity", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "state_name_hash", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 1, name: "face_angle_compact", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "time_range", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "Unk3300_NEBMDDGPBON", kind: "message", jsonName: "Unk3300NEBMDDGPBON", T: () => Vector_1.Vector },
            { no: 5, name: "Unk3300_FGAPBJIPJFG", kind: "message", jsonName: "Unk3300FGAPBJIPJFG", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { stateNameHash: 0, entityId: 0, faceAngleCompact: 0, timeRange: 0 };
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
                case /* Vector velocity */ 8:
                    message.velocity = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
                    break;
                case /* int32 state_name_hash */ 4:
                    message.stateNameHash = reader.int32();
                    break;
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector pos */ 7:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* int32 face_angle_compact */ 1:
                    message.faceAngleCompact = reader.int32();
                    break;
                case /* float time_range */ 13:
                    message.timeRange = reader.float();
                    break;
                case /* Vector Unk3300_NEBMDDGPBON = 15 [json_name = "Unk3300NEBMDDGPBON"];*/ 15:
                    message.unk3300NEBMDDGPBON = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300NEBMDDGPBON);
                    break;
                case /* Vector Unk3300_FGAPBJIPJFG = 5 [json_name = "Unk3300FGAPBJIPJFG"];*/ 5:
                    message.unk3300FGAPBJIPJFG = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FGAPBJIPJFG);
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
        /* Vector velocity = 8; */
        if (message.velocity)
            Vector_1.Vector.internalBinaryWrite(message.velocity, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 state_name_hash = 4; */
        if (message.stateNameHash !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.stateNameHash);
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector pos = 7; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 face_angle_compact = 1; */
        if (message.faceAngleCompact !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.faceAngleCompact);
        /* float time_range = 13; */
        if (message.timeRange !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.timeRange);
        /* Vector Unk3300_NEBMDDGPBON = 15 [json_name = "Unk3300NEBMDDGPBON"]; */
        if (message.unk3300NEBMDDGPBON)
            Vector_1.Vector.internalBinaryWrite(message.unk3300NEBMDDGPBON, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector Unk3300_FGAPBJIPJFG = 5 [json_name = "Unk3300FGAPBJIPJFG"]; */
        if (message.unk3300FGAPBJIPJFG)
            Vector_1.Vector.internalBinaryWrite(message.unk3300FGAPBJIPJFG, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtRushMoveInfo
 */
exports.EvtRushMoveInfo = new EvtRushMoveInfo$Type();
