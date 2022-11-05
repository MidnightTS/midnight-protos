"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityAttachedModifier = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAttachedModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityAttachedModifier", [
            { no: 1, name: "is_invalid", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "attach_name_hash", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional bool is_invalid */ 1:
                    message.isInvalid = reader.bool();
                    break;
                case /* optional uint32 owner_entity_id */ 2:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 3:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 4:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* optional int32 attach_name_hash */ 5:
                    message.attachNameHash = reader.int32();
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
        /* optional bool is_invalid = 1; */
        if (message.isInvalid !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isInvalid);
        /* optional uint32 owner_entity_id = 2; */
        if (message.ownerEntityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 instanced_modifier_id = 3; */
        if (message.instancedModifierId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        /* optional bool is_serverbuff_modifier = 4; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        /* optional int32 attach_name_hash = 5; */
        if (message.attachNameHash !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.attachNameHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAttachedModifier
 */
exports.AbilityAttachedModifier = new AbilityAttachedModifier$Type();