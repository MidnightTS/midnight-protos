// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "InBattleIrodoriChessSettleInfo.proto" (syntax proto3)
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
 * @generated from protobuf message InBattleIrodoriChessSettleInfo
 */
export interface InBattleIrodoriChessSettleInfo {
    /**
     * @generated from protobuf field: uint32 kill_monster_num = 15;
     */
    killMonsterNum: number;
    /**
     * @generated from protobuf field: uint64 scene_time_ms = 14;
     */
    sceneTimeMs: bigint;
    /**
     * @generated from protobuf field: bool is_perfect = 8;
     */
    isPerfect: boolean;
    /**
     * @generated from protobuf field: bool is_new_record = 7;
     */
    isNewRecord: boolean;
    /**
     * @generated from protobuf field: uint32 settle_score = 10;
     */
    settleScore: number;
    /**
     * @generated from protobuf field: bool is_activity_end = 5;
     */
    isActivityEnd: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessSettleInfo$Type extends MessageType<InBattleIrodoriChessSettleInfo> {
    constructor() {
        super("InBattleIrodoriChessSettleInfo", [
            { no: 15, name: "kill_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "is_perfect", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "settle_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_activity_end", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<InBattleIrodoriChessSettleInfo>): InBattleIrodoriChessSettleInfo {
        const message = { killMonsterNum: 0, sceneTimeMs: 0n, isPerfect: false, isNewRecord: false, settleScore: 0, isActivityEnd: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleIrodoriChessSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleIrodoriChessSettleInfo): InBattleIrodoriChessSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 kill_monster_num */ 15:
                    message.killMonsterNum = reader.uint32();
                    break;
                case /* uint64 scene_time_ms */ 14:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* bool is_perfect */ 8:
                    message.isPerfect = reader.bool();
                    break;
                case /* bool is_new_record */ 7:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 settle_score */ 10:
                    message.settleScore = reader.uint32();
                    break;
                case /* bool is_activity_end */ 5:
                    message.isActivityEnd = reader.bool();
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
    internalBinaryWrite(message: InBattleIrodoriChessSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 kill_monster_num = 15; */
        if (message.killMonsterNum !== 0)
            writer.tag(15, WireType.Varint).uint32(message.killMonsterNum);
        /* uint64 scene_time_ms = 14; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(14, WireType.Varint).uint64(message.sceneTimeMs);
        /* bool is_perfect = 8; */
        if (message.isPerfect !== false)
            writer.tag(8, WireType.Varint).bool(message.isPerfect);
        /* bool is_new_record = 7; */
        if (message.isNewRecord !== false)
            writer.tag(7, WireType.Varint).bool(message.isNewRecord);
        /* uint32 settle_score = 10; */
        if (message.settleScore !== 0)
            writer.tag(10, WireType.Varint).uint32(message.settleScore);
        /* bool is_activity_end = 5; */
        if (message.isActivityEnd !== false)
            writer.tag(5, WireType.Varint).bool(message.isActivityEnd);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleIrodoriChessSettleInfo
 */
export const InBattleIrodoriChessSettleInfo = new InBattleIrodoriChessSettleInfo$Type();
