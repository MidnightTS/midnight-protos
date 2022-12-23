// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TowerCurLevelRecord.proto" (syntax proto3)
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
import { TowerTeam } from "./TowerTeam";
/**
 * @generated from protobuf message TowerCurLevelRecord
 */
export interface TowerCurLevelRecord {
    /**
     * @generated from protobuf field: repeated uint32 buff_id_list = 14;
     */
    buffIdList: number[];
    /**
     * @generated from protobuf field: bool is_upper_part = 4;
     */
    isUpperPart: boolean;
    /**
     * @generated from protobuf field: uint32 cur_level_index = 6;
     */
    curLevelIndex: number;
    /**
     * @generated from protobuf field: bool is_empty = 1;
     */
    isEmpty: boolean;
    /**
     * @generated from protobuf field: repeated TowerTeam tower_team_list = 8;
     */
    towerTeamList: TowerTeam[];
    /**
     * @generated from protobuf field: uint32 cur_floor_id = 9;
     */
    curFloorId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TowerCurLevelRecord$Type extends MessageType<TowerCurLevelRecord> {
    constructor() {
        super("TowerCurLevelRecord", [
            { no: 14, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_upper_part", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "cur_level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_empty", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "tower_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerTeam },
            { no: 9, name: "cur_floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TowerCurLevelRecord>): TowerCurLevelRecord {
        const message = { buffIdList: [], isUpperPart: false, curLevelIndex: 0, isEmpty: false, towerTeamList: [], curFloorId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TowerCurLevelRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TowerCurLevelRecord): TowerCurLevelRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 buff_id_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* bool is_upper_part */ 4:
                    message.isUpperPart = reader.bool();
                    break;
                case /* uint32 cur_level_index */ 6:
                    message.curLevelIndex = reader.uint32();
                    break;
                case /* bool is_empty */ 1:
                    message.isEmpty = reader.bool();
                    break;
                case /* repeated TowerTeam tower_team_list */ 8:
                    message.towerTeamList.push(TowerTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_floor_id */ 9:
                    message.curFloorId = reader.uint32();
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
    internalBinaryWrite(message: TowerCurLevelRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 buff_id_list = 14; */
        if (message.buffIdList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        /* bool is_upper_part = 4; */
        if (message.isUpperPart !== false)
            writer.tag(4, WireType.Varint).bool(message.isUpperPart);
        /* uint32 cur_level_index = 6; */
        if (message.curLevelIndex !== 0)
            writer.tag(6, WireType.Varint).uint32(message.curLevelIndex);
        /* bool is_empty = 1; */
        if (message.isEmpty !== false)
            writer.tag(1, WireType.Varint).bool(message.isEmpty);
        /* repeated TowerTeam tower_team_list = 8; */
        for (let i = 0; i < message.towerTeamList.length; i++)
            TowerTeam.internalBinaryWrite(message.towerTeamList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_floor_id = 9; */
        if (message.curFloorId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.curFloorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerCurLevelRecord
 */
export const TowerCurLevelRecord = new TowerCurLevelRecord$Type();
