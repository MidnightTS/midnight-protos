// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "FlightDailyRecord.proto" (syntax proto3)
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
 * @generated from protobuf message FlightDailyRecord
 */
export interface FlightDailyRecord {
    /**
     * @generated from protobuf field: uint32 best_score = 15;
     */
    bestScore: number;
    /**
     * @generated from protobuf field: uint32 group_id = 13;
     */
    groupId: number;
    /**
     * @generated from protobuf field: bool is_touched = 5;
     */
    isTouched: boolean;
    /**
     * @generated from protobuf field: uint32 start_time = 6;
     */
    startTime: number;
    /**
     * @generated from protobuf field: repeated uint32 watcher_id_list = 7;
     */
    watcherIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class FlightDailyRecord$Type extends MessageType<FlightDailyRecord> {
    constructor() {
        super("FlightDailyRecord", [
            { no: 15, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_touched", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "watcher_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FlightDailyRecord>): FlightDailyRecord {
        const message = { bestScore: 0, groupId: 0, isTouched: false, startTime: 0, watcherIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FlightDailyRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FlightDailyRecord): FlightDailyRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 best_score */ 15:
                    message.bestScore = reader.uint32();
                    break;
                case /* uint32 group_id */ 13:
                    message.groupId = reader.uint32();
                    break;
                case /* bool is_touched */ 5:
                    message.isTouched = reader.bool();
                    break;
                case /* uint32 start_time */ 6:
                    message.startTime = reader.uint32();
                    break;
                case /* repeated uint32 watcher_id_list */ 7:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.watcherIdList.push(reader.uint32());
                    else
                        message.watcherIdList.push(reader.uint32());
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
    internalBinaryWrite(message: FlightDailyRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 best_score = 15; */
        if (message.bestScore !== 0)
            writer.tag(15, WireType.Varint).uint32(message.bestScore);
        /* uint32 group_id = 13; */
        if (message.groupId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.groupId);
        /* bool is_touched = 5; */
        if (message.isTouched !== false)
            writer.tag(5, WireType.Varint).bool(message.isTouched);
        /* uint32 start_time = 6; */
        if (message.startTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.startTime);
        /* repeated uint32 watcher_id_list = 7; */
        if (message.watcherIdList.length) {
            writer.tag(7, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.watcherIdList.length; i++)
                writer.uint32(message.watcherIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FlightDailyRecord
 */
export const FlightDailyRecord = new FlightDailyRecord$Type();