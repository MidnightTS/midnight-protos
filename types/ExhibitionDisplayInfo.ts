// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ExhibitionDisplayInfo.proto" (syntax proto3)
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
 * @generated from protobuf message ExhibitionDisplayInfo
 */
export interface ExhibitionDisplayInfo {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: uint32 param = 2;
     */
    param: number;
    /**
     * @generated from protobuf field: uint32 detail_param = 3;
     */
    detailParam: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExhibitionDisplayInfo$Type extends MessageType<ExhibitionDisplayInfo> {
    constructor() {
        super("ExhibitionDisplayInfo", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "detail_param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExhibitionDisplayInfo>): ExhibitionDisplayInfo {
        const message = { id: 0, param: 0, detailParam: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExhibitionDisplayInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExhibitionDisplayInfo): ExhibitionDisplayInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* uint32 param */ 2:
                    message.param = reader.uint32();
                    break;
                case /* uint32 detail_param */ 3:
                    message.detailParam = reader.uint32();
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
    internalBinaryWrite(message: ExhibitionDisplayInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint32(message.id);
        /* uint32 param = 2; */
        if (message.param !== 0)
            writer.tag(2, WireType.Varint).uint32(message.param);
        /* uint32 detail_param = 3; */
        if (message.detailParam !== 0)
            writer.tag(3, WireType.Varint).uint32(message.detailParam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExhibitionDisplayInfo
 */
export const ExhibitionDisplayInfo = new ExhibitionDisplayInfo$Type();
