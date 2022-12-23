"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMetaModifierChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ModifierAction_1 = require("./ModifierAction");
const AbilityString_1 = require("./AbilityString");
const ModifierProperty_1 = require("./ModifierProperty");
const AbilityAttachedModifier_1 = require("./AbilityAttachedModifier");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierChange$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMetaModifierChange", [
            { no: 3, name: "attached_instanced_modifier", kind: "message", T: () => AbilityAttachedModifier_1.AbilityAttachedModifier },
            { no: 5, name: "is_attached_parent_ability", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "properties", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ModifierProperty_1.ModifierProperty },
            { no: 12, name: "is_mute_remote", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "modifier_local_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_durability_zero", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "parent_ability_name", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 9, name: "server_buff_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "apply_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "parent_ability_override", kind: "message", T: () => AbilityString_1.AbilityString },
            { no: 4, name: "action", kind: "enum", T: () => ["ModifierAction", ModifierAction_1.ModifierAction, "MODIFIER_ACTION_"] }
        ]);
    }
    create(value) {
        const message = { isAttachedParentAbility: false, properties: [], isMuteRemote: false, modifierLocalId: 0, isDurabilityZero: false, serverBuffUid: 0, applyEntityId: 0, action: 0 };
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
                case /* AbilityAttachedModifier attached_instanced_modifier */ 3:
                    message.attachedInstancedModifier = AbilityAttachedModifier_1.AbilityAttachedModifier.internalBinaryRead(reader, reader.uint32(), options, message.attachedInstancedModifier);
                    break;
                case /* bool is_attached_parent_ability */ 5:
                    message.isAttachedParentAbility = reader.bool();
                    break;
                case /* repeated ModifierProperty properties */ 14:
                    message.properties.push(ModifierProperty_1.ModifierProperty.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_mute_remote */ 12:
                    message.isMuteRemote = reader.bool();
                    break;
                case /* int32 modifier_local_id */ 2:
                    message.modifierLocalId = reader.int32();
                    break;
                case /* bool is_durability_zero */ 8:
                    message.isDurabilityZero = reader.bool();
                    break;
                case /* AbilityString parent_ability_name */ 13:
                    message.parentAbilityName = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityName);
                    break;
                case /* uint32 server_buff_uid */ 9:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* uint32 apply_entity_id */ 7:
                    message.applyEntityId = reader.uint32();
                    break;
                case /* AbilityString parent_ability_override */ 15:
                    message.parentAbilityOverride = AbilityString_1.AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityOverride);
                    break;
                case /* ModifierAction action */ 4:
                    message.action = reader.int32();
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
        /* AbilityAttachedModifier attached_instanced_modifier = 3; */
        if (message.attachedInstancedModifier)
            AbilityAttachedModifier_1.AbilityAttachedModifier.internalBinaryWrite(message.attachedInstancedModifier, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_attached_parent_ability = 5; */
        if (message.isAttachedParentAbility !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isAttachedParentAbility);
        /* repeated ModifierProperty properties = 14; */
        for (let i = 0; i < message.properties.length; i++)
            ModifierProperty_1.ModifierProperty.internalBinaryWrite(message.properties[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_mute_remote = 12; */
        if (message.isMuteRemote !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isMuteRemote);
        /* int32 modifier_local_id = 2; */
        if (message.modifierLocalId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.modifierLocalId);
        /* bool is_durability_zero = 8; */
        if (message.isDurabilityZero !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isDurabilityZero);
        /* AbilityString parent_ability_name = 13; */
        if (message.parentAbilityName)
            AbilityString_1.AbilityString.internalBinaryWrite(message.parentAbilityName, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 server_buff_uid = 9; */
        if (message.serverBuffUid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.serverBuffUid);
        /* uint32 apply_entity_id = 7; */
        if (message.applyEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.applyEntityId);
        /* AbilityString parent_ability_override = 15; */
        if (message.parentAbilityOverride)
            AbilityString_1.AbilityString.internalBinaryWrite(message.parentAbilityOverride, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ModifierAction action = 4; */
        if (message.action !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.action);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaModifierChange
 */
exports.AbilityMetaModifierChange = new AbilityMetaModifierChange$Type();
