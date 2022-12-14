// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EntityAiSyncNotify.proto" (syntax proto3)
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
import { AiSyncInfo } from "./AiSyncInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 304;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EntityAiSyncNotify
 */
export interface EntityAiSyncNotify {
    /**
     * @generated from protobuf field: repeated AiSyncInfo info_list = 14;
     */
    infoList: AiSyncInfo[];
    /**
     * @generated from protobuf field: repeated uint32 local_avatar_alerted_monster_list = 13;
     */
    localAvatarAlertedMonsterList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class EntityAiSyncNotify$Type extends MessageType<EntityAiSyncNotify> {
    constructor() {
        super("EntityAiSyncNotify", [
            { no: 14, name: "info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AiSyncInfo },
            { no: 13, name: "local_avatar_alerted_monster_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EntityAiSyncNotify>): EntityAiSyncNotify {
        const message = { infoList: [], localAvatarAlertedMonsterList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EntityAiSyncNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityAiSyncNotify): EntityAiSyncNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated AiSyncInfo info_list */ 14:
                    message.infoList.push(AiSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 local_avatar_alerted_monster_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.localAvatarAlertedMonsterList.push(reader.uint32());
                    else
                        message.localAvatarAlertedMonsterList.push(reader.uint32());
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
    internalBinaryWrite(message: EntityAiSyncNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated AiSyncInfo info_list = 14; */
        for (let i = 0; i < message.infoList.length; i++)
            AiSyncInfo.internalBinaryWrite(message.infoList[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 local_avatar_alerted_monster_list = 13; */
        if (message.localAvatarAlertedMonsterList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.localAvatarAlertedMonsterList.length; i++)
                writer.uint32(message.localAvatarAlertedMonsterList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityAiSyncNotify
 */
export const EntityAiSyncNotify = new EntityAiSyncNotify$Type();
