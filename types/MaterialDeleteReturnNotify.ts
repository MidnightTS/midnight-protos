// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MaterialDeleteReturnNotify.proto" (syntax proto3)
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
import { MaterialDeleteReturnType } from "./MaterialDeleteReturnType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 698;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message MaterialDeleteReturnNotify
 */
export interface MaterialDeleteReturnNotify {
    /**
     * @generated from protobuf field: MaterialDeleteReturnType type = 7;
     */
    type: MaterialDeleteReturnType;
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_OFOKFKBALJD = 12 [json_name = "Unk3300OFOKFKBALJD"];
     */
    unk3300OFOKFKBALJD: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_LAIHDKJAHAF = 8 [json_name = "Unk3300LAIHDKJAHAF"];
     */
    unk3300LAIHDKJAHAF: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteReturnNotify$Type extends MessageType<MaterialDeleteReturnNotify> {
    constructor() {
        super("MaterialDeleteReturnNotify", [
            { no: 7, name: "type", kind: "enum", T: () => ["MaterialDeleteReturnType", MaterialDeleteReturnType, "MATERIAL_DELETE_RETURN_TYPE_"] },
            { no: 12, name: "Unk3300_OFOKFKBALJD", kind: "map", jsonName: "Unk3300OFOKFKBALJD", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "Unk3300_LAIHDKJAHAF", kind: "map", jsonName: "Unk3300LAIHDKJAHAF", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<MaterialDeleteReturnNotify>): MaterialDeleteReturnNotify {
        const message = { type: 0, unk3300OFOKFKBALJD: {}, unk3300LAIHDKJAHAF: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MaterialDeleteReturnNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaterialDeleteReturnNotify): MaterialDeleteReturnNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* MaterialDeleteReturnType type */ 7:
                    message.type = reader.int32();
                    break;
                case /* map<uint32, uint32> Unk3300_OFOKFKBALJD = 12 [json_name = "Unk3300OFOKFKBALJD"];*/ 12:
                    this.binaryReadMap12(message.unk3300OFOKFKBALJD, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_LAIHDKJAHAF = 8 [json_name = "Unk3300LAIHDKJAHAF"];*/ 8:
                    this.binaryReadMap8(message.unk3300LAIHDKJAHAF, reader, options);
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
    private binaryReadMap12(map: MaterialDeleteReturnNotify["unk3300OFOKFKBALJD"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MaterialDeleteReturnNotify["unk3300OFOKFKBALJD"] | undefined, val: MaterialDeleteReturnNotify["unk3300OFOKFKBALJD"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteReturnNotify.Unk3300_OFOKFKBALJD");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap8(map: MaterialDeleteReturnNotify["unk3300LAIHDKJAHAF"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MaterialDeleteReturnNotify["unk3300LAIHDKJAHAF"] | undefined, val: MaterialDeleteReturnNotify["unk3300LAIHDKJAHAF"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteReturnNotify.Unk3300_LAIHDKJAHAF");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: MaterialDeleteReturnNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* MaterialDeleteReturnType type = 7; */
        if (message.type !== 0)
            writer.tag(7, WireType.Varint).int32(message.type);
        /* map<uint32, uint32> Unk3300_OFOKFKBALJD = 12 [json_name = "Unk3300OFOKFKBALJD"]; */
        for (let k of Object.keys(message.unk3300OFOKFKBALJD))
            writer.tag(12, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300OFOKFKBALJD[k as any]).join();
        /* map<uint32, uint32> Unk3300_LAIHDKJAHAF = 8 [json_name = "Unk3300LAIHDKJAHAF"]; */
        for (let k of Object.keys(message.unk3300LAIHDKJAHAF))
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300LAIHDKJAHAF[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteReturnNotify
 */
export const MaterialDeleteReturnNotify = new MaterialDeleteReturnNotify$Type();
