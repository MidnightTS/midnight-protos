// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DailyDungeonEntryInfo.proto" (syntax proto3)
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
import { DungeonEntryInfo } from "./DungeonEntryInfo";
/**
 * @generated from protobuf message DailyDungeonEntryInfo
 */
export interface DailyDungeonEntryInfo {
    /**
     * @generated from protobuf field: DungeonEntryInfo recommend_dungeon_entry_info = 6;
     */
    recommendDungeonEntryInfo?: DungeonEntryInfo;
    /**
     * @generated from protobuf field: uint32 dungeon_entry_config_id = 10;
     */
    dungeonEntryConfigId: number;
    /**
     * @generated from protobuf field: uint32 recommend_dungeon_id = 5;
     */
    recommendDungeonId: number;
    /**
     * @generated from protobuf field: uint32 dungeon_entry_id = 12;
     */
    dungeonEntryId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DailyDungeonEntryInfo$Type extends MessageType<DailyDungeonEntryInfo> {
    constructor() {
        super("DailyDungeonEntryInfo", [
            { no: 6, name: "recommend_dungeon_entry_info", kind: "message", T: () => DungeonEntryInfo },
            { no: 10, name: "dungeon_entry_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "recommend_dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_entry_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DailyDungeonEntryInfo>): DailyDungeonEntryInfo {
        const message = { dungeonEntryConfigId: 0, recommendDungeonId: 0, dungeonEntryId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DailyDungeonEntryInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DailyDungeonEntryInfo): DailyDungeonEntryInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* DungeonEntryInfo recommend_dungeon_entry_info */ 6:
                    message.recommendDungeonEntryInfo = DungeonEntryInfo.internalBinaryRead(reader, reader.uint32(), options, message.recommendDungeonEntryInfo);
                    break;
                case /* uint32 dungeon_entry_config_id */ 10:
                    message.dungeonEntryConfigId = reader.uint32();
                    break;
                case /* uint32 recommend_dungeon_id */ 5:
                    message.recommendDungeonId = reader.uint32();
                    break;
                case /* uint32 dungeon_entry_id */ 12:
                    message.dungeonEntryId = reader.uint32();
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
    internalBinaryWrite(message: DailyDungeonEntryInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* DungeonEntryInfo recommend_dungeon_entry_info = 6; */
        if (message.recommendDungeonEntryInfo)
            DungeonEntryInfo.internalBinaryWrite(message.recommendDungeonEntryInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_entry_config_id = 10; */
        if (message.dungeonEntryConfigId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.dungeonEntryConfigId);
        /* uint32 recommend_dungeon_id = 5; */
        if (message.recommendDungeonId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.recommendDungeonId);
        /* uint32 dungeon_entry_id = 12; */
        if (message.dungeonEntryId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.dungeonEntryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DailyDungeonEntryInfo
 */
export const DailyDungeonEntryInfo = new DailyDungeonEntryInfo$Type();
