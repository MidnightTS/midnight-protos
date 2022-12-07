// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneGalleryFlowerInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGalleryFlowerInfo
 */
export interface SceneGalleryFlowerInfo {
    /**
     * @generated from protobuf field: uint32 cur_score = 5;
     */
    curScore: number;
    /**
     * @generated from protobuf field: uint32 target_score = 14;
     */
    targetScore: number;
    /**
     * @generated from protobuf field: uint32 end_time = 12;
     */
    endTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryFlowerInfo$Type extends MessageType<SceneGalleryFlowerInfo> {
    constructor() {
        super("SceneGalleryFlowerInfo", [
            { no: 5, name: "cur_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "target_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryFlowerInfo>): SceneGalleryFlowerInfo {
        const message = { curScore: 0, targetScore: 0, endTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryFlowerInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryFlowerInfo): SceneGalleryFlowerInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 cur_score */ 5:
                    message.curScore = reader.uint32();
                    break;
                case /* uint32 target_score */ 14:
                    message.targetScore = reader.uint32();
                    break;
                case /* uint32 end_time */ 12:
                    message.endTime = reader.uint32();
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
    internalBinaryWrite(message: SceneGalleryFlowerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 cur_score = 5; */
        if (message.curScore !== 0)
            writer.tag(5, WireType.Varint).uint32(message.curScore);
        /* uint32 target_score = 14; */
        if (message.targetScore !== 0)
            writer.tag(14, WireType.Varint).uint32(message.targetScore);
        /* uint32 end_time = 12; */
        if (message.endTime !== 0)
            writer.tag(12, WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryFlowerInfo
 */
export const SceneGalleryFlowerInfo = new SceneGalleryFlowerInfo$Type();
