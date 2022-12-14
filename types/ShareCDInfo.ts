// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ShareCDInfo.proto" (syntax proto3)
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
 * @generated from protobuf message ShareCDInfo
 */
export interface ShareCDInfo {
    /**
     * @generated from protobuf field: uint64 cd_start_time = 1;
     */
    cdStartTime: bigint;
    /**
     * @generated from protobuf field: uint32 share_cd_id = 12;
     */
    shareCdId: number;
    /**
     * @generated from protobuf field: uint32 index = 13;
     */
    index: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ShareCDInfo$Type extends MessageType<ShareCDInfo> {
    constructor() {
        super("ShareCDInfo", [
            { no: 1, name: "cd_start_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "share_cd_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ShareCDInfo>): ShareCDInfo {
        const message = { cdStartTime: 0n, shareCdId: 0, index: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShareCDInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShareCDInfo): ShareCDInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 cd_start_time */ 1:
                    message.cdStartTime = reader.uint64().toBigInt();
                    break;
                case /* uint32 share_cd_id */ 12:
                    message.shareCdId = reader.uint32();
                    break;
                case /* uint32 index */ 13:
                    message.index = reader.uint32();
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
    internalBinaryWrite(message: ShareCDInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 cd_start_time = 1; */
        if (message.cdStartTime !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.cdStartTime);
        /* uint32 share_cd_id = 12; */
        if (message.shareCdId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.shareCdId);
        /* uint32 index = 13; */
        if (message.index !== 0)
            writer.tag(13, WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShareCDInfo
 */
export const ShareCDInfo = new ShareCDInfo$Type();
