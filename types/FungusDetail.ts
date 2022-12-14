// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FungusDetail.proto" (syntax proto3)
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
 * @generated from protobuf message FungusDetail
 */
export interface FungusDetail {
    /**
     * @generated from protobuf field: uint32 name_id = 8;
     */
    nameId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EHNBDJPANKL = 2 [json_name = "Unk3300EHNBDJPANKL"];
     */
    unk3300EHNBDJPANKL: number;
    /**
     * @generated from protobuf field: uint32 fungus_id = 3;
     */
    fungusId: number;
    /**
     * @generated from protobuf field: bool is_cultivate = 7;
     */
    isCultivate: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_GCLBPDJDEDN = 13 [json_name = "Unk3300GCLBPDJDEDN"];
     */
    unk3300GCLBPDJDEDN: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusDetail$Type extends MessageType<FungusDetail> {
    constructor() {
        super("FungusDetail", [
            { no: 8, name: "name_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EHNBDJPANKL", kind: "scalar", jsonName: "Unk3300EHNBDJPANKL", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fungus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_cultivate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_GCLBPDJDEDN", kind: "scalar", jsonName: "Unk3300GCLBPDJDEDN", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FungusDetail>): FungusDetail {
        const message = { nameId: 0, unk3300EHNBDJPANKL: 0, fungusId: 0, isCultivate: false, unk3300GCLBPDJDEDN: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusDetail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusDetail): FungusDetail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 name_id */ 8:
                    message.nameId = reader.uint32();
                    break;
                case /* uint32 Unk3300_EHNBDJPANKL = 2 [json_name = "Unk3300EHNBDJPANKL"];*/ 2:
                    message.unk3300EHNBDJPANKL = reader.uint32();
                    break;
                case /* uint32 fungus_id */ 3:
                    message.fungusId = reader.uint32();
                    break;
                case /* bool is_cultivate */ 7:
                    message.isCultivate = reader.bool();
                    break;
                case /* uint32 Unk3300_GCLBPDJDEDN = 13 [json_name = "Unk3300GCLBPDJDEDN"];*/ 13:
                    message.unk3300GCLBPDJDEDN = reader.uint32();
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
    internalBinaryWrite(message: FungusDetail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 name_id = 8; */
        if (message.nameId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.nameId);
        /* uint32 Unk3300_EHNBDJPANKL = 2 [json_name = "Unk3300EHNBDJPANKL"]; */
        if (message.unk3300EHNBDJPANKL !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300EHNBDJPANKL);
        /* uint32 fungus_id = 3; */
        if (message.fungusId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.fungusId);
        /* bool is_cultivate = 7; */
        if (message.isCultivate !== false)
            writer.tag(7, WireType.Varint).bool(message.isCultivate);
        /* uint32 Unk3300_GCLBPDJDEDN = 13 [json_name = "Unk3300GCLBPDJDEDN"]; */
        if (message.unk3300GCLBPDJDEDN !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300GCLBPDJDEDN);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusDetail
 */
export const FungusDetail = new FungusDetail$Type();
