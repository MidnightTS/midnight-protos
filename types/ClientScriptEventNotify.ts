// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ClientScriptEventNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 260;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ClientScriptEventNotify
 */
export interface ClientScriptEventNotify {
    /**
     * @generated from protobuf field: uint32 source_entity_id = 1;
     */
    sourceEntityId: number;
    /**
     * @generated from protobuf field: uint32 event_type = 8;
     */
    eventType: number;
    /**
     * @generated from protobuf field: uint32 target_entity_id = 4;
     */
    targetEntityId: number;
    /**
     * @generated from protobuf field: repeated int32 param_list = 6;
     */
    paramList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientScriptEventNotify$Type extends MessageType<ClientScriptEventNotify> {
    constructor() {
        super("ClientScriptEventNotify", [
            { no: 1, name: "source_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "event_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "target_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ClientScriptEventNotify>): ClientScriptEventNotify {
        const message = { sourceEntityId: 0, eventType: 0, targetEntityId: 0, paramList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ClientScriptEventNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientScriptEventNotify): ClientScriptEventNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 source_entity_id */ 1:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* uint32 event_type */ 8:
                    message.eventType = reader.uint32();
                    break;
                case /* uint32 target_entity_id */ 4:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* repeated int32 param_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
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
    internalBinaryWrite(message: ClientScriptEventNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 source_entity_id = 1; */
        if (message.sourceEntityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.sourceEntityId);
        /* uint32 event_type = 8; */
        if (message.eventType !== 0)
            writer.tag(8, WireType.Varint).uint32(message.eventType);
        /* uint32 target_entity_id = 4; */
        if (message.targetEntityId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.targetEntityId);
        /* repeated int32 param_list = 6; */
        if (message.paramList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.int32(message.paramList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientScriptEventNotify
 */
export const ClientScriptEventNotify = new ClientScriptEventNotify$Type();
