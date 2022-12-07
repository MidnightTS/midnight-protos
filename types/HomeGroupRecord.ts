// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeGroupRecord.proto" (syntax proto3)
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
import { HomeSeekFurnitureAllRecord } from "./HomeSeekFurnitureAllRecord";
import { HomeStakeRecord } from "./HomeStakeRecord";
import { HomeBalloonRecord } from "./HomeBalloonRecord";
import { HomeRacingRecord } from "./HomeRacingRecord";
/**
 * @generated from protobuf message HomeGroupRecord
 */
export interface HomeGroupRecord {
    /**
     * @generated from protobuf field: uint32 group_id = 15;
     */
    groupId: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "racingGalleryInfo";
        /**
         * @generated from protobuf field: HomeRacingRecord racing_gallery_info = 835;
         */
        racingGalleryInfo: HomeRacingRecord;
    } | {
        oneofKind: "balloonGalleryInfo";
        /**
         * @generated from protobuf field: HomeBalloonRecord balloon_gallery_info = 726;
         */
        balloonGalleryInfo: HomeBalloonRecord;
    } | {
        oneofKind: "stakePlayInfo";
        /**
         * @generated from protobuf field: HomeStakeRecord stake_play_info = 1818;
         */
        stakePlayInfo: HomeStakeRecord;
    } | {
        oneofKind: "seekFurnitureGalleryInfo";
        /**
         * @generated from protobuf field: HomeSeekFurnitureAllRecord seek_furniture_gallery_info = 370;
         */
        seekFurnitureGalleryInfo: HomeSeekFurnitureAllRecord;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeGroupRecord$Type extends MessageType<HomeGroupRecord> {
    constructor() {
        super("HomeGroupRecord", [
            { no: 15, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 835, name: "racing_gallery_info", kind: "message", oneof: "detail", T: () => HomeRacingRecord },
            { no: 726, name: "balloon_gallery_info", kind: "message", oneof: "detail", T: () => HomeBalloonRecord },
            { no: 1818, name: "stake_play_info", kind: "message", oneof: "detail", T: () => HomeStakeRecord },
            { no: 370, name: "seek_furniture_gallery_info", kind: "message", oneof: "detail", T: () => HomeSeekFurnitureAllRecord }
        ]);
    }
    create(value?: PartialMessage<HomeGroupRecord>): HomeGroupRecord {
        const message = { groupId: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeGroupRecord>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeGroupRecord): HomeGroupRecord {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 group_id */ 15:
                    message.groupId = reader.uint32();
                    break;
                case /* HomeRacingRecord racing_gallery_info */ 835:
                    message.detail = {
                        oneofKind: "racingGalleryInfo",
                        racingGalleryInfo: HomeRacingRecord.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).racingGalleryInfo)
                    };
                    break;
                case /* HomeBalloonRecord balloon_gallery_info */ 726:
                    message.detail = {
                        oneofKind: "balloonGalleryInfo",
                        balloonGalleryInfo: HomeBalloonRecord.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).balloonGalleryInfo)
                    };
                    break;
                case /* HomeStakeRecord stake_play_info */ 1818:
                    message.detail = {
                        oneofKind: "stakePlayInfo",
                        stakePlayInfo: HomeStakeRecord.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).stakePlayInfo)
                    };
                    break;
                case /* HomeSeekFurnitureAllRecord seek_furniture_gallery_info */ 370:
                    message.detail = {
                        oneofKind: "seekFurnitureGalleryInfo",
                        seekFurnitureGalleryInfo: HomeSeekFurnitureAllRecord.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).seekFurnitureGalleryInfo)
                    };
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
    internalBinaryWrite(message: HomeGroupRecord, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 group_id = 15; */
        if (message.groupId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.groupId);
        /* HomeRacingRecord racing_gallery_info = 835; */
        if (message.detail.oneofKind === "racingGalleryInfo")
            HomeRacingRecord.internalBinaryWrite(message.detail.racingGalleryInfo, writer.tag(835, WireType.LengthDelimited).fork(), options).join();
        /* HomeBalloonRecord balloon_gallery_info = 726; */
        if (message.detail.oneofKind === "balloonGalleryInfo")
            HomeBalloonRecord.internalBinaryWrite(message.detail.balloonGalleryInfo, writer.tag(726, WireType.LengthDelimited).fork(), options).join();
        /* HomeStakeRecord stake_play_info = 1818; */
        if (message.detail.oneofKind === "stakePlayInfo")
            HomeStakeRecord.internalBinaryWrite(message.detail.stakePlayInfo, writer.tag(1818, WireType.LengthDelimited).fork(), options).join();
        /* HomeSeekFurnitureAllRecord seek_furniture_gallery_info = 370; */
        if (message.detail.oneofKind === "seekFurnitureGalleryInfo")
            HomeSeekFurnitureAllRecord.internalBinaryWrite(message.detail.seekFurnitureGalleryInfo, writer.tag(370, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGroupRecord
 */
export const HomeGroupRecord = new HomeGroupRecord$Type();
