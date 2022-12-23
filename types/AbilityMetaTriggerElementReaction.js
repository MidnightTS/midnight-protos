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
            { no: 13, name: "element_source_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "element_reaction_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "element_reactor_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hitIndex: 0, triggerEntityId: 0, elementSourceType: 0, elementReactionType: 0, elementReactorType: 0 };
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
                case /* uint32 element_source_type */ 13:
                    message.elementSourceType = reader.uint32();
                    break;
                case /* uint32 element_reaction_type */ 12:
                    message.elementReactionType = reader.uint32();
                    break;
                case /* uint32 element_reactor_type */ 2:
                    message.elementReactorType = reader.uint32();
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
        /* uint32 element_source_type = 13; */
        if (message.elementSourceType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.elementSourceType);
        /* uint32 element_reaction_type = 12; */
        if (message.elementReactionType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.elementReactionType);
        /* uint32 element_reactor_type = 2; */
        if (message.elementReactorType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.elementReactorType);
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
