"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityAppliedModifier = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ModifierDurability_1 = require("./ModifierDurability");
const AbilityAttachedModifier_1 = require("./AbilityAttachedModifier");
const AbilityString_1 = require("./AbilityString");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAppliedModifier$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityAppliedModifier", [
            { no: 1, name: "modifier_local_id", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "parent_ability_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "parent_ability_name", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 4, name: "parent_ability_override", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 5, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "instanced_modifier_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "exist_duration", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "attached_instanced_modifier", kind: "message", T: () => AbilityAttachedModifier_1.AbilityAttachedModifier },
            { no: 9, name: "apply_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_attached_parent_ability", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "modifier_durability", kind: "message", T: () => ModifierDurability_1.ModifierDurability },
            { no: 12, name: "sbuff_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
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
                case /* optional int32 modifier_local_id */ 1:
                    message.modifierLocalId = reader.int32();
                    break;
                case /* optional uint32 parent_ability_entity_id */ 2:
                    message.parentAbilityEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_name */ 3:
                    message.parentAbilityName = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityName);
                    break;
                case /* optional com.midnights.game.AbilityString parent_ability_override */ 4:
                    message.parentAbilityOverride = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityOverride);
                    break;
                case /* optional uint32 instanced_ability_id */ 5:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* optional uint32 instanced_modifier_id */ 6:
                    message.instancedModifierId = reader.uint32();
                    break;
                case /* optional float exist_duration */ 7:
                    message.existDuration = reader.float();
                    break;
                case /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier */ 8:
                    message.attachedInstancedModifier = AbilityAttachedModifier_1.AbilityAttachedModifier.internalBinaryRead(reader, reader.uint32(), options, message.attachedInstancedModifier);
                    break;
                case /* optional uint32 apply_entity_id */ 9:
                    message.applyEntityId = reader.uint32();
                    break;
                case /* optional bool is_attached_parent_ability */ 10:
                    message.isAttachedParentAbility = reader.bool();
                    break;
                case /* optional com.midnights.game.ModifierDurability modifier_durability */ 11:
                    message.modifierDurability = ModifierDurability_1.ModifierDurability.internalBinaryRead(reader, reader.uint32(), options, message.modifierDurability);
                    break;
                case /* optional uint32 sbuff_uid */ 12:
                    message.sbuffUid = reader.uint32();
                    break;
                case /* optional bool is_serverbuff_modifier */ 13:
                    message.isServerbuffModifier = reader.bool();
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
        /* optional int32 modifier_local_id = 1; */
        if (message.modifierLocalId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.modifierLocalId);
        /* optional uint32 parent_ability_entity_id = 2; */
        if (message.parentAbilityEntityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.parentAbilityEntityId);
        /* optional com.midnights.game.AbilityString parent_ability_name = 3; */
        if (message.parentAbilityName)
            AbilityString_1.AbilityString.internalBinaryWrite(message.parentAbilityName, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString parent_ability_override = 4; */
        if (message.parentAbilityOverride)
            AbilityString_1.AbilityString.internalBinaryWrite(message.parentAbilityOverride, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 instanced_ability_id = 5; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        /* optional uint32 instanced_modifier_id = 6; */
        if (message.instancedModifierId !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        /* optional float exist_duration = 7; */
        if (message.existDuration !== undefined)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.existDuration);
        /* optional com.midnights.game.AbilityAttachedModifier attached_instanced_modifier = 8; */
        if (message.attachedInstancedModifier)
            AbilityAttachedModifier_1.AbilityAttachedModifier.internalBinaryWrite(message.attachedInstancedModifier, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 apply_entity_id = 9; */
        if (message.applyEntityId !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.applyEntityId);
        /* optional bool is_attached_parent_ability = 10; */
        if (message.isAttachedParentAbility !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAttachedParentAbility);
        /* optional com.midnights.game.ModifierDurability modifier_durability = 11; */
        if (message.modifierDurability)
            ModifierDurability_1.ModifierDurability.internalBinaryWrite(message.modifierDurability, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 sbuff_uid = 12; */
        if (message.sbuffUid !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sbuffUid);
        /* optional bool is_serverbuff_modifier = 13; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAppliedModifier
 */
exports.AbilityAppliedModifier = new AbilityAppliedModifier$Type();
