"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtMotionInfoDuringSteerAttack = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtMotionInfoDuringSteerAttack$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtMotionInfoDuringSteerAttack", [
            { no: 15, name: "face_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "velocity", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { entityId: 0 };
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
                case /* Vector face_dir */ 15:
                    message.faceDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.faceDir);
                    break;
                case /* Vector pos */ 8:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector velocity */ 14:
                    message.velocity = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.velocity);
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
        /* Vector face_dir = 15; */
        if (message.faceDir)
            Vector_1.Vector.internalBinaryWrite(message.faceDir, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 8; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector velocity = 14; */
        if (message.velocity)
            Vector_1.Vector.internalBinaryWrite(message.velocity, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtMotionInfoDuringSteerAttack
 */
exports.EvtMotionInfoDuringSteerAttack = new EvtMotionInfoDuringSteerAttack$Type();
