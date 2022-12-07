// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ReunionDailyRefreshNotify.proto" (syntax proto3)
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
import { ReunionBriefInfo } from "./ReunionBriefInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5054;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ReunionDailyRefreshNotify
 */
export interface ReunionDailyRefreshNotify {
    /**
     * @generated from protobuf field: ReunionBriefInfo reunion_brief_info = 6;
     */
    reunionBriefInfo?: ReunionBriefInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class ReunionDailyRefreshNotify$Type extends MessageType<ReunionDailyRefreshNotify> {
    constructor() {
        super("ReunionDailyRefreshNotify", [
            { no: 6, name: "reunion_brief_info", kind: "message", T: () => ReunionBriefInfo }
        ]);
    }
    create(value?: PartialMessage<ReunionDailyRefreshNotify>): ReunionDailyRefreshNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReunionDailyRefreshNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReunionDailyRefreshNotify): ReunionDailyRefreshNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ReunionBriefInfo reunion_brief_info */ 6:
                    message.reunionBriefInfo = ReunionBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.reunionBriefInfo);
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
    internalBinaryWrite(message: ReunionDailyRefreshNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ReunionBriefInfo reunion_brief_info = 6; */
        if (message.reunionBriefInfo)
            ReunionBriefInfo.internalBinaryWrite(message.reunionBriefInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionDailyRefreshNotify
 */
export const ReunionDailyRefreshNotify = new ReunionDailyRefreshNotify$Type();
