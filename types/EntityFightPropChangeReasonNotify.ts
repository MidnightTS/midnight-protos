// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EntityFightPropChangeReasonNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ChangeEnergyReason } from "./ChangeEnergyReason";
import { ChangeHpReason } from "./ChangeHpReason";
import { PropChangeReason } from "./PropChangeReason";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1261;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message EntityFightPropChangeReasonNotify
 */
export interface EntityFightPropChangeReasonNotify {
    /**
     * @generated from protobuf field: uint32 prop_type = 5;
     */
    propType: number;
    /**
     * @generated from protobuf field: repeated uint32 param_list = 7;
     */
    paramList: number[];
    /**
     * @generated from protobuf field: uint32 entity_id = 8;
     */
    entityId: number;
    /**
     * @generated from protobuf field: PropChangeReason reason = 2;
     */
    reason: PropChangeReason;
    /**
     * @generated from protobuf field: ChangeHpReason change_hp_reason = 9;
     */
    changeHpReason: ChangeHpReason;
    /**
     * @generated from protobuf field: ChangeEnergyReason change_energy_reason = 12;
     */
    changeEnergyReason: ChangeEnergyReason;
    /**
     * @generated from protobuf field: float prop_delta = 10;
     */
    propDelta: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EntityFightPropChangeReasonNotify$Type extends MessageType<EntityFightPropChangeReasonNotify> {
    constructor() {
        super("EntityFightPropChangeReasonNotify", [
            { no: 5, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reason", kind: "enum", T: () => ["PropChangeReason", PropChangeReason, "PROP_CHANGE_REASON_"] },
            { no: 9, name: "change_hp_reason", kind: "enum", T: () => ["ChangeHpReason", ChangeHpReason, "CHANGE_HP_REASON_"] },
            { no: 12, name: "change_energy_reason", kind: "enum", T: () => ["ChangeEnergyReason", ChangeEnergyReason, "CHANGE_ENERGY_REASON_"] },
            { no: 10, name: "prop_delta", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<EntityFightPropChangeReasonNotify>): EntityFightPropChangeReasonNotify {
        const message = { propType: 0, paramList: [], entityId: 0, reason: 0, changeHpReason: 0, changeEnergyReason: 0, propDelta: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EntityFightPropChangeReasonNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityFightPropChangeReasonNotify): EntityFightPropChangeReasonNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 prop_type */ 5:
                    message.propType = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* PropChangeReason reason */ 2:
                    message.reason = reader.int32();
                    break;
                case /* ChangeHpReason change_hp_reason */ 9:
                    message.changeHpReason = reader.int32();
                    break;
                case /* ChangeEnergyReason change_energy_reason */ 12:
                    message.changeEnergyReason = reader.int32();
                    break;
                case /* float prop_delta */ 10:
                    message.propDelta = reader.float();
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
    internalBinaryWrite(message: EntityFightPropChangeReasonNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 prop_type = 5; */
        if (message.propType !== 0)
            writer.tag(5, WireType.Varint).uint32(message.propType);
        /* repeated uint32 param_list = 7; */
        if (message.paramList.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.entityId);
        /* PropChangeReason reason = 2; */
        if (message.reason !== 0)
            writer.tag(2, WireType.Varint).int32(message.reason);
        /* ChangeHpReason change_hp_reason = 9; */
        if (message.changeHpReason !== 0)
            writer.tag(9, WireType.Varint).int32(message.changeHpReason);
        /* ChangeEnergyReason change_energy_reason = 12; */
        if (message.changeEnergyReason !== 0)
            writer.tag(12, WireType.Varint).int32(message.changeEnergyReason);
        /* float prop_delta = 10; */
        if (message.propDelta !== 0)
            writer.tag(10, WireType.Bit32).float(message.propDelta);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityFightPropChangeReasonNotify
 */
export const EntityFightPropChangeReasonNotify = new EntityFightPropChangeReasonNotify$Type();