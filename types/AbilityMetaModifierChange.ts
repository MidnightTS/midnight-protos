// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityMetaModifierChange.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ModifierAction } from "./ModifierAction";
import { AbilityString } from "./AbilityString";
import { ModifierProperty } from "./ModifierProperty";
import { AbilityAttachedModifier } from "./AbilityAttachedModifier";
/**
 * @generated from protobuf message AbilityMetaModifierChange
 */
export interface AbilityMetaModifierChange {
    /**
     * @generated from protobuf field: AbilityAttachedModifier attached_instanced_modifier = 3;
     */
    attachedInstancedModifier?: AbilityAttachedModifier;
    /**
     * @generated from protobuf field: bool is_attached_parent_ability = 5;
     */
    isAttachedParentAbility: boolean;
    /**
     * @generated from protobuf field: repeated ModifierProperty properties = 14;
     */
    properties: ModifierProperty[];
    /**
     * @generated from protobuf field: bool Unk3300_NOPKODKOHJK = 12 [json_name = "Unk3300NOPKODKOHJK"];
     */
    unk3300NOPKODKOHJK: boolean;
    /**
     * @generated from protobuf field: int32 modifier_local_id = 2;
     */
    modifierLocalId: number;
    /**
     * @generated from protobuf field: bool Unk3300_PBNENPBMNCI = 8 [json_name = "Unk3300PBNENPBMNCI"];
     */
    unk3300PBNENPBMNCI: boolean;
    /**
     * @generated from protobuf field: AbilityString parent_ability_name = 13;
     */
    parentAbilityName?: AbilityString;
    /**
     * @generated from protobuf field: uint32 server_buff_uid = 9;
     */
    serverBuffUid: number;
    /**
     * @generated from protobuf field: uint32 apply_entity_id = 7;
     */
    applyEntityId: number;
    /**
     * @generated from protobuf field: AbilityString parent_ability_override = 15;
     */
    parentAbilityOverride?: AbilityString;
    /**
     * @generated from protobuf field: ModifierAction action = 4;
     */
    action: ModifierAction;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMetaModifierChange$Type extends MessageType<AbilityMetaModifierChange> {
    constructor() {
        super("AbilityMetaModifierChange", [
            { no: 3, name: "attached_instanced_modifier", kind: "message", T: () => AbilityAttachedModifier },
            { no: 5, name: "is_attached_parent_ability", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "properties", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ModifierProperty },
            { no: 12, name: "Unk3300_NOPKODKOHJK", kind: "scalar", jsonName: "Unk3300NOPKODKOHJK", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "modifier_local_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "Unk3300_PBNENPBMNCI", kind: "scalar", jsonName: "Unk3300PBNENPBMNCI", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "parent_ability_name", kind: "message", T: () => AbilityString },
            { no: 9, name: "server_buff_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "apply_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "parent_ability_override", kind: "message", T: () => AbilityString },
            { no: 4, name: "action", kind: "enum", T: () => ["ModifierAction", ModifierAction, "MODIFIER_ACTION_"] }
        ]);
    }
    create(value?: PartialMessage<AbilityMetaModifierChange>): AbilityMetaModifierChange {
        const message = { isAttachedParentAbility: false, properties: [], unk3300NOPKODKOHJK: false, modifierLocalId: 0, unk3300PBNENPBMNCI: false, serverBuffUid: 0, applyEntityId: 0, action: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityMetaModifierChange>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityMetaModifierChange): AbilityMetaModifierChange {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AbilityAttachedModifier attached_instanced_modifier */ 3:
                    message.attachedInstancedModifier = AbilityAttachedModifier.internalBinaryRead(reader, reader.uint32(), options, message.attachedInstancedModifier);
                    break;
                case /* bool is_attached_parent_ability */ 5:
                    message.isAttachedParentAbility = reader.bool();
                    break;
                case /* repeated ModifierProperty properties */ 14:
                    message.properties.push(ModifierProperty.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_NOPKODKOHJK = 12 [json_name = "Unk3300NOPKODKOHJK"];*/ 12:
                    message.unk3300NOPKODKOHJK = reader.bool();
                    break;
                case /* int32 modifier_local_id */ 2:
                    message.modifierLocalId = reader.int32();
                    break;
                case /* bool Unk3300_PBNENPBMNCI = 8 [json_name = "Unk3300PBNENPBMNCI"];*/ 8:
                    message.unk3300PBNENPBMNCI = reader.bool();
                    break;
                case /* AbilityString parent_ability_name */ 13:
                    message.parentAbilityName = AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityName);
                    break;
                case /* uint32 server_buff_uid */ 9:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* uint32 apply_entity_id */ 7:
                    message.applyEntityId = reader.uint32();
                    break;
                case /* AbilityString parent_ability_override */ 15:
                    message.parentAbilityOverride = AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.parentAbilityOverride);
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AbilityMetaModifierChange, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AbilityAttachedModifier attached_instanced_modifier = 3; */
        if (message.attachedInstancedModifier)
            AbilityAttachedModifier.internalBinaryWrite(message.attachedInstancedModifier, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool is_attached_parent_ability = 5; */
        if (message.isAttachedParentAbility !== false)
            writer.tag(5, WireType.Varint).bool(message.isAttachedParentAbility);
        /* repeated ModifierProperty properties = 14; */
        for (let i = 0; i < message.properties.length; i++)
            ModifierProperty.internalBinaryWrite(message.properties[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_NOPKODKOHJK = 12 [json_name = "Unk3300NOPKODKOHJK"]; */
        if (message.unk3300NOPKODKOHJK !== false)
            writer.tag(12, WireType.Varint).bool(message.unk3300NOPKODKOHJK);
        /* int32 modifier_local_id = 2; */
        if (message.modifierLocalId !== 0)
            writer.tag(2, WireType.Varint).int32(message.modifierLocalId);
        /* bool Unk3300_PBNENPBMNCI = 8 [json_name = "Unk3300PBNENPBMNCI"]; */
        if (message.unk3300PBNENPBMNCI !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300PBNENPBMNCI);
        /* AbilityString parent_ability_name = 13; */
        if (message.parentAbilityName)
            AbilityString.internalBinaryWrite(message.parentAbilityName, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* uint32 server_buff_uid = 9; */
        if (message.serverBuffUid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.serverBuffUid);
        /* uint32 apply_entity_id = 7; */
        if (message.applyEntityId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.applyEntityId);
        /* AbilityString parent_ability_override = 15; */
        if (message.parentAbilityOverride)
            AbilityString.internalBinaryWrite(message.parentAbilityOverride, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* ModifierAction action = 4; */
        if (message.action !== 0)
            writer.tag(4, WireType.Varint).int32(message.action);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMetaModifierChange
 */
export const AbilityMetaModifierChange = new AbilityMetaModifierChange$Type();