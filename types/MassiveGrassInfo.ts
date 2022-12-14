// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MassiveGrassInfo.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * @generated from protobuf message MassiveGrassInfo
 */
export interface MassiveGrassInfo {
    /**
     * @generated from protobuf field: uint32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: Vector center = 2;
     */
    center?: Vector;
    /**
     * @generated from protobuf field: Vector size = 3;
     */
    size?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class MassiveGrassInfo$Type extends MessageType<MassiveGrassInfo> {
    constructor() {
        super("MassiveGrassInfo", [
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "center", kind: "message", T: () => Vector },
            { no: 3, name: "size", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<MassiveGrassInfo>): MassiveGrassInfo {
        const message = { id: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MassiveGrassInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MassiveGrassInfo): MassiveGrassInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* Vector center */ 2:
                    message.center = Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* Vector size */ 3:
                    message.size = Vector.internalBinaryRead(reader, reader.uint32(), options, message.size);
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
    internalBinaryWrite(message: MassiveGrassInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).uint32(message.id);
        /* Vector center = 2; */
        if (message.center)
            Vector.internalBinaryWrite(message.center, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Vector size = 3; */
        if (message.size)
            Vector.internalBinaryWrite(message.size, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassiveGrassInfo
 */
export const MassiveGrassInfo = new MassiveGrassInfo$Type();
