// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "TowerFloorRecordChangeNotify.proto" (syntax proto3)
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
import { TowerFloorRecord } from "./TowerFloorRecord";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2430;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TowerFloorRecordChangeNotify
 */
export interface TowerFloorRecordChangeNotify {
    /**
     * @generated from protobuf field: bool is_finished_entrance_floor = 4;
     */
    isFinishedEntranceFloor: boolean;
    /**
     * @generated from protobuf field: repeated TowerFloorRecord tower_floor_record_list = 15;
     */
    towerFloorRecordList: TowerFloorRecord[];
}
// @generated message type with reflection information, may provide speed optimized methods
class TowerFloorRecordChangeNotify$Type extends MessageType<TowerFloorRecordChangeNotify> {
    constructor() {
        super("TowerFloorRecordChangeNotify", [
            { no: 4, name: "is_finished_entrance_floor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "tower_floor_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerFloorRecord }
        ]);
    }
    create(value?: PartialMessage<TowerFloorRecordChangeNotify>): TowerFloorRecordChangeNotify {
        const message = { isFinishedEntranceFloor: false, towerFloorRecordList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TowerFloorRecordChangeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TowerFloorRecordChangeNotify): TowerFloorRecordChangeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_finished_entrance_floor */ 4:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* repeated TowerFloorRecord tower_floor_record_list */ 15:
                    message.towerFloorRecordList.push(TowerFloorRecord.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: TowerFloorRecordChangeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_finished_entrance_floor = 4; */
        if (message.isFinishedEntranceFloor !== false)
            writer.tag(4, WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* repeated TowerFloorRecord tower_floor_record_list = 15; */
        for (let i = 0; i < message.towerFloorRecordList.length; i++)
            TowerFloorRecord.internalBinaryWrite(message.towerFloorRecordList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerFloorRecordChangeNotify
 */
export const TowerFloorRecordChangeNotify = new TowerFloorRecordChangeNotify$Type();