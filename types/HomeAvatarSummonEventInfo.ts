// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeAvatarSummonEventInfo.proto" (syntax proto3)
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
 * @generated from protobuf message HomeAvatarSummonEventInfo
 */
export interface HomeAvatarSummonEventInfo {
    /**
     * @generated from protobuf field: uint32 random_position = 11;
     */
    randomPosition: number;
    /**
     * @generated from protobuf field: uint32 guid = 5;
     */
    guid: number;
    /**
     * @generated from protobuf field: uint32 event_over_time = 6;
     */
    eventOverTime: number;
    /**
     * @generated from protobuf field: uint32 suit_id = 12;
     */
    suitId: number;
    /**
     * @generated from protobuf field: uint32 avatar_id = 8;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: uint32 event_id = 10;
     */
    eventId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeAvatarSummonEventInfo$Type extends MessageType<HomeAvatarSummonEventInfo> {
    constructor() {
        super("HomeAvatarSummonEventInfo", [
            { no: 11, name: "random_position", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "event_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "suit_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "event_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeAvatarSummonEventInfo>): HomeAvatarSummonEventInfo {
        const message = { randomPosition: 0, guid: 0, eventOverTime: 0, suitId: 0, avatarId: 0, eventId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeAvatarSummonEventInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeAvatarSummonEventInfo): HomeAvatarSummonEventInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 random_position */ 11:
                    message.randomPosition = reader.uint32();
                    break;
                case /* uint32 guid */ 5:
                    message.guid = reader.uint32();
                    break;
                case /* uint32 event_over_time */ 6:
                    message.eventOverTime = reader.uint32();
                    break;
                case /* uint32 suit_id */ 12:
                    message.suitId = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 8:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 event_id */ 10:
                    message.eventId = reader.uint32();
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
    internalBinaryWrite(message: HomeAvatarSummonEventInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 random_position = 11; */
        if (message.randomPosition !== 0)
            writer.tag(11, WireType.Varint).uint32(message.randomPosition);
        /* uint32 guid = 5; */
        if (message.guid !== 0)
            writer.tag(5, WireType.Varint).uint32(message.guid);
        /* uint32 event_over_time = 6; */
        if (message.eventOverTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.eventOverTime);
        /* uint32 suit_id = 12; */
        if (message.suitId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.suitId);
        /* uint32 avatar_id = 8; */
        if (message.avatarId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.avatarId);
        /* uint32 event_id = 10; */
        if (message.eventId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.eventId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeAvatarSummonEventInfo
 */
export const HomeAvatarSummonEventInfo = new HomeAvatarSummonEventInfo$Type();