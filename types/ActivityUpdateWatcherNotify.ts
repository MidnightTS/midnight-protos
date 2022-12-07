// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ActivityUpdateWatcherNotify.proto" (syntax proto3)
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
import { ActivityWatcherInfo } from "./ActivityWatcherInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2103;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ActivityUpdateWatcherNotify
 */
export interface ActivityUpdateWatcherNotify {
    /**
     * @generated from protobuf field: uint32 activity_id = 9;
     */
    activityId: number;
    /**
     * @generated from protobuf field: ActivityWatcherInfo watcher_info = 5;
     */
    watcherInfo?: ActivityWatcherInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityUpdateWatcherNotify$Type extends MessageType<ActivityUpdateWatcherNotify> {
    constructor() {
        super("ActivityUpdateWatcherNotify", [
            { no: 9, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "watcher_info", kind: "message", T: () => ActivityWatcherInfo }
        ]);
    }
    create(value?: PartialMessage<ActivityUpdateWatcherNotify>): ActivityUpdateWatcherNotify {
        const message = { activityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityUpdateWatcherNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityUpdateWatcherNotify): ActivityUpdateWatcherNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 activity_id */ 9:
                    message.activityId = reader.uint32();
                    break;
                case /* ActivityWatcherInfo watcher_info */ 5:
                    message.watcherInfo = ActivityWatcherInfo.internalBinaryRead(reader, reader.uint32(), options, message.watcherInfo);
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
    internalBinaryWrite(message: ActivityUpdateWatcherNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 activity_id = 9; */
        if (message.activityId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.activityId);
        /* ActivityWatcherInfo watcher_info = 5; */
        if (message.watcherInfo)
            ActivityWatcherInfo.internalBinaryWrite(message.watcherInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityUpdateWatcherNotify
 */
export const ActivityUpdateWatcherNotify = new ActivityUpdateWatcherNotify$Type();