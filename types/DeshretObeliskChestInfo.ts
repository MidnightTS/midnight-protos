// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DeshretObeliskChestInfo.proto" (syntax proto3)
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
 * @generated from protobuf message DeshretObeliskChestInfo
 */
export interface DeshretObeliskChestInfo {
    /**
     * @generated from protobuf field: uint32 group_id = 9;
     */
    groupId: number;
    /**
     * @generated from protobuf field: uint32 config_id = 8;
     */
    configId: number;
    /**
     * @generated from protobuf field: uint32 scene_id = 7;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: Vector pos = 3;
     */
    pos?: Vector;
}
// @generated message type with reflection information, may provide speed optimized methods
class DeshretObeliskChestInfo$Type extends MessageType<DeshretObeliskChestInfo> {
    constructor() {
        super("DeshretObeliskChestInfo", [
            { no: 9, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pos", kind: "message", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<DeshretObeliskChestInfo>): DeshretObeliskChestInfo {
        const message = { groupId: 0, configId: 0, sceneId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeshretObeliskChestInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeshretObeliskChestInfo): DeshretObeliskChestInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 group_id */ 9:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 config_id */ 8:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector pos */ 3:
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
    internalBinaryWrite(message: DeshretObeliskChestInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 group_id = 9; */
        if (message.groupId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.groupId);
        /* uint32 config_id = 8; */
        if (message.configId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.configId);
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.sceneId);
        /* Vector pos = 3; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeshretObeliskChestInfo
 */
export const DeshretObeliskChestInfo = new DeshretObeliskChestInfo$Type();
