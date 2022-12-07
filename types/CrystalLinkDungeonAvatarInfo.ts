// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "CrystalLinkDungeonAvatarInfo.proto" (syntax proto3)
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
 * @generated from protobuf message CrystalLinkDungeonAvatarInfo
 */
export interface CrystalLinkDungeonAvatarInfo {
    /**
     * @generated from protobuf field: uint64 avatar_guid = 4;
     */
    avatarGuid: bigint;
    /**
     * @generated from protobuf field: bool is_trial = 5;
     */
    isTrial: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkDungeonAvatarInfo$Type extends MessageType<CrystalLinkDungeonAvatarInfo> {
    constructor() {
        super("CrystalLinkDungeonAvatarInfo", [
            { no: 4, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "is_trial", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<CrystalLinkDungeonAvatarInfo>): CrystalLinkDungeonAvatarInfo {
        const message = { avatarGuid: 0n, isTrial: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CrystalLinkDungeonAvatarInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CrystalLinkDungeonAvatarInfo): CrystalLinkDungeonAvatarInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* bool is_trial */ 5:
                    message.isTrial = reader.bool();
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
    internalBinaryWrite(message: CrystalLinkDungeonAvatarInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 avatar_guid = 4; */
        if (message.avatarGuid !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.avatarGuid);
        /* bool is_trial = 5; */
        if (message.isTrial !== false)
            writer.tag(5, WireType.Varint).bool(message.isTrial);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkDungeonAvatarInfo
 */
export const CrystalLinkDungeonAvatarInfo = new CrystalLinkDungeonAvatarInfo$Type();
