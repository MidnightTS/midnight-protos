// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerEnterDungeonRsp.proto" (syntax proto3)
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
 *   CMD_ID = 919;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerEnterDungeonRsp
 */
export interface PlayerEnterDungeonRsp {
    /**
     * @generated from protobuf field: int32 retcode = 5;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 point_id = 6;
     */
    pointId: number;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 1;
     */
    dungeonId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEnterDungeonRsp$Type extends MessageType<PlayerEnterDungeonRsp> {
    constructor() {
        super("PlayerEnterDungeonRsp", [
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerEnterDungeonRsp>): PlayerEnterDungeonRsp {
        const message = { retcode: 0, pointId: 0, dungeonId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerEnterDungeonRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerEnterDungeonRsp): PlayerEnterDungeonRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 point_id */ 6:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
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
    internalBinaryWrite(message: PlayerEnterDungeonRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, WireType.Varint).int32(message.retcode);
        /* uint32 point_id = 6; */
        if (message.pointId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.pointId);
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.dungeonId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEnterDungeonRsp
 */
export const PlayerEnterDungeonRsp = new PlayerEnterDungeonRsp$Type();
