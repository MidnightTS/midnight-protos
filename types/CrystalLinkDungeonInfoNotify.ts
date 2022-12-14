// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CrystalLinkDungeonInfoNotify.proto" (syntax proto3)
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
import { CrystalLinkDungeonAvatarInfo } from "./CrystalLinkDungeonAvatarInfo";
import { CrystalLinkBuffInfo } from "./CrystalLinkBuffInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8408;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CrystalLinkDungeonInfoNotify
 */
export interface CrystalLinkDungeonInfoNotify {
    /**
     * @generated from protobuf field: repeated CrystalLinkBuffInfo buff_info_list = 11;
     */
    buffInfoList: CrystalLinkBuffInfo[];
    /**
     * @generated from protobuf field: uint32 level_id = 5;
     */
    levelId: number;
    /**
     * @generated from protobuf field: bool is_upper_part = 13;
     */
    isUpperPart: boolean;
    /**
     * @generated from protobuf field: uint32 difficulty_id = 14;
     */
    difficultyId: number;
    /**
     * @generated from protobuf field: repeated CrystalLinkDungeonAvatarInfo dungeon_avatar_info_list = 12;
     */
    dungeonAvatarInfoList: CrystalLinkDungeonAvatarInfo[];
    /**
     * @generated from protobuf field: uint32 init_gallery_progress = 4;
     */
    initGalleryProgress: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkDungeonInfoNotify$Type extends MessageType<CrystalLinkDungeonInfoNotify> {
    constructor() {
        super("CrystalLinkDungeonInfoNotify", [
            { no: 11, name: "buff_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkBuffInfo },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_upper_part", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_avatar_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkDungeonAvatarInfo },
            { no: 4, name: "init_gallery_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CrystalLinkDungeonInfoNotify>): CrystalLinkDungeonInfoNotify {
        const message = { buffInfoList: [], levelId: 0, isUpperPart: false, difficultyId: 0, dungeonAvatarInfoList: [], initGalleryProgress: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CrystalLinkDungeonInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CrystalLinkDungeonInfoNotify): CrystalLinkDungeonInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated CrystalLinkBuffInfo buff_info_list */ 11:
                    message.buffInfoList.push(CrystalLinkBuffInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_upper_part */ 13:
                    message.isUpperPart = reader.bool();
                    break;
                case /* uint32 difficulty_id */ 14:
                    message.difficultyId = reader.uint32();
                    break;
                case /* repeated CrystalLinkDungeonAvatarInfo dungeon_avatar_info_list */ 12:
                    message.dungeonAvatarInfoList.push(CrystalLinkDungeonAvatarInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 init_gallery_progress */ 4:
                    message.initGalleryProgress = reader.uint32();
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
    internalBinaryWrite(message: CrystalLinkDungeonInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated CrystalLinkBuffInfo buff_info_list = 11; */
        for (let i = 0; i < message.buffInfoList.length; i++)
            CrystalLinkBuffInfo.internalBinaryWrite(message.buffInfoList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.levelId);
        /* bool is_upper_part = 13; */
        if (message.isUpperPart !== false)
            writer.tag(13, WireType.Varint).bool(message.isUpperPart);
        /* uint32 difficulty_id = 14; */
        if (message.difficultyId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.difficultyId);
        /* repeated CrystalLinkDungeonAvatarInfo dungeon_avatar_info_list = 12; */
        for (let i = 0; i < message.dungeonAvatarInfoList.length; i++)
            CrystalLinkDungeonAvatarInfo.internalBinaryWrite(message.dungeonAvatarInfoList[i], writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* uint32 init_gallery_progress = 4; */
        if (message.initGalleryProgress !== 0)
            writer.tag(4, WireType.Varint).uint32(message.initGalleryProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkDungeonInfoNotify
 */
export const CrystalLinkDungeonInfoNotify = new CrystalLinkDungeonInfoNotify$Type();
