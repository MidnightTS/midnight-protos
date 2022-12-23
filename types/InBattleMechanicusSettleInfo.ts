// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InBattleMechanicusSettleInfo.proto" (syntax proto3)
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
import { MultistageSettleWatcherInfo } from "./MultistageSettleWatcherInfo";
/**
 * @generated from protobuf message InBattleMechanicusSettleInfo
 */
export interface InBattleMechanicusSettleInfo {
    /**
     * @generated from protobuf field: uint64 scene_time_ms = 12;
     */
    sceneTimeMs: bigint;
    /**
     * @generated from protobuf field: bool is_success = 13;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 group_id = 10;
     */
    groupId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EKAIAPLNIPM = 9 [json_name = "Unk3300EKAIAPLNIPM"];
     */
    unk3300EKAIAPLNIPM: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_HAEOPAOBBFE = 4 [json_name = "Unk3300HAEOPAOBBFE"];
     */
    unk3300HAEOPAOBBFE: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NAMBBHMJJLN = 11 [json_name = "Unk3300NAMBBHMJJLN"];
     */
    unk3300NAMBBHMJJLN: number;
    /**
     * @generated from protobuf field: uint32 play_index = 8;
     */
    playIndex: number;
    /**
     * @generated from protobuf field: repeated MultistageSettleWatcherInfo watcher_list = 15;
     */
    watcherList: MultistageSettleWatcherInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusSettleInfo$Type extends MessageType<InBattleMechanicusSettleInfo> {
    constructor() {
        super("InBattleMechanicusSettleInfo", [
            { no: 12, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_EKAIAPLNIPM", kind: "scalar", jsonName: "Unk3300EKAIAPLNIPM", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_HAEOPAOBBFE", kind: "scalar", jsonName: "Unk3300HAEOPAOBBFE", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NAMBBHMJJLN", kind: "scalar", jsonName: "Unk3300NAMBBHMJJLN", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MultistageSettleWatcherInfo }
        ]);
    }
    create(value?: PartialMessage<InBattleMechanicusSettleInfo>): InBattleMechanicusSettleInfo {
        const message = { sceneTimeMs: 0n, isSuccess: false, groupId: 0, unk3300EKAIAPLNIPM: 0, unk3300HAEOPAOBBFE: 0, unk3300NAMBBHMJJLN: 0, playIndex: 0, watcherList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleMechanicusSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleMechanicusSettleInfo): InBattleMechanicusSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 scene_time_ms */ 12:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* bool is_success */ 13:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 group_id */ 10:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKAIAPLNIPM = 9 [json_name = "Unk3300EKAIAPLNIPM"];*/ 9:
                    message.unk3300EKAIAPLNIPM = reader.uint32();
                    break;
                case /* uint32 Unk3300_HAEOPAOBBFE = 4 [json_name = "Unk3300HAEOPAOBBFE"];*/ 4:
                    message.unk3300HAEOPAOBBFE = reader.uint32();
                    break;
                case /* uint32 Unk3300_NAMBBHMJJLN = 11 [json_name = "Unk3300NAMBBHMJJLN"];*/ 11:
                    message.unk3300NAMBBHMJJLN = reader.uint32();
                    break;
                case /* uint32 play_index */ 8:
                    message.playIndex = reader.uint32();
                    break;
                case /* repeated MultistageSettleWatcherInfo watcher_list */ 15:
                    message.watcherList.push(MultistageSettleWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: InBattleMechanicusSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 scene_time_ms = 12; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(12, WireType.Varint).uint64(message.sceneTimeMs);
        /* bool is_success = 13; */
        if (message.isSuccess !== false)
            writer.tag(13, WireType.Varint).bool(message.isSuccess);
        /* uint32 group_id = 10; */
        if (message.groupId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.groupId);
        /* uint32 Unk3300_EKAIAPLNIPM = 9 [json_name = "Unk3300EKAIAPLNIPM"]; */
        if (message.unk3300EKAIAPLNIPM !== 0)
            writer.tag(9, WireType.Varint).uint32(message.unk3300EKAIAPLNIPM);
        /* uint32 Unk3300_HAEOPAOBBFE = 4 [json_name = "Unk3300HAEOPAOBBFE"]; */
        if (message.unk3300HAEOPAOBBFE !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300HAEOPAOBBFE);
        /* uint32 Unk3300_NAMBBHMJJLN = 11 [json_name = "Unk3300NAMBBHMJJLN"]; */
        if (message.unk3300NAMBBHMJJLN !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300NAMBBHMJJLN);
        /* uint32 play_index = 8; */
        if (message.playIndex !== 0)
            writer.tag(8, WireType.Varint).uint32(message.playIndex);
        /* repeated MultistageSettleWatcherInfo watcher_list = 15; */
        for (let i = 0; i < message.watcherList.length; i++)
            MultistageSettleWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusSettleInfo
 */
export const InBattleMechanicusSettleInfo = new InBattleMechanicusSettleInfo$Type();
