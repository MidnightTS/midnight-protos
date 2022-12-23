// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ShapeBox.proto" (syntax proto3)
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
 * @generated from protobuf message ShapeBox
 */
export interface ShapeBox {
    /**
     * @generated from protobuf field: Vector center = 1;
     */
    center?: Vector;
    /**
     * @generated from protobuf field: Vector axis0 = 2;
     */
    axis0?: Vector;
    /**
     * @generated from protobuf field: Vector axis1 = 3;
     */
    axis1?: Vector;
    /**
     * @generated from protobuf field: Vector axis2 = 4;
     */
    axis2?: Vector;
    /**
     * @generated from protobuf field: Vector extents = 5;
     */
    extents?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class ShapeBox$Type extends MessageType<ShapeBox> {
    constructor() {
        super("ShapeBox", [
            { no: 1, name: "center", kind: "message", T: () => Vector },
            { no: 2, name: "axis0", kind: "message", T: () => Vector },
            { no: 3, name: "axis1", kind: "message", T: () => Vector },
            { no: 4, name: "axis2", kind: "message", T: () => Vector },
            { no: 5, name: "extents", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<ShapeBox>): ShapeBox {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ShapeBox>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ShapeBox): ShapeBox {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector center */ 1:
                    message.center = Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* Vector axis0 */ 2:
                    message.axis0 = Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis0);
                    break;
                case /* Vector axis1 */ 3:
                    message.axis1 = Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis1);
                    break;
                case /* Vector axis2 */ 4:
                    message.axis2 = Vector.internalBinaryRead(reader, reader.uint32(), options, message.axis2);
                    break;
                case /* Vector extents */ 5:
                    message.extents = Vector.internalBinaryRead(reader, reader.uint32(), options, message.extents);
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
    internalBinaryWrite(message: ShapeBox, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector center = 1; */
        if (message.center)
            Vector.internalBinaryWrite(message.center, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* Vector axis0 = 2; */
        if (message.axis0)
            Vector.internalBinaryWrite(message.axis0, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* Vector axis1 = 3; */
        if (message.axis1)
            Vector.internalBinaryWrite(message.axis1, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Vector axis2 = 4; */
        if (message.axis2)
            Vector.internalBinaryWrite(message.axis2, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Vector extents = 5; */
        if (message.extents)
            Vector.internalBinaryWrite(message.extents, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShapeBox
 */
export const ShapeBox = new ShapeBox$Type();
