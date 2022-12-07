// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "StopServerInfo.proto" (syntax proto3)
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
 * @generated from protobuf message StopServerInfo
 */
export interface StopServerInfo {
    /**
     * @generated from protobuf field: uint32 stop_begin_time = 1;
     */
    stopBeginTime: number;
    /**
     * @generated from protobuf field: uint32 stop_end_time = 2;
     */
    stopEndTime: number;
    /**
     * @generated from protobuf field: string url = 3;
     */
    url: string;
    /**
     * @generated from protobuf field: string content_msg = 4;
     */
    contentMsg: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class StopServerInfo$Type extends MessageType<StopServerInfo> {
    constructor() {
        super("StopServerInfo", [
            { no: 1, name: "stop_begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stop_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StopServerInfo>): StopServerInfo {
        const message = { stopBeginTime: 0, stopEndTime: 0, url: "", contentMsg: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StopServerInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StopServerInfo): StopServerInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stop_begin_time */ 1:
                    message.stopBeginTime = reader.uint32();
                    break;
                case /* uint32 stop_end_time */ 2:
                    message.stopEndTime = reader.uint32();
                    break;
                case /* string url */ 3:
                    message.url = reader.string();
                    break;
                case /* string content_msg */ 4:
                    message.contentMsg = reader.string();
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
    internalBinaryWrite(message: StopServerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stop_begin_time = 1; */
        if (message.stopBeginTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.stopBeginTime);
        /* uint32 stop_end_time = 2; */
        if (message.stopEndTime !== 0)
            writer.tag(2, WireType.Varint).uint32(message.stopEndTime);
        /* string url = 3; */
        if (message.url !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.url);
        /* string content_msg = 4; */
        if (message.contentMsg !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.contentMsg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StopServerInfo
 */
export const StopServerInfo = new StopServerInfo$Type();