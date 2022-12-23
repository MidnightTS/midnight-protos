// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneTeamUpdateNotify.proto" (syntax proto3)
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
import { SceneTeamAvatar } from "./SceneTeamAvatar";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1728;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SceneTeamUpdateNotify
 */
export interface SceneTeamUpdateNotify {
    /**
     * @generated from protobuf field: repeated SceneTeamAvatar scene_team_avatar_list = 11;
     */
    sceneTeamAvatarList: SceneTeamAvatar[];
    /**
     * @generated from protobuf field: bool is_in_mp = 7;
     */
    isInMp: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneTeamUpdateNotify$Type extends MessageType<SceneTeamUpdateNotify> {
    constructor() {
        super("SceneTeamUpdateNotify", [
            { no: 11, name: "scene_team_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneTeamAvatar },
            { no: 7, name: "is_in_mp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SceneTeamUpdateNotify>): SceneTeamUpdateNotify {
        const message = { sceneTeamAvatarList: [], isInMp: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneTeamUpdateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneTeamUpdateNotify): SceneTeamUpdateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated SceneTeamAvatar scene_team_avatar_list */ 11:
                    message.sceneTeamAvatarList.push(SceneTeamAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_in_mp */ 7:
                    message.isInMp = reader.bool();
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
    internalBinaryWrite(message: SceneTeamUpdateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated SceneTeamAvatar scene_team_avatar_list = 11; */
        for (let i = 0; i < message.sceneTeamAvatarList.length; i++)
            SceneTeamAvatar.internalBinaryWrite(message.sceneTeamAvatarList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_mp = 7; */
        if (message.isInMp !== false)
            writer.tag(7, WireType.Varint).bool(message.isInMp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneTeamUpdateNotify
 */
export const SceneTeamUpdateNotify = new SceneTeamUpdateNotify$Type();
