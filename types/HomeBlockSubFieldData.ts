// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeBlockSubFieldData.proto" (syntax proto3)
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
 * @generated from protobuf message HomeBlockSubFieldData
 */
export interface HomeBlockSubFieldData {
    /**
     * @generated from protobuf field: Vector pos = 4;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: Vector rot = 13;
     */
    rot?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlockSubFieldData$Type extends MessageType<HomeBlockSubFieldData> {
    constructor() {
        super("HomeBlockSubFieldData", [
            { no: 4, name: "pos", kind: "message", T: () => Vector },
            { no: 13, name: "rot", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<HomeBlockSubFieldData>): HomeBlockSubFieldData {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeBlockSubFieldData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeBlockSubFieldData): HomeBlockSubFieldData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector pos */ 4:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* Vector rot */ 13:
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
    internalBinaryWrite(message: HomeBlockSubFieldData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector pos = 4; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 13; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlockSubFieldData
 */
export const HomeBlockSubFieldData = new HomeBlockSubFieldData$Type();
