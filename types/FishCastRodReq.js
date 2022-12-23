"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishCastRodReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class FishCastRodReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FishCastRodReq", [
            { no: 7, name: "Unk3300_PJFHEDDFOBM", kind: "scalar", jsonName: "Unk3300PJFHEDDFOBM", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_ICALEIBJCDA", kind: "scalar", jsonName: "Unk3300ICALEIBJCDA", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "rod_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300PJFHEDDFOBM: 0, unk3300ICALEIBJCDA: 0, rodEntityId: 0 };
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
                case /* uint32 Unk3300_PJFHEDDFOBM = 7 [json_name = "Unk3300PJFHEDDFOBM"];*/ 7:
                    message.unk3300PJFHEDDFOBM = reader.uint32();
                    break;
                case /* uint32 Unk3300_ICALEIBJCDA = 13 [json_name = "Unk3300ICALEIBJCDA"];*/ 13:
                    message.unk3300ICALEIBJCDA = reader.uint32();
                    break;
                case /* Vector pos */ 11:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 rod_entity_id */ 8:
                    message.rodEntityId = reader.uint32();
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
        /* uint32 Unk3300_PJFHEDDFOBM = 7 [json_name = "Unk3300PJFHEDDFOBM"]; */
        if (message.unk3300PJFHEDDFOBM !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300PJFHEDDFOBM);
        /* uint32 Unk3300_ICALEIBJCDA = 13 [json_name = "Unk3300ICALEIBJCDA"]; */
        if (message.unk3300ICALEIBJCDA !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300ICALEIBJCDA);
        /* Vector pos = 11; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 rod_entity_id = 8; */
        if (message.rodEntityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.rodEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishCastRodReq
 */
exports.FishCastRodReq = new FishCastRodReq$Type();
