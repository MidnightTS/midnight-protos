// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChannelerSlabActivityDetailInfo.proto" (syntax proto3)
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
import { ChannelerSlabChallengeStage } from "./ChannelerSlabChallengeStage";
import { ChannelerSlabBuffInfo } from "./ChannelerSlabBuffInfo";
import { ChannelerSlabLoopDungeonStageInfo } from "./ChannelerSlabLoopDungeonStageInfo";
/**
 * @generated from protobuf message ChannelerSlabActivityDetailInfo
 */
export interface ChannelerSlabActivityDetailInfo {
    /**
     * @generated from protobuf field: ChannelerSlabLoopDungeonStageInfo loop_dungeon_stage_info = 2;
     */
    loopDungeonStageInfo?: ChannelerSlabLoopDungeonStageInfo;
    /**
     * @generated from protobuf field: ChannelerSlabBuffInfo buff_info = 9;
     */
    buffInfo?: ChannelerSlabBuffInfo;
    /**
     * @generated from protobuf field: repeated ChannelerSlabChallengeStage stage_list = 8;
     */
    stageList: ChannelerSlabChallengeStage[];
    /**
     * @generated from protobuf field: uint32 play_end_time = 14;
     */
    playEndTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabActivityDetailInfo$Type extends MessageType<ChannelerSlabActivityDetailInfo> {
    constructor() {
        super("ChannelerSlabActivityDetailInfo", [
            { no: 2, name: "loop_dungeon_stage_info", kind: "message", T: () => ChannelerSlabLoopDungeonStageInfo },
            { no: 9, name: "buff_info", kind: "message", T: () => ChannelerSlabBuffInfo },
            { no: 8, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabChallengeStage },
            { no: 14, name: "play_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ChannelerSlabActivityDetailInfo>): ChannelerSlabActivityDetailInfo {
        const message = { stageList: [], playEndTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChannelerSlabActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChannelerSlabActivityDetailInfo): ChannelerSlabActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ChannelerSlabLoopDungeonStageInfo loop_dungeon_stage_info */ 2:
                    message.loopDungeonStageInfo = ChannelerSlabLoopDungeonStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.loopDungeonStageInfo);
                    break;
                case /* ChannelerSlabBuffInfo buff_info */ 9:
                    message.buffInfo = ChannelerSlabBuffInfo.internalBinaryRead(reader, reader.uint32(), options, message.buffInfo);
                    break;
                case /* repeated ChannelerSlabChallengeStage stage_list */ 8:
                    message.stageList.push(ChannelerSlabChallengeStage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 play_end_time */ 14:
                    message.playEndTime = reader.uint32();
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
    internalBinaryWrite(message: ChannelerSlabActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ChannelerSlabLoopDungeonStageInfo loop_dungeon_stage_info = 2; */
        if (message.loopDungeonStageInfo)
            ChannelerSlabLoopDungeonStageInfo.internalBinaryWrite(message.loopDungeonStageInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffInfo buff_info = 9; */
        if (message.buffInfo)
            ChannelerSlabBuffInfo.internalBinaryWrite(message.buffInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated ChannelerSlabChallengeStage stage_list = 8; */
        for (let i = 0; i < message.stageList.length; i++)
            ChannelerSlabChallengeStage.internalBinaryWrite(message.stageList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 play_end_time = 14; */
        if (message.playEndTime !== 0)
            writer.tag(14, WireType.Varint).uint32(message.playEndTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabActivityDetailInfo
 */
export const ChannelerSlabActivityDetailInfo = new ChannelerSlabActivityDetailInfo$Type();
