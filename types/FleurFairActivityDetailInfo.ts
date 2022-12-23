// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FleurFairActivityDetailInfo.proto" (syntax proto3)
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
import { FleurFairMinigameInfo } from "./FleurFairMinigameInfo";
import { FleurFairDungeonSectionInfo } from "./FleurFairDungeonSectionInfo";
import { FleurFairChapterInfo } from "./FleurFairChapterInfo";
/**
 * @generated from protobuf message FleurFairActivityDetailInfo
 */
export interface FleurFairActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_KONOCAMIIIE = 3 [json_name = "Unk3300KONOCAMIIIE"];
     */
    unk3300KONOCAMIIIE: number;
    /**
     * @generated from protobuf field: repeated FleurFairChapterInfo chapter_info_list = 5;
     */
    chapterInfoList: FleurFairChapterInfo[];
    /**
     * @generated from protobuf field: bool is_dungeon_unlocked = 6;
     */
    isDungeonUnlocked: boolean;
    /**
     * @generated from protobuf field: map<uint32, FleurFairDungeonSectionInfo> dungeon_section_info_map = 8;
     */
    dungeonSectionInfoMap: {
        [key: number]: FleurFairDungeonSectionInfo;
    };
    /**
     * @generated from protobuf field: bool is_content_closed = 13;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: map<uint32, FleurFairMinigameInfo> minigame_info_map = 9;
     */
    minigameInfoMap: {
        [key: number]: FleurFairMinigameInfo;
    };
    /**
     * @generated from protobuf field: uint32 Unk3300_LOFLGOOIMNH = 10 [json_name = "Unk3300LOFLGOOIMNH"];
     */
    unk3300LOFLGOOIMNH: number;
    /**
     * @generated from protobuf field: uint32 content_close_time = 4;
     */
    contentCloseTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairActivityDetailInfo$Type extends MessageType<FleurFairActivityDetailInfo> {
    constructor() {
        super("FleurFairActivityDetailInfo", [
            { no: 3, name: "Unk3300_KONOCAMIIIE", kind: "scalar", jsonName: "Unk3300KONOCAMIIIE", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "chapter_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FleurFairChapterInfo },
            { no: 6, name: "is_dungeon_unlocked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "dungeon_section_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FleurFairDungeonSectionInfo } },
            { no: 13, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "minigame_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FleurFairMinigameInfo } },
            { no: 10, name: "Unk3300_LOFLGOOIMNH", kind: "scalar", jsonName: "Unk3300LOFLGOOIMNH", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FleurFairActivityDetailInfo>): FleurFairActivityDetailInfo {
        const message = { unk3300KONOCAMIIIE: 0, chapterInfoList: [], isDungeonUnlocked: false, dungeonSectionInfoMap: {}, isContentClosed: false, minigameInfoMap: {}, unk3300LOFLGOOIMNH: 0, contentCloseTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FleurFairActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FleurFairActivityDetailInfo): FleurFairActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_KONOCAMIIIE = 3 [json_name = "Unk3300KONOCAMIIIE"];*/ 3:
                    message.unk3300KONOCAMIIIE = reader.uint32();
                    break;
                case /* repeated FleurFairChapterInfo chapter_info_list */ 5:
                    message.chapterInfoList.push(FleurFairChapterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_dungeon_unlocked */ 6:
                    message.isDungeonUnlocked = reader.bool();
                    break;
                case /* map<uint32, FleurFairDungeonSectionInfo> dungeon_section_info_map */ 8:
                    this.binaryReadMap8(message.dungeonSectionInfoMap, reader, options);
                    break;
                case /* bool is_content_closed */ 13:
                    message.isContentClosed = reader.bool();
                    break;
                case /* map<uint32, FleurFairMinigameInfo> minigame_info_map */ 9:
                    this.binaryReadMap9(message.minigameInfoMap, reader, options);
                    break;
                case /* uint32 Unk3300_LOFLGOOIMNH = 10 [json_name = "Unk3300LOFLGOOIMNH"];*/ 10:
                    message.unk3300LOFLGOOIMNH = reader.uint32();
                    break;
                case /* uint32 content_close_time */ 4:
                    message.contentCloseTime = reader.uint32();
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
    private binaryReadMap8(map: FleurFairActivityDetailInfo["dungeonSectionInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof FleurFairActivityDetailInfo["dungeonSectionInfoMap"] | undefined, val: FleurFairActivityDetailInfo["dungeonSectionInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FleurFairDungeonSectionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairActivityDetailInfo.dungeon_section_info_map");
            }
        }
        map[key ?? 0] = val ?? FleurFairDungeonSectionInfo.create();
    }
    private binaryReadMap9(map: FleurFairActivityDetailInfo["minigameInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof FleurFairActivityDetailInfo["minigameInfoMap"] | undefined, val: FleurFairActivityDetailInfo["minigameInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = FleurFairMinigameInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairActivityDetailInfo.minigame_info_map");
            }
        }
        map[key ?? 0] = val ?? FleurFairMinigameInfo.create();
    }
    internalBinaryWrite(message: FleurFairActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_KONOCAMIIIE = 3 [json_name = "Unk3300KONOCAMIIIE"]; */
        if (message.unk3300KONOCAMIIIE !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300KONOCAMIIIE);
        /* repeated FleurFairChapterInfo chapter_info_list = 5; */
        for (let i = 0; i < message.chapterInfoList.length; i++)
            FleurFairChapterInfo.internalBinaryWrite(message.chapterInfoList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* bool is_dungeon_unlocked = 6; */
        if (message.isDungeonUnlocked !== false)
            writer.tag(6, WireType.Varint).bool(message.isDungeonUnlocked);
        /* map<uint32, FleurFairDungeonSectionInfo> dungeon_section_info_map = 8; */
        for (let k of Object.keys(message.dungeonSectionInfoMap)) {
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            FleurFairDungeonSectionInfo.internalBinaryWrite(message.dungeonSectionInfoMap[k as any], writer, options);
            writer.join().join();
        }
        /* bool is_content_closed = 13; */
        if (message.isContentClosed !== false)
            writer.tag(13, WireType.Varint).bool(message.isContentClosed);
        /* map<uint32, FleurFairMinigameInfo> minigame_info_map = 9; */
        for (let k of Object.keys(message.minigameInfoMap)) {
            writer.tag(9, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            FleurFairMinigameInfo.internalBinaryWrite(message.minigameInfoMap[k as any], writer, options);
            writer.join().join();
        }
        /* uint32 Unk3300_LOFLGOOIMNH = 10 [json_name = "Unk3300LOFLGOOIMNH"]; */
        if (message.unk3300LOFLGOOIMNH !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300LOFLGOOIMNH);
        /* uint32 content_close_time = 4; */
        if (message.contentCloseTime !== 0)
            writer.tag(4, WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairActivityDetailInfo
 */
export const FleurFairActivityDetailInfo = new FleurFairActivityDetailInfo$Type();
