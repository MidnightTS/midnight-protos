// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AvatarFollowRouteNotify.proto" (syntax proto3)
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
import { Route } from "./Route";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 3256;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AvatarFollowRouteNotify
 */
export interface AvatarFollowRouteNotify {
    /**
     * @generated from protobuf field: string client_params = 5;
     */
    clientParams: string;
    /**
     * @generated from protobuf field: Route route = 1;
     */
    route?: Route;
    /**
     * @generated from protobuf field: uint32 entity_id = 10;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint32 template_id = 4;
     */
    templateId: number;
    /**
     * @generated from protobuf field: uint32 start_scene_time_ms = 3;
     */
    startSceneTimeMs: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFollowRouteNotify$Type extends MessageType<AvatarFollowRouteNotify> {
    constructor() {
        super("AvatarFollowRouteNotify", [
            { no: 5, name: "client_params", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "route", kind: "message", T: () => Route },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "template_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "start_scene_time_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarFollowRouteNotify>): AvatarFollowRouteNotify {
        const message = { clientParams: "", entityId: 0, templateId: 0, startSceneTimeMs: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarFollowRouteNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarFollowRouteNotify): AvatarFollowRouteNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_params */ 5:
                    message.clientParams = reader.string();
                    break;
                case /* Route route */ 1:
                    message.route = Route.internalBinaryRead(reader, reader.uint32(), options, message.route);
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 template_id */ 4:
                    message.templateId = reader.uint32();
                    break;
                case /* uint32 start_scene_time_ms */ 3:
                    message.startSceneTimeMs = reader.uint32();
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
    internalBinaryWrite(message: AvatarFollowRouteNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string client_params = 5; */
        if (message.clientParams !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.clientParams);
        /* Route route = 1; */
        if (message.route)
            Route.internalBinaryWrite(message.route, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.entityId);
        /* uint32 template_id = 4; */
        if (message.templateId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.templateId);
        /* uint32 start_scene_time_ms = 3; */
        if (message.startSceneTimeMs !== 0)
            writer.tag(3, WireType.Varint).uint32(message.startSceneTimeMs);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarFollowRouteNotify
 */
export const AvatarFollowRouteNotify = new AvatarFollowRouteNotify$Type();
