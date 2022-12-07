// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DigMarkPoint.proto" (syntax proto3)
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
 * @generated from protobuf message DigMarkPoint
 */
export interface DigMarkPoint {
    /**
     * @generated from protobuf field: Vector pos = 11;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: uint32 bundle_id = 3;
     */
    bundleId: number;
    /**
     * @generated from protobuf field: Vector rot = 14;
     */
    rot?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class DigMarkPoint$Type extends MessageType<DigMarkPoint> {
    constructor() {
        super("DigMarkPoint", [
            { no: 11, name: "pos", kind: "message", T: () => Vector },
            { no: 3, name: "bundle_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "rot", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<DigMarkPoint>): DigMarkPoint {
        const message = { bundleId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DigMarkPoint>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DigMarkPoint): DigMarkPoint {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector pos */ 11:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 bundle_id */ 3:
                    message.bundleId = reader.uint32();
                    break;
                case /* Vector rot */ 14:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
    internalBinaryWrite(message: DigMarkPoint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector pos = 11; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 bundle_id = 3; */
        if (message.bundleId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.bundleId);
        /* Vector rot = 14; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DigMarkPoint
 */
export const DigMarkPoint = new DigMarkPoint$Type();
