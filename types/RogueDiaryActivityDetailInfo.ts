// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RogueDiaryActivityDetailInfo.proto" (syntax proto3)
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
import { RogueDiaryProgress } from "./RogueDiaryProgress";
import { RogueDiaryStageInfo } from "./RogueDiaryStageInfo";
/**
 * @generated from protobuf message RogueDiaryActivityDetailInfo
 */
export interface RogueDiaryActivityDetailInfo {
    /**
     * @generated from protobuf field: bool is_content_closed = 3;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: repeated RogueDiaryStageInfo stage_list = 11;
     */
    stageList: RogueDiaryStageInfo[];
    /**
     * @generated from protobuf field: bool is_have_progress = 5;
     */
    isHaveProgress: boolean;
    /**
     * @generated from protobuf field: RogueDiaryProgress cur_progress = 10;
     */
    curProgress?: RogueDiaryProgress;
}
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryActivityDetailInfo$Type extends MessageType<RogueDiaryActivityDetailInfo> {
    constructor() {
        super("RogueDiaryActivityDetailInfo", [
            { no: 3, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryStageInfo },
            { no: 5, name: "is_have_progress", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "cur_progress", kind: "message", T: () => RogueDiaryProgress }
        ]);
    }
    create(value?: PartialMessage<RogueDiaryActivityDetailInfo>): RogueDiaryActivityDetailInfo {
        const message = { isContentClosed: false, stageList: [], isHaveProgress: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RogueDiaryActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueDiaryActivityDetailInfo): RogueDiaryActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_content_closed */ 3:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated RogueDiaryStageInfo stage_list */ 11:
                    message.stageList.push(RogueDiaryStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_have_progress */ 5:
                    message.isHaveProgress = reader.bool();
                    break;
                case /* RogueDiaryProgress cur_progress */ 10:
                    message.curProgress = RogueDiaryProgress.internalBinaryRead(reader, reader.uint32(), options, message.curProgress);
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
    internalBinaryWrite(message: RogueDiaryActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_content_closed = 3; */
        if (message.isContentClosed !== false)
            writer.tag(3, WireType.Varint).bool(message.isContentClosed);
        /* repeated RogueDiaryStageInfo stage_list = 11; */
        for (let i = 0; i < message.stageList.length; i++)
            RogueDiaryStageInfo.internalBinaryWrite(message.stageList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* bool is_have_progress = 5; */
        if (message.isHaveProgress !== false)
            writer.tag(5, WireType.Varint).bool(message.isHaveProgress);
        /* RogueDiaryProgress cur_progress = 10; */
        if (message.curProgress)
            RogueDiaryProgress.internalBinaryWrite(message.curProgress, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryActivityDetailInfo
 */
export const RogueDiaryActivityDetailInfo = new RogueDiaryActivityDetailInfo$Type();
