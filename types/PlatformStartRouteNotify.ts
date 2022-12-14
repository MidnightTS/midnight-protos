// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlatformStartRouteNotify.proto" (syntax proto3)
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
import { PlatformInfo } from "./PlatformInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 208;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlatformStartRouteNotify
 */
export interface PlatformStartRouteNotify {
    /**
     * @generated from protobuf field: uint32 entity_id = 12;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint32 scene_time = 7;
     */
    sceneTime: number;
    /**
     * @generated from protobuf field: PlatformInfo platform = 2;
     */
    platform?: PlatformInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlatformStartRouteNotify$Type extends MessageType<PlatformStartRouteNotify> {
    constructor() {
        super("PlatformStartRouteNotify", [
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "platform", kind: "message", T: () => PlatformInfo }
        ]);
    }
    create(value?: PartialMessage<PlatformStartRouteNotify>): PlatformStartRouteNotify {
        const message = { entityId: 0, sceneTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlatformStartRouteNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlatformStartRouteNotify): PlatformStartRouteNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 scene_time */ 7:
                    message.sceneTime = reader.uint32();
                    break;
                case /* PlatformInfo platform */ 2:
                    message.platform = PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
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
    internalBinaryWrite(message: PlatformStartRouteNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.entityId);
        /* uint32 scene_time = 7; */
        if (message.sceneTime !== 0)
            writer.tag(7, WireType.Varint).uint32(message.sceneTime);
        /* PlatformInfo platform = 2; */
        if (message.platform)
            PlatformInfo.internalBinaryWrite(message.platform, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlatformStartRouteNotify
 */
export const PlatformStartRouteNotify = new PlatformStartRouteNotify$Type();
