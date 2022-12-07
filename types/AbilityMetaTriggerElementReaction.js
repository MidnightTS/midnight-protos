"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaTriggerElementReaction = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaTriggerElementReaction$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaTriggerElementReaction", [
            { no: 7, name: "hit_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "trigger_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_PHKFGIHELFG", kind: "scalar", jsonName: "Unk3300PHKFGIHELFG", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_OGILJCJPHPB", kind: "scalar", jsonName: "Unk3300OGILJCJPHPB", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_DGBGNEHDODI", kind: "scalar", jsonName: "Unk3300DGBGNEHDODI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hitIndex: 0, triggerEntityId: 0, unk3300PHKFGIHELFG: 0, unk3300OGILJCJPHPB: 0, unk3300DGBGNEHDODI: 0 };
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
                case /* int32 hit_index */ 7:
                    message.hitIndex = reader.int32();
                    break;
                case /* uint32 trigger_entity_id */ 14:
                    message.triggerEntityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_PHKFGIHELFG = 13 [json_name = "Unk3300PHKFGIHELFG"];*/ 13:
                    message.unk3300PHKFGIHELFG = reader.uint32();
                    break;
                case /* uint32 Unk3300_OGILJCJPHPB = 12 [json_name = "Unk3300OGILJCJPHPB"];*/ 12:
                    message.unk3300OGILJCJPHPB = reader.uint32();
                    break;
                case /* uint32 Unk3300_DGBGNEHDODI = 2 [json_name = "Unk3300DGBGNEHDODI"];*/ 2:
                    message.unk3300DGBGNEHDODI = reader.uint32();
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
        /* int32 hit_index = 7; */
        if (message.hitIndex !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.hitIndex);
        /* uint32 trigger_entity_id = 14; */
        if (message.triggerEntityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.triggerEntityId);
        /* uint32 Unk3300_PHKFGIHELFG = 13 [json_name = "Unk3300PHKFGIHELFG"]; */
        if (message.unk3300PHKFGIHELFG !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300PHKFGIHELFG);
        /* uint32 Unk3300_OGILJCJPHPB = 12 [json_name = "Unk3300OGILJCJPHPB"]; */
        if (message.unk3300OGILJCJPHPB !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300OGILJCJPHPB);
        /* uint32 Unk3300_DGBGNEHDODI = 2 [json_name = "Unk3300DGBGNEHDODI"]; */
        if (message.unk3300DGBGNEHDODI !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300DGBGNEHDODI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaTriggerElementReaction
 */
exports.AbilityMetaTriggerElementReaction = new AbilityMetaTriggerElementReaction$Type();
