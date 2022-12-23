// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerCustomDungeonMuipData.proto" (syntax proto3)
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
import { CustomDungeonBattleRecordMuipData } from "./CustomDungeonBattleRecordMuipData";
/**
 * @generated from protobuf message PlayerCustomDungeonMuipData
 */
export interface PlayerCustomDungeonMuipData {
    /**
     * @generated from protobuf field: uint32 uid = 1;
     */
    uid: number;
    /**
     * @generated from protobuf field: repeated uint64 publish_dungeon_list = 2;
     */
    publishDungeonList: bigint[];
    /**
     * @generated from protobuf field: repeated uint64 store_dungeon_list = 3;
     */
    storeDungeonList: bigint[];
    /**
     * @generated from protobuf field: repeated CustomDungeonBattleRecordMuipData battle_record_list = 4;
     */
    battleRecordList: CustomDungeonBattleRecordMuipData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCustomDungeonMuipData$Type extends MessageType<PlayerCustomDungeonMuipData> {
    constructor() {
        super("PlayerCustomDungeonMuipData", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "publish_dungeon_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "store_dungeon_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "battle_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomDungeonBattleRecordMuipData }
        ]);
    }
    create(value?: PartialMessage<PlayerCustomDungeonMuipData>): PlayerCustomDungeonMuipData {
        const message = { uid: 0, publishDungeonList: [], storeDungeonList: [], battleRecordList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerCustomDungeonMuipData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerCustomDungeonMuipData): PlayerCustomDungeonMuipData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint64 publish_dungeon_list */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.publishDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.publishDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 store_dungeon_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.storeDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.storeDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated CustomDungeonBattleRecordMuipData battle_record_list */ 4:
                    message.battleRecordList.push(CustomDungeonBattleRecordMuipData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: PlayerCustomDungeonMuipData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, WireType.Varint).uint32(message.uid);
        /* repeated uint64 publish_dungeon_list = 2; */
        if (message.publishDungeonList.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.publishDungeonList.length; i++)
                writer.uint64(message.publishDungeonList[i]);
            writer.join();
        }
        /* repeated uint64 store_dungeon_list = 3; */
        if (message.storeDungeonList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.storeDungeonList.length; i++)
                writer.uint64(message.storeDungeonList[i]);
            writer.join();
        }
        /* repeated CustomDungeonBattleRecordMuipData battle_record_list = 4; */
        for (let i = 0; i < message.battleRecordList.length; i++)
            CustomDungeonBattleRecordMuipData.internalBinaryWrite(message.battleRecordList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCustomDungeonMuipData
 */
export const PlayerCustomDungeonMuipData = new PlayerCustomDungeonMuipData$Type();
