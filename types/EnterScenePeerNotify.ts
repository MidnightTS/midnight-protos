// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EnterScenePeerNotify.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 271;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message EnterScenePeerNotify
 */
export interface EnterScenePeerNotify {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 7;
     */
    enterSceneToken: number;
    /**
     * @generated from protobuf field: uint32 host_peer_id = 12;
     */
    hostPeerId: number;
    /**
     * @generated from protobuf field: uint32 peer_id = 14;
     */
    peerId: number;
    /**
     * @generated from protobuf field: uint32 dest_scene_id = 2;
     */
    destSceneId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EnterScenePeerNotify$Type extends MessageType<EnterScenePeerNotify> {
    constructor() {
        super("EnterScenePeerNotify", [
            { no: 7, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "host_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dest_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EnterScenePeerNotify>): EnterScenePeerNotify {
        const message = { enterSceneToken: 0, hostPeerId: 0, peerId: 0, destSceneId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterScenePeerNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterScenePeerNotify): EnterScenePeerNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_scene_token */ 7:
                    message.enterSceneToken = reader.uint32();
                    break;
                case /* uint32 host_peer_id */ 12:
                    message.hostPeerId = reader.uint32();
                    break;
                case /* uint32 peer_id */ 14:
                    message.peerId = reader.uint32();
                    break;
                case /* uint32 dest_scene_id */ 2:
                    message.destSceneId = reader.uint32();
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
    internalBinaryWrite(message: EnterScenePeerNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_scene_token = 7; */
        if (message.enterSceneToken !== 0)
            writer.tag(7, WireType.Varint).uint32(message.enterSceneToken);
        /* uint32 host_peer_id = 12; */
        if (message.hostPeerId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.hostPeerId);
        /* uint32 peer_id = 14; */
        if (message.peerId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.peerId);
        /* uint32 dest_scene_id = 2; */
        if (message.destSceneId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.destSceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterScenePeerNotify
 */
export const EnterScenePeerNotify = new EnterScenePeerNotify$Type();
