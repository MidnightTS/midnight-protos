// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GadgetPlayInfo.proto" (syntax proto3)
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
import { GadgetCrucibleInfo } from "./GadgetCrucibleInfo";
/**
 * @generated from protobuf message GadgetPlayInfo
 */
export interface GadgetPlayInfo {
    /**
     * @generated from protobuf field: uint32 play_type = 1;
     */
    playType: number;
    /**
     * @generated from protobuf field: uint32 duration = 2;
     */
    duration: number;
    /**
     * @generated from protobuf field: repeated uint32 progress_stage_list = 3;
     */
    progressStageList: number[];
    /**
     * @generated from protobuf field: uint32 start_cd = 4;
     */
    startCd: number;
    /**
     * @generated from protobuf field: uint32 start_time = 5;
     */
    startTime: number;
    /**
     * @generated from protobuf field: uint32 progress = 6;
     */
    progress: number;
    /**
     * @generated from protobuf oneof: play_info
     */
    playInfo: {
        oneofKind: "crucibleInfo";
        /**
         * @generated from protobuf field: GadgetCrucibleInfo crucible_info = 21;
         */
        crucibleInfo: GadgetCrucibleInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayInfo$Type extends MessageType<GadgetPlayInfo> {
    constructor() {
        super("GadgetPlayInfo", [
            { no: 1, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "duration", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "progress_stage_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_cd", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "crucible_info", kind: "message", oneof: "playInfo", T: () => GadgetCrucibleInfo }
        ]);
    }
    create(value?: PartialMessage<GadgetPlayInfo>): GadgetPlayInfo {
        const message = { playType: 0, duration: 0, progressStageList: [], startCd: 0, startTime: 0, progress: 0, playInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GadgetPlayInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GadgetPlayInfo): GadgetPlayInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 play_type */ 1:
                    message.playType = reader.uint32();
                    break;
                case /* uint32 duration */ 2:
                    message.duration = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* uint32 start_cd */ 4:
                    message.startCd = reader.uint32();
                    break;
                case /* uint32 start_time */ 5:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 progress */ 6:
                    message.progress = reader.uint32();
                    break;
                case /* GadgetCrucibleInfo crucible_info */ 21:
                    message.playInfo = {
                        oneofKind: "crucibleInfo",
                        crucibleInfo: GadgetCrucibleInfo.internalBinaryRead(reader, reader.uint32(), options, (message.playInfo as any).crucibleInfo)
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
    internalBinaryWrite(message: GadgetPlayInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 play_type = 1; */
        if (message.playType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.playType);
        /* uint32 duration = 2; */
        if (message.duration !== 0)
            writer.tag(2, WireType.Varint).uint32(message.duration);
        /* repeated uint32 progress_stage_list = 3; */
        if (message.progressStageList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.progressStageList.length; i++)
                writer.uint32(message.progressStageList[i]);
            writer.join();
        }
        /* uint32 start_cd = 4; */
        if (message.startCd !== 0)
            writer.tag(4, WireType.Varint).uint32(message.startCd);
        /* uint32 start_time = 5; */
        if (message.startTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.startTime);
        /* uint32 progress = 6; */
        if (message.progress !== 0)
            writer.tag(6, WireType.Varint).uint32(message.progress);
        /* GadgetCrucibleInfo crucible_info = 21; */
        if (message.playInfo.oneofKind === "crucibleInfo")
            GadgetCrucibleInfo.internalBinaryWrite(message.playInfo.crucibleInfo, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetPlayInfo
 */
export const GadgetPlayInfo = new GadgetPlayInfo$Type();
