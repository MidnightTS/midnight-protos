// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HideAndSeekPlayerSetAvatarNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5354;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HideAndSeekPlayerSetAvatarNotify
 */
export interface HideAndSeekPlayerSetAvatarNotify {
    /**
     * @generated from protobuf field: uint32 uid = 12;
     */
    uid: number;
    /**
     * @generated from protobuf field: uint32 costume_id = 8;
     */
    costumeId: number;
    /**
     * @generated from protobuf field: uint32 avatar_id = 10;
     */
    avatarId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekPlayerSetAvatarNotify$Type extends MessageType<HideAndSeekPlayerSetAvatarNotify> {
    constructor() {
        super("HideAndSeekPlayerSetAvatarNotify", [
            { no: 12, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HideAndSeekPlayerSetAvatarNotify>): HideAndSeekPlayerSetAvatarNotify {
        const message = { uid: 0, costumeId: 0, avatarId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HideAndSeekPlayerSetAvatarNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HideAndSeekPlayerSetAvatarNotify): HideAndSeekPlayerSetAvatarNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 12:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 costume_id */ 8:
                    message.costumeId = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 10:
                    message.avatarId = reader.uint32();
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
    internalBinaryWrite(message: HideAndSeekPlayerSetAvatarNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 12; */
        if (message.uid !== 0)
            writer.tag(12, WireType.Varint).uint32(message.uid);
        /* uint32 costume_id = 8; */
        if (message.costumeId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.costumeId);
        /* uint32 avatar_id = 10; */
        if (message.avatarId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekPlayerSetAvatarNotify
 */
export const HideAndSeekPlayerSetAvatarNotify = new HideAndSeekPlayerSetAvatarNotify$Type();