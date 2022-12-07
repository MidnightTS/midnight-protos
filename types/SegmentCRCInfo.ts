// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SegmentCRCInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SegmentCRCInfo
 */
export interface SegmentCRCInfo {
    /**
     * @generated from protobuf field: uint32 size = 6;
     */
    size: number;
    /**
     * @generated from protobuf field: string crc = 8;
     */
    crc: string;
    /**
     * @generated from protobuf field: uint32 module = 4;
     */
    module: number;
    /**
     * @generated from protobuf field: int32 retcode = 3;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 offset = 9;
     */
    offset: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SegmentCRCInfo$Type extends MessageType<SegmentCRCInfo> {
    constructor() {
        super("SegmentCRCInfo", [
            { no: 6, name: "size", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "crc", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "module", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "offset", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SegmentCRCInfo>): SegmentCRCInfo {
        const message = { size: 0, crc: "", module: 0, retcode: 0, offset: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SegmentCRCInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SegmentCRCInfo): SegmentCRCInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 size */ 6:
                    message.size = reader.uint32();
                    break;
                case /* string crc */ 8:
                    message.crc = reader.string();
                    break;
                case /* uint32 module */ 4:
                    message.module = reader.uint32();
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 offset */ 9:
                    message.offset = reader.uint32();
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
    internalBinaryWrite(message: SegmentCRCInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 size = 6; */
        if (message.size !== 0)
            writer.tag(6, WireType.Varint).uint32(message.size);
        /* string crc = 8; */
        if (message.crc !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.crc);
        /* uint32 module = 4; */
        if (message.module !== 0)
            writer.tag(4, WireType.Varint).uint32(message.module);
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, WireType.Varint).int32(message.retcode);
        /* uint32 offset = 9; */
        if (message.offset !== 0)
            writer.tag(9, WireType.Varint).uint32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SegmentCRCInfo
 */
export const SegmentCRCInfo = new SegmentCRCInfo$Type();
