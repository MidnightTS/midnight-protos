// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EvtEntityRenderersChangedNotify.proto" (syntax proto3)
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
import { EntityRendererChangedInfo } from "./EntityRendererChangedInfo";
import { ForwardType } from "./ForwardType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 375;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EvtEntityRenderersChangedNotify
 */
export interface EvtEntityRenderersChangedNotify {
    /**
     * @generated from protobuf field: ForwardType forward_type = 5;
     */
    forwardType: ForwardType;
    /**
     * @generated from protobuf field: uint32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from protobuf field: bool is_server_cache = 3;
     */
    isServerCache: boolean;
    /**
     * @generated from protobuf field: EntityRendererChangedInfo renderer_changed_info = 15;
     */
    rendererChangedInfo?: EntityRendererChangedInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtEntityRenderersChangedNotify$Type extends MessageType<EvtEntityRenderersChangedNotify> {
    constructor() {
        super("EvtEntityRenderersChangedNotify", [
            { no: 5, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType, "FORWARD_TYPE_"] },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_server_cache", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "renderer_changed_info", kind: "message", T: () => EntityRendererChangedInfo }
        ]);
    }
    create(value?: PartialMessage<EvtEntityRenderersChangedNotify>): EvtEntityRenderersChangedNotify {
        const message = { forwardType: 0, entityId: 0, isServerCache: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtEntityRenderersChangedNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtEntityRenderersChangedNotify): EvtEntityRenderersChangedNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ForwardType forward_type */ 5:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* bool is_server_cache */ 3:
                    message.isServerCache = reader.bool();
                    break;
                case /* EntityRendererChangedInfo renderer_changed_info */ 15:
                    message.rendererChangedInfo = EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
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
    internalBinaryWrite(message: EvtEntityRenderersChangedNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ForwardType forward_type = 5; */
        if (message.forwardType !== 0)
            writer.tag(5, WireType.Varint).int32(message.forwardType);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.entityId);
        /* bool is_server_cache = 3; */
        if (message.isServerCache !== false)
            writer.tag(3, WireType.Varint).bool(message.isServerCache);
        /* EntityRendererChangedInfo renderer_changed_info = 15; */
        if (message.rendererChangedInfo)
            EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtEntityRenderersChangedNotify
 */
export const EvtEntityRenderersChangedNotify = new EvtEntityRenderersChangedNotify$Type();