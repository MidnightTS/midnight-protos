// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GallerySumoKillMonsterNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5590;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GallerySumoKillMonsterNotify
 */
export interface GallerySumoKillMonsterNotify {
    /**
     * @generated from protobuf field: uint32 score = 6;
     */
    score: number;
    /**
     * @generated from protobuf field: uint32 gallery_id = 11;
     */
    galleryId: number;
    /**
     * @generated from protobuf field: uint32 kill_elite_monster_num = 14;
     */
    killEliteMonsterNum: number;
    /**
     * @generated from protobuf field: uint32 kill_normal_monster_num = 4;
     */
    killNormalMonsterNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GallerySumoKillMonsterNotify$Type extends MessageType<GallerySumoKillMonsterNotify> {
    constructor() {
        super("GallerySumoKillMonsterNotify", [
            { no: 6, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "kill_elite_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "kill_normal_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GallerySumoKillMonsterNotify>): GallerySumoKillMonsterNotify {
        const message = { score: 0, galleryId: 0, killEliteMonsterNum: 0, killNormalMonsterNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GallerySumoKillMonsterNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GallerySumoKillMonsterNotify): GallerySumoKillMonsterNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 kill_elite_monster_num */ 14:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* uint32 kill_normal_monster_num */ 4:
                    message.killNormalMonsterNum = reader.uint32();
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
    internalBinaryWrite(message: GallerySumoKillMonsterNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 score = 6; */
        if (message.score !== 0)
            writer.tag(6, WireType.Varint).uint32(message.score);
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.galleryId);
        /* uint32 kill_elite_monster_num = 14; */
        if (message.killEliteMonsterNum !== 0)
            writer.tag(14, WireType.Varint).uint32(message.killEliteMonsterNum);
        /* uint32 kill_normal_monster_num = 4; */
        if (message.killNormalMonsterNum !== 0)
            writer.tag(4, WireType.Varint).uint32(message.killNormalMonsterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GallerySumoKillMonsterNotify
 */
export const GallerySumoKillMonsterNotify = new GallerySumoKillMonsterNotify$Type();