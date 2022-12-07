// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeAnimalData.proto" (syntax proto3)
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
 * @generated from protobuf message HomeAnimalData
 */
export interface HomeAnimalData {
    /**
     * @generated from protobuf field: uint32 furniture_id = 6;
     */
    furnitureId: number;
    /**
     * @generated from protobuf field: Vector spawn_rot = 14;
     */
    spawnRot?: Vector;
    /**
     * @generated from protobuf field: Vector spawn_pos = 11;
     */
    spawnPos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeAnimalData$Type extends MessageType<HomeAnimalData> {
    constructor() {
        super("HomeAnimalData", [
            { no: 6, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "spawn_rot", kind: "message", T: () => Vector },
            { no: 11, name: "spawn_pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<HomeAnimalData>): HomeAnimalData {
        const message = { furnitureId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeAnimalData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeAnimalData): HomeAnimalData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 furniture_id */ 6:
                    message.furnitureId = reader.uint32();
                    break;
                case /* Vector spawn_rot */ 14:
                    message.spawnRot = Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
                    break;
                case /* Vector spawn_pos */ 11:
                    message.spawnPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
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
    internalBinaryWrite(message: HomeAnimalData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 furniture_id = 6; */
        if (message.furnitureId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.furnitureId);
        /* Vector spawn_rot = 14; */
        if (message.spawnRot)
            Vector.internalBinaryWrite(message.spawnRot, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* Vector spawn_pos = 11; */
        if (message.spawnPos)
            Vector.internalBinaryWrite(message.spawnPos, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAnimalData
 */
export const HomeAnimalData = new HomeAnimalData$Type();
