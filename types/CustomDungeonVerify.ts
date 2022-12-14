// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CustomDungeonVerify.proto" (syntax proto3)
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
 * @generated from protobuf message CustomDungeonVerify
 */
export interface CustomDungeonVerify {
    /**
     * @generated from protobuf field: uint32 uid = 3;
     */
    uid: number;
    /**
     * @generated from protobuf field: string region = 13;
     */
    region: string;
    /**
     * @generated from protobuf field: uint32 timestamp = 5;
     */
    timestamp: number;
    /**
     * @generated from protobuf field: uint64 dungeon_guid = 1;
     */
    dungeonGuid: bigint;
    /**
     * @generated from protobuf field: uint32 lang = 6;
     */
    lang: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonVerify$Type extends MessageType<CustomDungeonVerify> {
    constructor() {
        super("CustomDungeonVerify", [
            { no: 3, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "region", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "lang", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CustomDungeonVerify>): CustomDungeonVerify {
        const message = { uid: 0, region: "", timestamp: 0, dungeonGuid: 0n, lang: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CustomDungeonVerify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CustomDungeonVerify): CustomDungeonVerify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* string region */ 13:
                    message.region = reader.string();
                    break;
                case /* uint32 timestamp */ 5:
                    message.timestamp = reader.uint32();
                    break;
                case /* uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 lang */ 6:
                    message.lang = reader.uint32();
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
    internalBinaryWrite(message: CustomDungeonVerify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 uid = 3; */
        if (message.uid !== 0)
            writer.tag(3, WireType.Varint).uint32(message.uid);
        /* string region = 13; */
        if (message.region !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.region);
        /* uint32 timestamp = 5; */
        if (message.timestamp !== 0)
            writer.tag(5, WireType.Varint).uint32(message.timestamp);
        /* uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.dungeonGuid);
        /* uint32 lang = 6; */
        if (message.lang !== 0)
            writer.tag(6, WireType.Varint).uint32(message.lang);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonVerify
 */
export const CustomDungeonVerify = new CustomDungeonVerify$Type();
