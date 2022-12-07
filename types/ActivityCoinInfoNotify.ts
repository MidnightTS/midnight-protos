// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ActivityCoinInfoNotify.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2018;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ActivityCoinInfoNotify
 */
export interface ActivityCoinInfoNotify {
    /**
     * @generated from protobuf field: uint32 schedule_id = 8;
     */
    scheduleId: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> activity_coin_map = 2;
     */
    activityCoinMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 activity_id = 4;
     */
    activityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityCoinInfoNotify$Type extends MessageType<ActivityCoinInfoNotify> {
    constructor() {
        super("ActivityCoinInfoNotify", [
            { no: 8, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "activity_coin_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityCoinInfoNotify>): ActivityCoinInfoNotify {
        const message = { scheduleId: 0, activityCoinMap: {}, activityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityCoinInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityCoinInfoNotify): ActivityCoinInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 schedule_id */ 8:
                    message.scheduleId = reader.uint32();
                    break;
                case /* map<uint32, uint32> activity_coin_map */ 2:
                    this.binaryReadMap2(message.activityCoinMap, reader, options);
                    break;
                case /* uint32 activity_id */ 4:
                    message.activityId = reader.uint32();
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
    private binaryReadMap2(map: ActivityCoinInfoNotify["activityCoinMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ActivityCoinInfoNotify["activityCoinMap"] | undefined, val: ActivityCoinInfoNotify["activityCoinMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityCoinInfoNotify.activity_coin_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: ActivityCoinInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 schedule_id = 8; */
        if (message.scheduleId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.scheduleId);
        /* map<uint32, uint32> activity_coin_map = 2; */
        for (let k of Object.keys(message.activityCoinMap))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.activityCoinMap[k as any]).join();
        /* uint32 activity_id = 4; */
        if (message.activityId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.activityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityCoinInfoNotify
 */
export const ActivityCoinInfoNotify = new ActivityCoinInfoNotify$Type();
