// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TeamEnterSceneInfo.proto" (syntax proto3)
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
import { AbilityControlBlock } from "./AbilityControlBlock";
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
/**
 * @generated from protobuf message TeamEnterSceneInfo
 */
export interface TeamEnterSceneInfo {
    /**
     * @generated from protobuf field: AbilitySyncStateInfo team_ability_info = 6;
     */
    teamAbilityInfo?: AbilitySyncStateInfo;
    /**
     * @generated from protobuf field: AbilityControlBlock ability_control_block = 5;
     */
    abilityControlBlock?: AbilityControlBlock;
    /**
     * @generated from protobuf field: uint32 team_entity_id = 11;
     */
    teamEntityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TeamEnterSceneInfo$Type extends MessageType<TeamEnterSceneInfo> {
    constructor() {
        super("TeamEnterSceneInfo", [
            { no: 6, name: "team_ability_info", kind: "message", T: () => AbilitySyncStateInfo },
            { no: 5, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock },
            { no: 11, name: "team_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TeamEnterSceneInfo>): TeamEnterSceneInfo {
        const message = { teamEntityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TeamEnterSceneInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TeamEnterSceneInfo): TeamEnterSceneInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AbilitySyncStateInfo team_ability_info */ 6:
                    message.teamAbilityInfo = AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamAbilityInfo);
                    break;
                case /* AbilityControlBlock ability_control_block */ 5:
                    message.abilityControlBlock = AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* uint32 team_entity_id */ 11:
                    message.teamEntityId = reader.uint32();
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
    internalBinaryWrite(message: TeamEnterSceneInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AbilitySyncStateInfo team_ability_info = 6; */
        if (message.teamAbilityInfo)
            AbilitySyncStateInfo.internalBinaryWrite(message.teamAbilityInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 5; */
        if (message.abilityControlBlock)
            AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint32 team_entity_id = 11; */
        if (message.teamEntityId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.teamEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TeamEnterSceneInfo
 */
export const TeamEnterSceneInfo = new TeamEnterSceneInfo$Type();
