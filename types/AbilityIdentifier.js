"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityIdentifier = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityIdentifier$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityIdentifier", [
            { no: 4, name: "instanced_ability_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "modifier_owner_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_serverbuff_modifier", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "local_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "ability_caster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "instanced_modifier_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { instancedAbilityId: 0, modifierOwnerId: 0, isServerbuffModifier: false, localId: 0, abilityCasterId: 0, instancedModifierId: 0 };
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
                case /* uint32 instanced_ability_id */ 4:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* uint32 modifier_owner_id */ 10:
                    message.modifierOwnerId = reader.uint32();
                    break;
                case /* bool is_serverbuff_modifier */ 14:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* int32 local_id */ 7:
                    message.localId = reader.int32();
                    break;
                case /* uint32 ability_caster_id */ 1:
                    message.abilityCasterId = reader.uint32();
                    break;
                case /* uint32 instanced_modifier_id */ 5:
                    message.instancedModifierId = reader.uint32();
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
        /* uint32 instanced_ability_id = 4; */
        if (message.instancedAbilityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        /* uint32 modifier_owner_id = 10; */
        if (message.modifierOwnerId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.modifierOwnerId);
        /* bool is_serverbuff_modifier = 14; */
        if (message.isServerbuffModifier !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        /* int32 local_id = 7; */
        if (message.localId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.localId);
        /* uint32 ability_caster_id = 1; */
        if (message.abilityCasterId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.abilityCasterId);
        /* uint32 instanced_modifier_id = 5; */
        if (message.instancedModifierId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityIdentifier
 */
exports.AbilityIdentifier = new AbilityIdentifier$Type();
