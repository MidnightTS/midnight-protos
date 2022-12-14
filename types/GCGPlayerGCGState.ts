// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGPlayerGCGState.proto" (syntax proto3)
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
 * @generated from protobuf message GCGPlayerGCGState
 */
export interface GCGPlayerGCGState {
    /**
     * @generated from protobuf field: uint32 uid = 14;
     */
    uid: number;
    /**
     * @generated from protobuf field: bool Unk3300_GIKOMFNNAAA = 11 [json_name = "Unk3300GIKOMFNNAAA"];
     */
    unk3300GIKOMFNNAAA: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_DEKGMKCCGEG = 4 [json_name = "Unk3300DEKGMKCCGEG"];
     */
    unk3300DEKGMKCCGEG: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerGCGState$Type extends MessageType<GCGPlayerGCGState> {
    constructor() {
        super("GCGPlayerGCGState", [
            { no: 14, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_GIKOMFNNAAA", kind: "scalar", jsonName: "Unk3300GIKOMFNNAAA", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_DEKGMKCCGEG", kind: "scalar", jsonName: "Unk3300DEKGMKCCGEG", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<GCGPlayerGCGState>): GCGPlayerGCGState {
        const message = { uid: 0, unk3300GIKOMFNNAAA: false, unk3300DEKGMKCCGEG: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGPlayerGCGState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGPlayerGCGState): GCGPlayerGCGState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 14:
                    message.uid = reader.uint32();
                    break;
                case /* bool Unk3300_GIKOMFNNAAA = 11 [json_name = "Unk3300GIKOMFNNAAA"];*/ 11:
                    message.unk3300GIKOMFNNAAA = reader.bool();
                    break;
                case /* bool Unk3300_DEKGMKCCGEG = 4 [json_name = "Unk3300DEKGMKCCGEG"];*/ 4:
                    message.unk3300DEKGMKCCGEG = reader.bool();
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
    internalBinaryWrite(message: GCGPlayerGCGState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 14; */
        if (message.uid !== 0)
            writer.tag(14, WireType.Varint).uint32(message.uid);
        /* bool Unk3300_GIKOMFNNAAA = 11 [json_name = "Unk3300GIKOMFNNAAA"]; */
        if (message.unk3300GIKOMFNNAAA !== false)
            writer.tag(11, WireType.Varint).bool(message.unk3300GIKOMFNNAAA);
        /* bool Unk3300_DEKGMKCCGEG = 4 [json_name = "Unk3300DEKGMKCCGEG"]; */
        if (message.unk3300DEKGMKCCGEG !== false)
            writer.tag(4, WireType.Varint).bool(message.unk3300DEKGMKCCGEG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayerGCGState
 */
export const GCGPlayerGCGState = new GCGPlayerGCGState$Type();
