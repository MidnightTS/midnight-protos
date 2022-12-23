// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CoopDataNotify.proto" (syntax proto3)
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
import { CoopChapter } from "./CoopChapter";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1994;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CoopDataNotify
 */
export interface CoopDataNotify {
    /**
     * @generated from protobuf field: bool is_have_progress = 11;
     */
    isHaveProgress: boolean;
    /**
     * @generated from protobuf field: uint32 cur_coop_point = 1;
     */
    curCoopPoint: number;
    /**
     * @generated from protobuf field: repeated uint32 viewed_chapter_list = 6;
     */
    viewedChapterList: number[];
    /**
     * @generated from protobuf field: repeated CoopChapter chapter_list = 3;
     */
    chapterList: CoopChapter[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CoopDataNotify$Type extends MessageType<CoopDataNotify> {
    constructor() {
        super("CoopDataNotify", [
            { no: 11, name: "is_have_progress", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "cur_coop_point", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "viewed_chapter_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "chapter_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoopChapter }
        ]);
    }
    create(value?: PartialMessage<CoopDataNotify>): CoopDataNotify {
        const message = { isHaveProgress: false, curCoopPoint: 0, viewedChapterList: [], chapterList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CoopDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CoopDataNotify): CoopDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_have_progress */ 11:
                    message.isHaveProgress = reader.bool();
                    break;
                case /* uint32 cur_coop_point */ 1:
                    message.curCoopPoint = reader.uint32();
                    break;
                case /* repeated uint32 viewed_chapter_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.viewedChapterList.push(reader.uint32());
                    else
                        message.viewedChapterList.push(reader.uint32());
                    break;
                case /* repeated CoopChapter chapter_list */ 3:
                    message.chapterList.push(CoopChapter.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: CoopDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_have_progress = 11; */
        if (message.isHaveProgress !== false)
            writer.tag(11, WireType.Varint).bool(message.isHaveProgress);
        /* uint32 cur_coop_point = 1; */
        if (message.curCoopPoint !== 0)
            writer.tag(1, WireType.Varint).uint32(message.curCoopPoint);
        /* repeated uint32 viewed_chapter_list = 6; */
        if (message.viewedChapterList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.viewedChapterList.length; i++)
                writer.uint32(message.viewedChapterList[i]);
            writer.join();
        }
        /* repeated CoopChapter chapter_list = 3; */
        for (let i = 0; i < message.chapterList.length; i++)
            CoopChapter.internalBinaryWrite(message.chapterList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopDataNotify
 */
export const CoopDataNotify = new CoopDataNotify$Type();
