// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MonsterAlertChangeNotify.proto" (syntax proto3)
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
 *   CMD_ID = 303;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message MonsterAlertChangeNotify
 */
export interface MonsterAlertChangeNotify {
    /**
     * @generated from protobuf field: repeated uint32 monster_entity_list = 5;
     */
    monsterEntityList: number[];
    /**
     * @generated from protobuf field: uint32 is_alert = 12;
     */
    isAlert: number;
    /**
     * @generated from protobuf field: uint32 avatar_entity_id = 15;
     */
    avatarEntityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MonsterAlertChangeNotify$Type extends MessageType<MonsterAlertChangeNotify> {
    constructor() {
        super("MonsterAlertChangeNotify", [
            { no: 5, name: "monster_entity_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_alert", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MonsterAlertChangeNotify>): MonsterAlertChangeNotify {
        const message = { monsterEntityList: [], isAlert: 0, avatarEntityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MonsterAlertChangeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MonsterAlertChangeNotify): MonsterAlertChangeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 monster_entity_list */ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.monsterEntityList.push(reader.uint32());
                    else
                        message.monsterEntityList.push(reader.uint32());
                    break;
                case /* uint32 is_alert */ 12:
                    message.isAlert = reader.uint32();
                    break;
                case /* uint32 avatar_entity_id */ 15:
                    message.avatarEntityId = reader.uint32();
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
    internalBinaryWrite(message: MonsterAlertChangeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 monster_entity_list = 5; */
        if (message.monsterEntityList.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.monsterEntityList.length; i++)
                writer.uint32(message.monsterEntityList[i]);
            writer.join();
        }
        /* uint32 is_alert = 12; */
        if (message.isAlert !== 0)
            writer.tag(12, WireType.Varint).uint32(message.isAlert);
        /* uint32 avatar_entity_id = 15; */
        if (message.avatarEntityId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.avatarEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MonsterAlertChangeNotify
 */
export const MonsterAlertChangeNotify = new MonsterAlertChangeNotify$Type();
