// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayerWorldLocationInfo.proto" (syntax proto3)
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
import { PlayerLocationInfo } from "./PlayerLocationInfo";
/**
 * @generated from protobuf message PlayerWorldLocationInfo
 */
export interface PlayerWorldLocationInfo {
    /**
     * @generated from protobuf field: PlayerLocationInfo player_loc = 3;
     */
    playerLoc?: PlayerLocationInfo;
    /**
     * @generated from protobuf field: uint32 scene_id = 11;
     */
    sceneId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerWorldLocationInfo$Type extends MessageType<PlayerWorldLocationInfo> {
    constructor() {
        super("PlayerWorldLocationInfo", [
            { no: 3, name: "player_loc", kind: "message", T: () => PlayerLocationInfo },
            { no: 11, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerWorldLocationInfo>): PlayerWorldLocationInfo {
        const message = { sceneId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerWorldLocationInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerWorldLocationInfo): PlayerWorldLocationInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* PlayerLocationInfo player_loc */ 3:
                    message.playerLoc = PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerLoc);
                    break;
                case /* uint32 scene_id */ 11:
                    message.sceneId = reader.uint32();
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
    internalBinaryWrite(message: PlayerWorldLocationInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* PlayerLocationInfo player_loc = 3; */
        if (message.playerLoc)
            PlayerLocationInfo.internalBinaryWrite(message.playerLoc, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 11; */
        if (message.sceneId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerWorldLocationInfo
 */
export const PlayerWorldLocationInfo = new PlayerWorldLocationInfo$Type();
