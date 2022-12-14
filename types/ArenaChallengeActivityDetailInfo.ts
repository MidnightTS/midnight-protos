// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ArenaChallengeActivityDetailInfo.proto" (syntax proto3)
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
import { ArenaChallengeMonsterLevel } from "./ArenaChallengeMonsterLevel";
/**
 * @generated from protobuf message ArenaChallengeActivityDetailInfo
 */
export interface ArenaChallengeActivityDetailInfo {
    /**
     * @generated from protobuf field: repeated ArenaChallengeMonsterLevel level_list = 15;
     */
    levelList: ArenaChallengeMonsterLevel[];
    /**
     * @generated from protobuf field: map<uint32, uint32> level_open_time_map = 1;
     */
    levelOpenTimeMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: bool is_finish_any_level = 4;
     */
    isFinishAnyLevel: boolean;
    /**
     * @generated from protobuf field: uint32 world_level = 7;
     */
    worldLevel: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ArenaChallengeActivityDetailInfo$Type extends MessageType<ArenaChallengeActivityDetailInfo> {
    constructor() {
        super("ArenaChallengeActivityDetailInfo", [
            { no: 15, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ArenaChallengeMonsterLevel },
            { no: 1, name: "level_open_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "is_finish_any_level", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "world_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ArenaChallengeActivityDetailInfo>): ArenaChallengeActivityDetailInfo {
        const message = { levelList: [], levelOpenTimeMap: {}, isFinishAnyLevel: false, worldLevel: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ArenaChallengeActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ArenaChallengeActivityDetailInfo): ArenaChallengeActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ArenaChallengeMonsterLevel level_list */ 15:
                    message.levelList.push(ArenaChallengeMonsterLevel.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, uint32> level_open_time_map */ 1:
                    this.binaryReadMap1(message.levelOpenTimeMap, reader, options);
                    break;
                case /* bool is_finish_any_level */ 4:
                    message.isFinishAnyLevel = reader.bool();
                    break;
                case /* uint32 world_level */ 7:
                    message.worldLevel = reader.uint32();
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
    private binaryReadMap1(map: ArenaChallengeActivityDetailInfo["levelOpenTimeMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ArenaChallengeActivityDetailInfo["levelOpenTimeMap"] | undefined, val: ArenaChallengeActivityDetailInfo["levelOpenTimeMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ArenaChallengeActivityDetailInfo.level_open_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: ArenaChallengeActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ArenaChallengeMonsterLevel level_list = 15; */
        for (let i = 0; i < message.levelList.length; i++)
            ArenaChallengeMonsterLevel.internalBinaryWrite(message.levelList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> level_open_time_map = 1; */
        for (let k of Object.keys(message.levelOpenTimeMap))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.levelOpenTimeMap[k as any]).join();
        /* bool is_finish_any_level = 4; */
        if (message.isFinishAnyLevel !== false)
            writer.tag(4, WireType.Varint).bool(message.isFinishAnyLevel);
        /* uint32 world_level = 7; */
        if (message.worldLevel !== 0)
            writer.tag(7, WireType.Varint).uint32(message.worldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ArenaChallengeActivityDetailInfo
 */
export const ArenaChallengeActivityDetailInfo = new ArenaChallengeActivityDetailInfo$Type();
