// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlantFlowerAcceptFlowerResultInfo.proto" (syntax proto3)
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
 * @generated from protobuf message PlantFlowerAcceptFlowerResultInfo
 */
export interface PlantFlowerAcceptFlowerResultInfo {
    /**
     * @generated from protobuf field: uint32 uid = 9;
     */
    uid: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_PALEJEDIAJP = 6 [json_name = "Unk3300PALEJEDIAJP"];
     */
    unk3300PALEJEDIAJP: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_ILAADDCOPKE = 7 [json_name = "Unk3300ILAADDCOPKE"];
     */
    unk3300ILAADDCOPKE: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerAcceptFlowerResultInfo$Type extends MessageType<PlantFlowerAcceptFlowerResultInfo> {
    constructor() {
        super("PlantFlowerAcceptFlowerResultInfo", [
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_PALEJEDIAJP", kind: "map", jsonName: "Unk3300PALEJEDIAJP", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "Unk3300_ILAADDCOPKE", kind: "map", jsonName: "Unk3300ILAADDCOPKE", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<PlantFlowerAcceptFlowerResultInfo>): PlantFlowerAcceptFlowerResultInfo {
        const message = { uid: 0, unk3300PALEJEDIAJP: {}, unk3300ILAADDCOPKE: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlantFlowerAcceptFlowerResultInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlantFlowerAcceptFlowerResultInfo): PlantFlowerAcceptFlowerResultInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> Unk3300_PALEJEDIAJP = 6 [json_name = "Unk3300PALEJEDIAJP"];*/ 6:
                    this.binaryReadMap6(message.unk3300PALEJEDIAJP, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_ILAADDCOPKE = 7 [json_name = "Unk3300ILAADDCOPKE"];*/ 7:
                    this.binaryReadMap7(message.unk3300ILAADDCOPKE, reader, options);
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
    private binaryReadMap6(map: PlantFlowerAcceptFlowerResultInfo["unk3300PALEJEDIAJP"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlantFlowerAcceptFlowerResultInfo["unk3300PALEJEDIAJP"] | undefined, val: PlantFlowerAcceptFlowerResultInfo["unk3300PALEJEDIAJP"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerAcceptFlowerResultInfo.Unk3300_PALEJEDIAJP");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap7(map: PlantFlowerAcceptFlowerResultInfo["unk3300ILAADDCOPKE"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PlantFlowerAcceptFlowerResultInfo["unk3300ILAADDCOPKE"] | undefined, val: PlantFlowerAcceptFlowerResultInfo["unk3300ILAADDCOPKE"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerAcceptFlowerResultInfo.Unk3300_ILAADDCOPKE");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: PlantFlowerAcceptFlowerResultInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> Unk3300_PALEJEDIAJP = 6 [json_name = "Unk3300PALEJEDIAJP"]; */
        for (let k of Object.keys(message.unk3300PALEJEDIAJP))
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300PALEJEDIAJP[k as any]).join();
        /* map<uint32, uint32> Unk3300_ILAADDCOPKE = 7 [json_name = "Unk3300ILAADDCOPKE"]; */
        for (let k of Object.keys(message.unk3300ILAADDCOPKE))
            writer.tag(7, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300ILAADDCOPKE[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerAcceptFlowerResultInfo
 */
export const PlantFlowerAcceptFlowerResultInfo = new PlantFlowerAcceptFlowerResultInfo$Type();