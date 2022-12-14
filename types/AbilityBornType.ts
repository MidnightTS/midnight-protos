// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AbilityBornType.proto" (syntax proto3)
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
 * @generated from protobuf message AbilityBornType
 */
export interface AbilityBornType {
    /**
     * @generated from protobuf field: Vector move_dir = 3;
     */
    moveDir?: Vector;
    /**
     * @generated from protobuf field: Vector rot = 15;
     */
    rot?: Vector;
    /**
     * @generated from protobuf field: Vector pos = 12;
     */
    pos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityBornType$Type extends MessageType<AbilityBornType> {
    constructor() {
        super("AbilityBornType", [
            { no: 3, name: "move_dir", kind: "message", T: () => Vector },
            { no: 15, name: "rot", kind: "message", T: () => Vector },
            { no: 12, name: "pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<AbilityBornType>): AbilityBornType {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityBornType>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityBornType): AbilityBornType {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector move_dir */ 3:
                    message.moveDir = Vector.internalBinaryRead(reader, reader.uint32(), options, message.moveDir);
                    break;
                case /* Vector rot */ 15:
                    message.rot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 12:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
    internalBinaryWrite(message: AbilityBornType, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector move_dir = 3; */
        if (message.moveDir)
            Vector.internalBinaryWrite(message.moveDir, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 15; */
        if (message.rot)
            Vector.internalBinaryWrite(message.rot, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 12; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityBornType
 */
export const AbilityBornType = new AbilityBornType$Type();
