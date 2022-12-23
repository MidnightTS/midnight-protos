// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ActivityTakeWatcherRewardBatchRsp.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2090;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ActivityTakeWatcherRewardBatchRsp
 */
export interface ActivityTakeWatcherRewardBatchRsp {
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 activity_id = 10;
     */
    activityId: number;
    /**
     * @generated from protobuf field: repeated ItemParam item_list = 8;
     */
    itemList: ItemParam[];
    /**
     * @generated from protobuf field: repeated uint32 watcher_id_list = 13;
     */
    watcherIdList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityTakeWatcherRewardBatchRsp$Type extends MessageType<ActivityTakeWatcherRewardBatchRsp> {
    constructor() {
        super("ActivityTakeWatcherRewardBatchRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 13, name: "watcher_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityTakeWatcherRewardBatchRsp>): ActivityTakeWatcherRewardBatchRsp {
        const message = { retcode: 0, activityId: 0, itemList: [], watcherIdList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityTakeWatcherRewardBatchRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityTakeWatcherRewardBatchRsp): ActivityTakeWatcherRewardBatchRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 activity_id */ 10:
                    message.activityId = reader.uint32();
                    break;
                case /* repeated ItemParam item_list */ 8:
                    message.itemList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 watcher_id_list */ 13:
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
    internalBinaryWrite(message: ActivityTakeWatcherRewardBatchRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        /* uint32 activity_id = 10; */
        if (message.activityId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.activityId);
        /* repeated ItemParam item_list = 8; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 watcher_id_list = 13; */
        if (message.watcherIdList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
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
 * @generated MessageType for protobuf message ActivityTakeWatcherRewardBatchRsp
 */
export const ActivityTakeWatcherRewardBatchRsp = new ActivityTakeWatcherRewardBatchRsp$Type();
