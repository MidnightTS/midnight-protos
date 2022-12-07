// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "CustomDungeonBanInfo.proto" (syntax proto3)
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
import { CustomDungeonBanType } from "./CustomDungeonBanType";
/**
 * @generated from protobuf message CustomDungeonBanInfo
 */
export interface CustomDungeonBanInfo {
    /**
     * @generated from protobuf field: uint32 expire_time = 15;
     */
    expireTime: number;
    /**
     * @generated from protobuf field: CustomDungeonBanType ban_type = 2;
     */
    banType: CustomDungeonBanType;
    /**
     * @generated from protobuf field: uint64 dungeon_guid = 13;
     */
    dungeonGuid: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonBanInfo$Type extends MessageType<CustomDungeonBanInfo> {
    constructor() {
        super("CustomDungeonBanInfo", [
            { no: 15, name: "expire_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "ban_type", kind: "enum", T: () => ["CustomDungeonBanType", CustomDungeonBanType, "CUSTOM_DUNGEON_BAN_TYPE_"] },
            { no: 13, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CustomDungeonBanInfo>): CustomDungeonBanInfo {
        const message = { expireTime: 0, banType: 0, dungeonGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomDungeonBanInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomDungeonBanInfo): CustomDungeonBanInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 expire_time */ 15:
                    message.expireTime = reader.uint32();
                    break;
                case /* CustomDungeonBanType ban_type */ 2:
                    message.banType = reader.int32();
                    break;
                case /* uint64 dungeon_guid */ 13:
                    message.dungeonGuid = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: CustomDungeonBanInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 expire_time = 15; */
        if (message.expireTime !== 0)
            writer.tag(15, WireType.Varint).uint32(message.expireTime);
        /* CustomDungeonBanType ban_type = 2; */
        if (message.banType !== 0)
            writer.tag(2, WireType.Varint).int32(message.banType);
        /* uint64 dungeon_guid = 13; */
        if (message.dungeonGuid !== 0n)
            writer.tag(13, WireType.Varint).uint64(message.dungeonGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonBanInfo
 */
export const CustomDungeonBanInfo = new CustomDungeonBanInfo$Type();