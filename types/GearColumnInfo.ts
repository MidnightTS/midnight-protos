// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GearColumnInfo.proto" (syntax proto3)
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
 * @generated from protobuf message GearColumnInfo
 */
export interface GearColumnInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_GHIBPOIAIGF = 6 [json_name = "Unk3300GHIBPOIAIGF"];
     */
    unk3300GHIBPOIAIGF: number;
    /**
     * @generated from protobuf field: bool Unk3300_KEEGLHMBAKM = 8 [json_name = "Unk3300KEEGLHMBAKM"];
     */
    unk3300KEEGLHMBAKM: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_EDLLMBGNDEH = 2 [json_name = "Unk3300EDLLMBGNDEH"];
     */
    unk3300EDLLMBGNDEH: number;
    /**
     * @generated from protobuf field: uint32 gear_id = 7;
     */
    gearId: number;
    /**
     * @generated from protobuf field: bool Unk3300_HGIKKDOBANK = 15 [json_name = "Unk3300HGIKKDOBANK"];
     */
    unk3300HGIKKDOBANK: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class GearColumnInfo$Type extends MessageType<GearColumnInfo> {
    constructor() {
        super("GearColumnInfo", [
            { no: 6, name: "Unk3300_GHIBPOIAIGF", kind: "scalar", jsonName: "Unk3300GHIBPOIAIGF", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KEEGLHMBAKM", kind: "scalar", jsonName: "Unk3300KEEGLHMBAKM", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_EDLLMBGNDEH", kind: "scalar", jsonName: "Unk3300EDLLMBGNDEH", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gear_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HGIKKDOBANK", kind: "scalar", jsonName: "Unk3300HGIKKDOBANK", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<GearColumnInfo>): GearColumnInfo {
        const message = { unk3300GHIBPOIAIGF: 0, unk3300KEEGLHMBAKM: false, unk3300EDLLMBGNDEH: 0, gearId: 0, unk3300HGIKKDOBANK: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GearColumnInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GearColumnInfo): GearColumnInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_GHIBPOIAIGF = 6 [json_name = "Unk3300GHIBPOIAIGF"];*/ 6:
                    message.unk3300GHIBPOIAIGF = reader.uint32();
                    break;
                case /* bool Unk3300_KEEGLHMBAKM = 8 [json_name = "Unk3300KEEGLHMBAKM"];*/ 8:
                    message.unk3300KEEGLHMBAKM = reader.bool();
                    break;
                case /* uint32 Unk3300_EDLLMBGNDEH = 2 [json_name = "Unk3300EDLLMBGNDEH"];*/ 2:
                    message.unk3300EDLLMBGNDEH = reader.uint32();
                    break;
                case /* uint32 gear_id */ 7:
                    message.gearId = reader.uint32();
                    break;
                case /* bool Unk3300_HGIKKDOBANK = 15 [json_name = "Unk3300HGIKKDOBANK"];*/ 15:
                    message.unk3300HGIKKDOBANK = reader.bool();
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
    internalBinaryWrite(message: GearColumnInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_GHIBPOIAIGF = 6 [json_name = "Unk3300GHIBPOIAIGF"]; */
        if (message.unk3300GHIBPOIAIGF !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300GHIBPOIAIGF);
        /* bool Unk3300_KEEGLHMBAKM = 8 [json_name = "Unk3300KEEGLHMBAKM"]; */
        if (message.unk3300KEEGLHMBAKM !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300KEEGLHMBAKM);
        /* uint32 Unk3300_EDLLMBGNDEH = 2 [json_name = "Unk3300EDLLMBGNDEH"]; */
        if (message.unk3300EDLLMBGNDEH !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300EDLLMBGNDEH);
        /* uint32 gear_id = 7; */
        if (message.gearId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.gearId);
        /* bool Unk3300_HGIKKDOBANK = 15 [json_name = "Unk3300HGIKKDOBANK"]; */
        if (message.unk3300HGIKKDOBANK !== false)
            writer.tag(15, WireType.Varint).bool(message.unk3300HGIKKDOBANK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearColumnInfo
 */
export const GearColumnInfo = new GearColumnInfo$Type();
