// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AvatarAddNotify.proto" (syntax proto3)
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
import { AvatarInfo } from "./AvatarInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1757;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AvatarAddNotify
 */
export interface AvatarAddNotify {
    /**
     * @generated from protobuf field: AvatarInfo avatar = 1;
     */
    avatar?: AvatarInfo;
    /**
     * @generated from protobuf field: bool is_in_team = 15;
     */
    isInTeam: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarAddNotify$Type extends MessageType<AvatarAddNotify> {
    constructor() {
        super("AvatarAddNotify", [
            { no: 1, name: "avatar", kind: "message", T: () => AvatarInfo },
            { no: 15, name: "is_in_team", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarAddNotify>): AvatarAddNotify {
        const message = { isInTeam: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarAddNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarAddNotify): AvatarAddNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AvatarInfo avatar */ 1:
                    message.avatar = AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatar);
                    break;
                case /* bool is_in_team */ 15:
                    message.isInTeam = reader.bool();
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
    internalBinaryWrite(message: AvatarAddNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AvatarInfo avatar = 1; */
        if (message.avatar)
            AvatarInfo.internalBinaryWrite(message.avatar, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_team = 15; */
        if (message.isInTeam !== false)
            writer.tag(15, WireType.Varint).bool(message.isInTeam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarAddNotify
 */
export const AvatarAddNotify = new AvatarAddNotify$Type();
