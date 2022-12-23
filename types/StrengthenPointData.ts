// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "StrengthenPointData.proto" (syntax proto3)
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
 * @generated from protobuf message StrengthenPointData
 */
export interface StrengthenPointData {
    /**
     * @generated from protobuf field: uint32 Unk3300_HIKDEKIPCPB = 1 [json_name = "Unk3300HIKDEKIPCPB"];
     */
    unk3300HIKDEKIPCPB: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NNKPOLLBLDO = 10 [json_name = "Unk3300NNKPOLLBLDO"];
     */
    unk3300NNKPOLLBLDO: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class StrengthenPointData$Type extends MessageType<StrengthenPointData> {
    constructor() {
        super("StrengthenPointData", [
            { no: 1, name: "Unk3300_HIKDEKIPCPB", kind: "scalar", jsonName: "Unk3300HIKDEKIPCPB", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_NNKPOLLBLDO", kind: "scalar", jsonName: "Unk3300NNKPOLLBLDO", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<StrengthenPointData>): StrengthenPointData {
        const message = { unk3300HIKDEKIPCPB: 0, unk3300NNKPOLLBLDO: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StrengthenPointData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StrengthenPointData): StrengthenPointData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_HIKDEKIPCPB = 1 [json_name = "Unk3300HIKDEKIPCPB"];*/ 1:
                    message.unk3300HIKDEKIPCPB = reader.uint32();
                    break;
                case /* uint32 Unk3300_NNKPOLLBLDO = 10 [json_name = "Unk3300NNKPOLLBLDO"];*/ 10:
                    message.unk3300NNKPOLLBLDO = reader.uint32();
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
    internalBinaryWrite(message: StrengthenPointData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_HIKDEKIPCPB = 1 [json_name = "Unk3300HIKDEKIPCPB"]; */
        if (message.unk3300HIKDEKIPCPB !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300HIKDEKIPCPB);
        /* uint32 Unk3300_NNKPOLLBLDO = 10 [json_name = "Unk3300NNKPOLLBLDO"]; */
        if (message.unk3300NNKPOLLBLDO !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300NNKPOLLBLDO);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StrengthenPointData
 */
export const StrengthenPointData = new StrengthenPointData$Type();
