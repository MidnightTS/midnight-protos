// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DragonSpineChapterProgressChangeNotify.proto" (syntax proto3)
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
 *   CMD_ID = 2035;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DragonSpineChapterProgressChangeNotify
 */
export interface DragonSpineChapterProgressChangeNotify {
    /**
     * @generated from protobuf field: uint32 chapter_id = 9;
     */
    chapterId: number;
    /**
     * @generated from protobuf field: uint32 schedule_id = 3;
     */
    scheduleId: number;
    /**
     * @generated from protobuf field: uint32 cur_progress = 11;
     */
    curProgress: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DragonSpineChapterProgressChangeNotify$Type extends MessageType<DragonSpineChapterProgressChangeNotify> {
    constructor() {
        super("DragonSpineChapterProgressChangeNotify", [
            { no: 9, name: "chapter_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DragonSpineChapterProgressChangeNotify>): DragonSpineChapterProgressChangeNotify {
        const message = { chapterId: 0, scheduleId: 0, curProgress: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DragonSpineChapterProgressChangeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DragonSpineChapterProgressChangeNotify): DragonSpineChapterProgressChangeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 chapter_id */ 9:
                    message.chapterId = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 3:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 cur_progress */ 11:
                    message.curProgress = reader.uint32();
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
    internalBinaryWrite(message: DragonSpineChapterProgressChangeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 chapter_id = 9; */
        if (message.chapterId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.chapterId);
        /* uint32 schedule_id = 3; */
        if (message.scheduleId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.scheduleId);
        /* uint32 cur_progress = 11; */
        if (message.curProgress !== 0)
            writer.tag(11, WireType.Varint).uint32(message.curProgress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DragonSpineChapterProgressChangeNotify
 */
export const DragonSpineChapterProgressChangeNotify = new DragonSpineChapterProgressChangeNotify$Type();
