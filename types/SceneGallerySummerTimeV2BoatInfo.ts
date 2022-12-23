// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGallerySummerTimeV2BoatInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGallerySummerTimeV2BoatInfo
 */
export interface SceneGallerySummerTimeV2BoatInfo {
    /**
     * @generated from protobuf field: uint32 used_time = 6;
     */
    usedTime: number;
    /**
     * @generated from protobuf field: uint32 param1 = 5;
     */
    param1: number;
    /**
     * @generated from protobuf field: uint32 param3 = 12;
     */
    param3: number;
    /**
     * @generated from protobuf field: uint32 param2 = 3;
     */
    param2: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySummerTimeV2BoatInfo$Type extends MessageType<SceneGallerySummerTimeV2BoatInfo> {
    constructor() {
        super("SceneGallerySummerTimeV2BoatInfo", [
            { no: 6, name: "used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "param1", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param3", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param2", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGallerySummerTimeV2BoatInfo>): SceneGallerySummerTimeV2BoatInfo {
        const message = { usedTime: 0, param1: 0, param3: 0, param2: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGallerySummerTimeV2BoatInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGallerySummerTimeV2BoatInfo): SceneGallerySummerTimeV2BoatInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 used_time */ 6:
                    message.usedTime = reader.uint32();
                    break;
                case /* uint32 param1 */ 5:
                    message.param1 = reader.uint32();
                    break;
                case /* uint32 param3 */ 12:
                    message.param3 = reader.uint32();
                    break;
                case /* uint32 param2 */ 3:
                    message.param2 = reader.uint32();
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
    internalBinaryWrite(message: SceneGallerySummerTimeV2BoatInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 used_time = 6; */
        if (message.usedTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.usedTime);
        /* uint32 param1 = 5; */
        if (message.param1 !== 0)
            writer.tag(5, WireType.Varint).uint32(message.param1);
        /* uint32 param3 = 12; */
        if (message.param3 !== 0)
            writer.tag(12, WireType.Varint).uint32(message.param3);
        /* uint32 param2 = 3; */
        if (message.param2 !== 0)
            writer.tag(3, WireType.Varint).uint32(message.param2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGallerySummerTimeV2BoatInfo
 */
export const SceneGallerySummerTimeV2BoatInfo = new SceneGallerySummerTimeV2BoatInfo$Type();
