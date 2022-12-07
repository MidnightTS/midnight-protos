"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtLightCoreMove = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtLightCoreMove$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtLightCoreMove", [
            { no: 4, name: "speed", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_BLNIJMMNAGH", kind: "scalar", jsonName: "Unk3300BLNIJMMNAGH", T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "Unk3300_NHPEDPJMCOL", kind: "scalar", jsonName: "Unk3300NHPEDPJMCOL", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "target_pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { speed: 0, entityId: 0, unk3300BLNIJMMNAGH: 0, unk3300NHPEDPJMCOL: 0 };
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
                case /* float speed */ 4:
                    message.speed = reader.float();
                    break;
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* float Unk3300_BLNIJMMNAGH = 1 [json_name = "Unk3300BLNIJMMNAGH"];*/ 1:
                    message.unk3300BLNIJMMNAGH = reader.float();
                    break;
                case /* float Unk3300_NHPEDPJMCOL = 5 [json_name = "Unk3300NHPEDPJMCOL"];*/ 5:
                    message.unk3300NHPEDPJMCOL = reader.float();
                    break;
                case /* Vector target_pos */ 11:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
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
        /* float speed = 4; */
        if (message.speed !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.speed);
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entityId);
        /* float Unk3300_BLNIJMMNAGH = 1 [json_name = "Unk3300BLNIJMMNAGH"]; */
        if (message.unk3300BLNIJMMNAGH !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.unk3300BLNIJMMNAGH);
        /* float Unk3300_NHPEDPJMCOL = 5 [json_name = "Unk3300NHPEDPJMCOL"]; */
        if (message.unk3300NHPEDPJMCOL !== 0)
            writer.tag(5, runtime_1.WireType.Bit32).float(message.unk3300NHPEDPJMCOL);
        /* Vector target_pos = 11; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtLightCoreMove
 */
exports.EvtLightCoreMove = new EvtLightCoreMove$Type();
