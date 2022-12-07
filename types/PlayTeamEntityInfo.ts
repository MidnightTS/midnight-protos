// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayTeamEntityInfo.proto" (syntax proto3)
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
import { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
/**
 * @generated from protobuf message PlayTeamEntityInfo
 */
export interface PlayTeamEntityInfo {
    /**
     * @generated from protobuf field: uint32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint32 player_uid = 2;
     */
    playerUid: number;
    /**
     * @generated from protobuf field: uint32 authority_peer_id = 3;
     */
    authorityPeerId: number;
    /**
     * @generated from protobuf field: uint32 gadget_config_id = 5;
     */
    gadgetConfigId: number;
    /**
     * @generated from protobuf field: AbilitySyncStateInfo ability_info = 6;
     */
    abilityInfo?: AbilitySyncStateInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayTeamEntityInfo$Type extends MessageType<PlayTeamEntityInfo> {
    constructor() {
        super("PlayTeamEntityInfo", [
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "authority_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gadget_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "ability_info", kind: "message", T: () => AbilitySyncStateInfo }
        ]);
    }
    create(value?: PartialMessage<PlayTeamEntityInfo>): PlayTeamEntityInfo {
        const message = { entityId: 0, playerUid: 0, authorityPeerId: 0, gadgetConfigId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayTeamEntityInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayTeamEntityInfo): PlayTeamEntityInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 player_uid */ 2:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint32 authority_peer_id */ 3:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* uint32 gadget_config_id */ 5:
                    message.gadgetConfigId = reader.uint32();
                    break;
                case /* AbilitySyncStateInfo ability_info */ 6:
                    message.abilityInfo = AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
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
    internalBinaryWrite(message: PlayTeamEntityInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.entityId);
        /* uint32 player_uid = 2; */
        if (message.playerUid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.playerUid);
        /* uint32 authority_peer_id = 3; */
        if (message.authorityPeerId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.authorityPeerId);
        /* uint32 gadget_config_id = 5; */
        if (message.gadgetConfigId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.gadgetConfigId);
        /* AbilitySyncStateInfo ability_info = 6; */
        if (message.abilityInfo)
            AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayTeamEntityInfo
 */
export const PlayTeamEntityInfo = new PlayTeamEntityInfo$Type();