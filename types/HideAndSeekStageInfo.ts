// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HideAndSeekStageInfo.proto" (syntax proto3)
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
import { HideAndSeekStageType } from "./HideAndSeekStageType";
import { HideAndSeekPlayerBattleInfo } from "./HideAndSeekPlayerBattleInfo";
/**
 * @generated from protobuf message HideAndSeekStageInfo
 */
export interface HideAndSeekStageInfo {
    /**
     * @generated from protobuf field: uint32 hunter_uid = 9;
     */
    hunterUid: number;
    /**
     * @generated from protobuf field: map<uint32, HideAndSeekPlayerBattleInfo> battle_info_map = 8;
     */
    battleInfoMap: {
        [key: number]: HideAndSeekPlayerBattleInfo;
    };
    /**
     * @generated from protobuf field: bool is_record_score = 5;
     */
    isRecordScore: boolean;
    /**
     * @generated from protobuf field: repeated uint32 hider_uid_list = 2;
     */
    hiderUidList: number[];
    /**
     * @generated from protobuf field: uint32 map_id = 13;
     */
    mapId: number;
    /**
     * @generated from protobuf field: HideAndSeekStageType stage_type = 6;
     */
    stageType: HideAndSeekStageType;
}
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekStageInfo$Type extends MessageType<HideAndSeekStageInfo> {
    constructor() {
        super("HideAndSeekStageInfo", [
            { no: 9, name: "hunter_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "battle_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => HideAndSeekPlayerBattleInfo } },
            { no: 5, name: "is_record_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "hider_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "map_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "stage_type", kind: "enum", T: () => ["HideAndSeekStageType", HideAndSeekStageType, "HIDE_AND_SEEK_STAGE_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<HideAndSeekStageInfo>): HideAndSeekStageInfo {
        const message = { hunterUid: 0, battleInfoMap: {}, isRecordScore: false, hiderUidList: [], mapId: 0, stageType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HideAndSeekStageInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HideAndSeekStageInfo): HideAndSeekStageInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 hunter_uid */ 9:
                    message.hunterUid = reader.uint32();
                    break;
                case /* map<uint32, HideAndSeekPlayerBattleInfo> battle_info_map */ 8:
                    this.binaryReadMap8(message.battleInfoMap, reader, options);
                    break;
                case /* bool is_record_score */ 5:
                    message.isRecordScore = reader.bool();
                    break;
                case /* repeated uint32 hider_uid_list */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hiderUidList.push(reader.uint32());
                    else
                        message.hiderUidList.push(reader.uint32());
                    break;
                case /* uint32 map_id */ 13:
                    message.mapId = reader.uint32();
                    break;
                case /* HideAndSeekStageType stage_type */ 6:
                    message.stageType = reader.int32();
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
    private binaryReadMap8(map: HideAndSeekStageInfo["battleInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof HideAndSeekStageInfo["battleInfoMap"] | undefined, val: HideAndSeekStageInfo["battleInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = HideAndSeekPlayerBattleInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field HideAndSeekStageInfo.battle_info_map");
            }
        }
        map[key ?? 0] = val ?? HideAndSeekPlayerBattleInfo.create();
    }
    internalBinaryWrite(message: HideAndSeekStageInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 hunter_uid = 9; */
        if (message.hunterUid !== 0)
            writer.tag(9, WireType.Varint).uint32(message.hunterUid);
        /* map<uint32, HideAndSeekPlayerBattleInfo> battle_info_map = 8; */
        for (let k of Object.keys(message.battleInfoMap)) {
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            HideAndSeekPlayerBattleInfo.internalBinaryWrite(message.battleInfoMap[k as any], writer, options);
            writer.join().join();
        }
        /* bool is_record_score = 5; */
        if (message.isRecordScore !== false)
            writer.tag(5, WireType.Varint).bool(message.isRecordScore);
        /* repeated uint32 hider_uid_list = 2; */
        if (message.hiderUidList.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hiderUidList.length; i++)
                writer.uint32(message.hiderUidList[i]);
            writer.join();
        }
        /* uint32 map_id = 13; */
        if (message.mapId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.mapId);
        /* HideAndSeekStageType stage_type = 6; */
        if (message.stageType !== 0)
            writer.tag(6, WireType.Varint).int32(message.stageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekStageInfo
 */
export const HideAndSeekStageInfo = new HideAndSeekStageInfo$Type();
