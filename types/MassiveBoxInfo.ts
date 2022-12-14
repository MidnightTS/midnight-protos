// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MassiveBoxInfo.proto" (syntax proto3)
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
 * @generated from protobuf message MassiveBoxInfo
 */
export interface MassiveBoxInfo {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: uint32 config_id = 2;
     */
    configId: number;
    /**
     * @generated from protobuf field: Vector center = 3;
     */
    center?: Vector;
    /**
     * @generated from protobuf field: Vector extents = 4;
     */
    extents?: Vector;
    /**
     * @generated from protobuf field: Vector up = 5;
     */
    up?: Vector;
    /**
     * @generated from protobuf field: Vector forward = 6;
     */
    forward?: Vector;
    /**
     * @generated from protobuf field: Vector right = 7;
     */
    right?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class MassiveBoxInfo$Type extends MessageType<MassiveBoxInfo> {
    constructor() {
        super("MassiveBoxInfo", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "center", kind: "message", T: () => Vector },
            { no: 4, name: "extents", kind: "message", T: () => Vector },
            { no: 5, name: "up", kind: "message", T: () => Vector },
            { no: 6, name: "forward", kind: "message", T: () => Vector },
            { no: 7, name: "right", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<MassiveBoxInfo>): MassiveBoxInfo {
        const message = { id: 0, configId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MassiveBoxInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MassiveBoxInfo): MassiveBoxInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 id */ 1:
                    message.id = reader.int32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* Vector center */ 3:
                    message.center = Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* Vector extents */ 4:
                    message.extents = Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                case /* Vector up */ 5:
                    message.up = Vector.internalBinaryRead(reader, reader.uint32(), options, message.up);
                    break;
                case /* Vector forward */ 6:
                    message.forward = Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                case /* Vector right */ 7:
                    message.right = Vector.internalBinaryRead(reader, reader.uint32(), options, message.right);
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
    internalBinaryWrite(message: MassiveBoxInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, WireType.Varint).int32(message.id);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.configId);
        /* Vector center = 3; */
        if (message.center)
            Vector.internalBinaryWrite(message.center, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Vector extents = 4; */
        if (message.extents)
            Vector.internalBinaryWrite(message.extents, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Vector up = 5; */
        if (message.up)
            Vector.internalBinaryWrite(message.up, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* Vector forward = 6; */
        if (message.forward)
            Vector.internalBinaryWrite(message.forward, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* Vector right = 7; */
        if (message.right)
            Vector.internalBinaryWrite(message.right, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassiveBoxInfo
 */
export const MassiveBoxInfo = new MassiveBoxInfo$Type();
