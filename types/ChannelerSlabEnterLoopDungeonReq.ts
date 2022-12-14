// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabEnterLoopDungeonReq.proto" (syntax proto3)
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
 *   CMD_ID = 8564;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ChannelerSlabEnterLoopDungeonReq
 */
export interface ChannelerSlabEnterLoopDungeonReq {
    /**
     * @generated from protobuf field: uint32 difficulty_id = 2;
     */
    difficultyId: number;
    /**
     * @generated from protobuf field: repeated uint32 condition_id_list = 10;
     */
    conditionIdList: number[];
    /**
     * @generated from protobuf field: uint32 point_id = 1;
     */
    pointId: number;
    /**
     * @generated from protobuf field: uint32 dungeon_index = 3;
     */
    dungeonIndex: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabEnterLoopDungeonReq$Type extends MessageType<ChannelerSlabEnterLoopDungeonReq> {
    constructor() {
        super("ChannelerSlabEnterLoopDungeonReq", [
            { no: 2, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "condition_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabEnterLoopDungeonReq>): ChannelerSlabEnterLoopDungeonReq {
        const message = { difficultyId: 0, conditionIdList: [], pointId: 0, dungeonIndex: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabEnterLoopDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabEnterLoopDungeonReq): ChannelerSlabEnterLoopDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 difficulty_id */ 2:
                    message.difficultyId = reader.uint32();
                    break;
                case /* repeated uint32 condition_id_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.conditionIdList.push(reader.uint32());
                    else
                        message.conditionIdList.push(reader.uint32());
                    break;
                case /* uint32 point_id */ 1:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 dungeon_index */ 3:
                    message.dungeonIndex = reader.uint32();
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
    internalBinaryWrite(message: ChannelerSlabEnterLoopDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 difficulty_id = 2; */
        if (message.difficultyId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.difficultyId);
        /* repeated uint32 condition_id_list = 10; */
        if (message.conditionIdList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.conditionIdList.length; i++)
                writer.uint32(message.conditionIdList[i]);
            writer.join();
        }
        /* uint32 point_id = 1; */
        if (message.pointId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.pointId);
        /* uint32 dungeon_index = 3; */
        if (message.dungeonIndex !== 0)
            writer.tag(3, WireType.Varint).uint32(message.dungeonIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabEnterLoopDungeonReq
 */
export const ChannelerSlabEnterLoopDungeonReq = new ChannelerSlabEnterLoopDungeonReq$Type();
