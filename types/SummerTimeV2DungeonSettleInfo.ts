// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SummerTimeV2DungeonSettleInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SummerTimeV2DungeonSettleInfo
 */
export interface SummerTimeV2DungeonSettleInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_JHBCHFHAGFO = 10 [json_name = "Unk3300JHBCHFHAGFO"];
     */
    unk3300JHBCHFHAGFO: number;
    /**
     * @generated from protobuf field: bool is_success = 1;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_BNNMNCKEHHO = 11 [json_name = "Unk3300BNNMNCKEHHO"];
     */
    unk3300BNNMNCKEHHO: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2DungeonSettleInfo$Type extends MessageType<SummerTimeV2DungeonSettleInfo> {
    constructor() {
        super("SummerTimeV2DungeonSettleInfo", [
            { no: 10, name: "Unk3300_JHBCHFHAGFO", kind: "scalar", jsonName: "Unk3300JHBCHFHAGFO", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "Unk3300_BNNMNCKEHHO", kind: "scalar", jsonName: "Unk3300BNNMNCKEHHO", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SummerTimeV2DungeonSettleInfo>): SummerTimeV2DungeonSettleInfo {
        const message = { unk3300JHBCHFHAGFO: 0, isSuccess: false, unk3300BNNMNCKEHHO: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SummerTimeV2DungeonSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SummerTimeV2DungeonSettleInfo): SummerTimeV2DungeonSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_JHBCHFHAGFO = 10 [json_name = "Unk3300JHBCHFHAGFO"];*/ 10:
                    message.unk3300JHBCHFHAGFO = reader.uint32();
                    break;
                case /* bool is_success */ 1:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_BNNMNCKEHHO = 11 [json_name = "Unk3300BNNMNCKEHHO"];*/ 11:
                    message.unk3300BNNMNCKEHHO = reader.uint32();
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
    internalBinaryWrite(message: SummerTimeV2DungeonSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_JHBCHFHAGFO = 10 [json_name = "Unk3300JHBCHFHAGFO"]; */
        if (message.unk3300JHBCHFHAGFO !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300JHBCHFHAGFO);
        /* bool is_success = 1; */
        if (message.isSuccess !== false)
            writer.tag(1, WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_BNNMNCKEHHO = 11 [json_name = "Unk3300BNNMNCKEHHO"]; */
        if (message.unk3300BNNMNCKEHHO !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300BNNMNCKEHHO);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2DungeonSettleInfo
 */
export const SummerTimeV2DungeonSettleInfo = new SummerTimeV2DungeonSettleInfo$Type();
