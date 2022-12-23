// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ProudSkillChangeNotify.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1027;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ProudSkillChangeNotify
 */
export interface ProudSkillChangeNotify {
    /**
     * @generated from protobuf field: uint64 avatar_guid = 13;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: repeated uint32 proud_skill_list = 5;
     */
    proudSkillList: number[];
    /**
     * @generated from protobuf field: uint32 skill_depot_id = 12;
     */
    skillDepotId: number;
    /**
     * @generated from protobuf field: uint32 entity_id = 3;
     */
    entityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ProudSkillChangeNotify$Type extends MessageType<ProudSkillChangeNotify> {
    constructor() {
        super("ProudSkillChangeNotify", [
            { no: 13, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ProudSkillChangeNotify>): ProudSkillChangeNotify {
        const message = { avatarGuid: 0n, proudSkillList: [], skillDepotId: 0, entityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProudSkillChangeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProudSkillChangeNotify): ProudSkillChangeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* repeated uint32 proud_skill_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proudSkillList.push(reader.uint32());
                    else
                        message.proudSkillList.push(reader.uint32());
                    break;
                case /* uint32 skill_depot_id */ 12:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 3:
                    message.entityId = reader.uint32();
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
    internalBinaryWrite(message: ProudSkillChangeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 avatar_guid = 13; */
        if (message.avatarGuid !== 0n)
            writer.tag(13, WireType.Varint).uint64(message.avatarGuid);
        /* repeated uint32 proud_skill_list = 5; */
        if (message.proudSkillList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proudSkillList.length; i++)
                writer.uint32(message.proudSkillList[i]);
            writer.join();
        }
        /* uint32 skill_depot_id = 12; */
        if (message.skillDepotId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.skillDepotId);
        /* uint32 entity_id = 3; */
        if (message.entityId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProudSkillChangeNotify
 */
export const ProudSkillChangeNotify = new ProudSkillChangeNotify$Type();
