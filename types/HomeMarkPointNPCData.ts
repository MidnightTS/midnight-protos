// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeMarkPointNPCData.proto" (syntax proto3)
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
 * @generated from protobuf message HomeMarkPointNPCData
 */
export interface HomeMarkPointNPCData {
    /**
     * @generated from protobuf field: uint32 avatar_id = 1;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: uint32 costume_id = 2;
     */
    costumeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointNPCData$Type extends MessageType<HomeMarkPointNPCData> {
    constructor() {
        super("HomeMarkPointNPCData", [
            { no: 1, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeMarkPointNPCData>): HomeMarkPointNPCData {
        const message = { avatarId: 0, costumeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeMarkPointNPCData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeMarkPointNPCData): HomeMarkPointNPCData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 costume_id */ 2:
                    message.costumeId = reader.uint32();
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
    internalBinaryWrite(message: HomeMarkPointNPCData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 avatar_id = 1; */
        if (message.avatarId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.avatarId);
        /* uint32 costume_id = 2; */
        if (message.costumeId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeMarkPointNPCData
 */
export const HomeMarkPointNPCData = new HomeMarkPointNPCData$Type();
