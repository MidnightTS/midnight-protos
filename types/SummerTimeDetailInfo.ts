// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SummerTimeDetailInfo.proto" (syntax proto3)
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
import { SummerTimeSprintBoatInfo } from "./SummerTimeSprintBoatInfo";
import { SummerTimeStageInfo } from "./SummerTimeStageInfo";
/**
 * @generated from protobuf message SummerTimeDetailInfo
 */
export interface SummerTimeDetailInfo {
    /**
     * @generated from protobuf field: map<uint32, SummerTimeStageInfo> stage_map = 9;
     */
    stageMap: {
        [key: number]: SummerTimeStageInfo;
    };
    /**
     * @generated from protobuf field: SummerTimeSprintBoatInfo sprint_boat_info = 1;
     */
    sprintBoatInfo?: SummerTimeSprintBoatInfo;
    /**
     * @generated from protobuf field: bool is_content_closed = 13;
     */
    isContentClosed: boolean;
    /**
     * @generated from protobuf field: uint32 content_close_time = 12;
     */
    contentCloseTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeDetailInfo$Type extends MessageType<SummerTimeDetailInfo> {
    constructor() {
        super("SummerTimeDetailInfo", [
            { no: 9, name: "stage_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => SummerTimeStageInfo } },
            { no: 1, name: "sprint_boat_info", kind: "message", T: () => SummerTimeSprintBoatInfo },
            { no: 13, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SummerTimeDetailInfo>): SummerTimeDetailInfo {
        const message = { stageMap: {}, isContentClosed: false, contentCloseTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SummerTimeDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SummerTimeDetailInfo): SummerTimeDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, SummerTimeStageInfo> stage_map */ 9:
                    this.binaryReadMap9(message.stageMap, reader, options);
                    break;
                case /* SummerTimeSprintBoatInfo sprint_boat_info */ 1:
                    message.sprintBoatInfo = SummerTimeSprintBoatInfo.internalBinaryRead(reader, reader.uint32(), options, message.sprintBoatInfo);
                    break;
                case /* bool is_content_closed */ 13:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 content_close_time */ 12:
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
    private binaryReadMap9(map: SummerTimeDetailInfo["stageMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof SummerTimeDetailInfo["stageMap"] | undefined, val: SummerTimeDetailInfo["stageMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = SummerTimeStageInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SummerTimeDetailInfo.stage_map");
            }
        }
        map[key ?? 0] = val ?? SummerTimeStageInfo.create();
    }
    internalBinaryWrite(message: SummerTimeDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, SummerTimeStageInfo> stage_map = 9; */
        for (let k of Object.keys(message.stageMap)) {
            writer.tag(9, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            SummerTimeStageInfo.internalBinaryWrite(message.stageMap[k as any], writer, options);
            writer.join().join();
        }
        /* SummerTimeSprintBoatInfo sprint_boat_info = 1; */
        if (message.sprintBoatInfo)
            SummerTimeSprintBoatInfo.internalBinaryWrite(message.sprintBoatInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 13; */
        if (message.isContentClosed !== false)
            writer.tag(13, WireType.Varint).bool(message.isContentClosed);
        /* uint32 content_close_time = 12; */
        if (message.contentCloseTime !== 0)
            writer.tag(12, WireType.Varint).uint32(message.contentCloseTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeDetailInfo
 */
export const SummerTimeDetailInfo = new SummerTimeDetailInfo$Type();
