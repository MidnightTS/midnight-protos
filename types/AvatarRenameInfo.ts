// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AvatarRenameInfo.proto" (syntax proto3)
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
 * @generated from protobuf message AvatarRenameInfo
 */
export interface AvatarRenameInfo {
    /**
     * @generated from protobuf field: string avatar_name = 3;
     */
    avatarName: string;
    /**
     * @generated from protobuf field: uint32 avatar_id = 7;
     */
    avatarId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarRenameInfo$Type extends MessageType<AvatarRenameInfo> {
    constructor() {
        super("AvatarRenameInfo", [
            { no: 3, name: "avatar_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarRenameInfo>): AvatarRenameInfo {
        const message = { avatarName: "", avatarId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarRenameInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarRenameInfo): AvatarRenameInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string avatar_name */ 3:
                    message.avatarName = reader.string();
                    break;
                case /* uint32 avatar_id */ 7:
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
    internalBinaryWrite(message: AvatarRenameInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string avatar_name = 3; */
        if (message.avatarName !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.avatarName);
        /* uint32 avatar_id = 7; */
        if (message.avatarId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarRenameInfo
 */
export const AvatarRenameInfo = new AvatarRenameInfo$Type();
