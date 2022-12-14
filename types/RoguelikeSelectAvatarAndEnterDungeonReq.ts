// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoguelikeSelectAvatarAndEnterDungeonReq.proto" (syntax proto3)
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
 *   CMD_ID = 8988;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message RoguelikeSelectAvatarAndEnterDungeonReq
 */
export interface RoguelikeSelectAvatarAndEnterDungeonReq {
    /**
     * @generated from protobuf field: uint32 stage_id = 1;
     */
    stageId: number;
    /**
     * @generated from protobuf field: repeated uint64 onstage_avatar_guid_list = 12;
     */
    onstageAvatarGuidList: bigint[];
    /**
     * @generated from protobuf field: repeated uint64 backstage_avatar_guid_list = 4;
     */
    backstageAvatarGuidList: bigint[];
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeSelectAvatarAndEnterDungeonReq$Type extends MessageType<RoguelikeSelectAvatarAndEnterDungeonReq> {
    constructor() {
        super("RoguelikeSelectAvatarAndEnterDungeonReq", [
            { no: 1, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "onstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "backstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<RoguelikeSelectAvatarAndEnterDungeonReq>): RoguelikeSelectAvatarAndEnterDungeonReq {
        const message = { stageId: 0, onstageAvatarGuidList: [], backstageAvatarGuidList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeSelectAvatarAndEnterDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeSelectAvatarAndEnterDungeonReq): RoguelikeSelectAvatarAndEnterDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stage_id */ 1:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated uint64 onstage_avatar_guid_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 backstage_avatar_guid_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: RoguelikeSelectAvatarAndEnterDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stage_id = 1; */
        if (message.stageId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.stageId);
        /* repeated uint64 onstage_avatar_guid_list = 12; */
        if (message.onstageAvatarGuidList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.onstageAvatarGuidList.length; i++)
                writer.uint64(message.onstageAvatarGuidList[i]);
            writer.join();
        }
        /* repeated uint64 backstage_avatar_guid_list = 4; */
        if (message.backstageAvatarGuidList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backstageAvatarGuidList.length; i++)
                writer.uint64(message.backstageAvatarGuidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeSelectAvatarAndEnterDungeonReq
 */
export const RoguelikeSelectAvatarAndEnterDungeonReq = new RoguelikeSelectAvatarAndEnterDungeonReq$Type();
