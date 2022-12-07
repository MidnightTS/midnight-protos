"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtSyncTransform = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtSyncTransform$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtSyncTransform", [
            { no: 15, name: "Unk3300_JAMKLNFBBAD", kind: "message", jsonName: "Unk3300JAMKLNFBBAD", T: () => Vector_1.Vector },
            { no: 13, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_PMHFLCOPFBC", kind: "message", jsonName: "Unk3300PMHFLCOPFBC", T: () => Vector_1.Vector }
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
                case /* Vector Unk3300_JAMKLNFBBAD = 15 [json_name = "Unk3300JAMKLNFBBAD"];*/ 15:
                    message.unk3300JAMKLNFBBAD = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300JAMKLNFBBAD);
                    break;
                case /* uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector Unk3300_PMHFLCOPFBC = 9 [json_name = "Unk3300PMHFLCOPFBC"];*/ 9:
                    message.unk3300PMHFLCOPFBC = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300PMHFLCOPFBC);
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
        /* Vector Unk3300_JAMKLNFBBAD = 15 [json_name = "Unk3300JAMKLNFBBAD"]; */
        if (message.unk3300JAMKLNFBBAD)
            Vector_1.Vector.internalBinaryWrite(message.unk3300JAMKLNFBBAD, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 13; */
        if (message.entityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector Unk3300_PMHFLCOPFBC = 9 [json_name = "Unk3300PMHFLCOPFBC"]; */
        if (message.unk3300PMHFLCOPFBC)
            Vector_1.Vector.internalBinaryWrite(message.unk3300PMHFLCOPFBC, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtSyncTransform
 */
exports.EvtSyncTransform = new EvtSyncTransform$Type();
