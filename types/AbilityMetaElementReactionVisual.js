"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaElementReactionVisual = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaElementReactionVisual$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaElementReactionVisual", [
            { no: 6, name: "element_source_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "element_reactor_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "hit_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "element_reaction_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { elementSourceType: 0, elementReactorType: 0, hitIndex: 0, elementReactionType: 0 };
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
                case /* uint32 element_source_type */ 6:
                    message.elementSourceType = reader.uint32();
                    break;
                case /* uint32 element_reactor_type */ 1:
                    message.elementReactorType = reader.uint32();
                    break;
                case /* int32 hit_index */ 14:
                    message.hitIndex = reader.int32();
                    break;
                case /* uint32 element_reaction_type */ 2:
                    message.elementReactionType = reader.uint32();
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
        /* uint32 element_source_type = 6; */
        if (message.elementSourceType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.elementSourceType);
        /* uint32 element_reactor_type = 1; */
        if (message.elementReactorType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.elementReactorType);
        /* int32 hit_index = 14; */
        if (message.hitIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.hitIndex);
        /* uint32 element_reaction_type = 2; */
        if (message.elementReactionType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.elementReactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaElementReactionVisual
 */
exports.AbilityMetaElementReactionVisual = new AbilityMetaElementReactionVisual$Type();
