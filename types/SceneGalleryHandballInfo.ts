// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGalleryHandballInfo.proto" (syntax proto3)
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
import { PlaceInfo } from "./PlaceInfo";
/**
 * @generated from protobuf message SceneGalleryHandballInfo
 */
export interface SceneGalleryHandballInfo {
    /**
     * @generated from protobuf field: PlaceInfo ball_place_info = 6;
     */
    ballPlaceInfo?: PlaceInfo;
    /**
     * @generated from protobuf field: bool is_have_ball = 11;
     */
    isHaveBall: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHandballInfo$Type extends MessageType<SceneGalleryHandballInfo> {
    constructor() {
        super("SceneGalleryHandballInfo", [
            { no: 6, name: "ball_place_info", kind: "message", T: () => PlaceInfo },
            { no: 11, name: "is_have_ball", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryHandballInfo>): SceneGalleryHandballInfo {
        const message = { isHaveBall: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryHandballInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryHandballInfo): SceneGalleryHandballInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* PlaceInfo ball_place_info */ 6:
                    message.ballPlaceInfo = PlaceInfo.internalBinaryRead(reader, reader.uint32(), options, message.ballPlaceInfo);
                    break;
                case /* bool is_have_ball */ 11:
                    message.isHaveBall = reader.bool();
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
    internalBinaryWrite(message: SceneGalleryHandballInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* PlaceInfo ball_place_info = 6; */
        if (message.ballPlaceInfo)
            PlaceInfo.internalBinaryWrite(message.ballPlaceInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* bool is_have_ball = 11; */
        if (message.isHaveBall !== false)
            writer.tag(11, WireType.Varint).bool(message.isHaveBall);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryHandballInfo
 */
export const SceneGalleryHandballInfo = new SceneGalleryHandballInfo$Type();
