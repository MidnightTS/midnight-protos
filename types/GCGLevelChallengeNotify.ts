// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGLevelChallengeNotify.proto" (syntax proto3)
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
import { GCGLevelData } from "./GCGLevelData";
import { GCGBossChallengeData } from "./GCGBossChallengeData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 7183;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGLevelChallengeNotify
 */
export interface GCGLevelChallengeNotify {
    /**
     * @generated from protobuf field: repeated GCGBossChallengeData unlock_boss_challenge_list = 11;
     */
    unlockBossChallengeList: GCGBossChallengeData[];
    /**
     * @generated from protobuf field: repeated uint32 unlock_world_challenge_list = 3;
     */
    unlockWorldChallengeList: number[];
    /**
     * @generated from protobuf field: repeated GCGLevelData level_list = 4;
     */
    levelList: GCGLevelData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGLevelChallengeNotify$Type extends MessageType<GCGLevelChallengeNotify> {
    constructor() {
        super("GCGLevelChallengeNotify", [
            { no: 11, name: "unlock_boss_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGBossChallengeData },
            { no: 3, name: "unlock_world_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGLevelData }
        ]);
    }
    create(value?: PartialMessage<GCGLevelChallengeNotify>): GCGLevelChallengeNotify {
        const message = { unlockBossChallengeList: [], unlockWorldChallengeList: [], levelList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGLevelChallengeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGLevelChallengeNotify): GCGLevelChallengeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated GCGBossChallengeData unlock_boss_challenge_list */ 11:
                    message.unlockBossChallengeList.push(GCGBossChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_world_challenge_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockWorldChallengeList.push(reader.uint32());
                    else
                        message.unlockWorldChallengeList.push(reader.uint32());
                    break;
                case /* repeated GCGLevelData level_list */ 4:
                    message.levelList.push(GCGLevelData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GCGLevelChallengeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated GCGBossChallengeData unlock_boss_challenge_list = 11; */
        for (let i = 0; i < message.unlockBossChallengeList.length; i++)
            GCGBossChallengeData.internalBinaryWrite(message.unlockBossChallengeList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_world_challenge_list = 3; */
        if (message.unlockWorldChallengeList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockWorldChallengeList.length; i++)
                writer.uint32(message.unlockWorldChallengeList[i]);
            writer.join();
        }
        /* repeated GCGLevelData level_list = 4; */
        for (let i = 0; i < message.levelList.length; i++)
            GCGLevelData.internalBinaryWrite(message.levelList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGLevelChallengeNotify
 */
export const GCGLevelChallengeNotify = new GCGLevelChallengeNotify$Type();
