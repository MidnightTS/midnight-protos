"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerCreateGadgetToEquipPartNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TriggerCreateGadgetToEquipPartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("TriggerCreateGadgetToEquipPartNotify", [
            { no: 1, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "equip_part", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { gadgetEntityId: 0, equipPart: "", entityId: 0, gadgetId: 0 };
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
                case /* uint32 gadget_entity_id */ 1:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* string equip_part */ 12:
                    message.equipPart = reader.string();
                    break;
                case /* uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 gadget_id */ 11:
                    message.gadgetId = reader.uint32();
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
        /* uint32 gadget_entity_id = 1; */
        if (message.gadgetEntityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* string equip_part = 12; */
        if (message.equipPart !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.equipPart);
        /* uint32 entity_id = 6; */
        if (message.entityId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 gadget_id = 11; */
        if (message.gadgetId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TriggerCreateGadgetToEquipPartNotify
 */
exports.TriggerCreateGadgetToEquipPartNotify = new TriggerCreateGadgetToEquipPartNotify$Type();
