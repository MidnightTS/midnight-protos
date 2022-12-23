// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FallSettleInfo.proto" (syntax proto3)
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
import { OnlinePlayerInfo } from "./OnlinePlayerInfo";
/**
 * @generated from protobuf message FallSettleInfo
 */
export interface FallSettleInfo {
    /**
     * @generated from protobuf field: uint32 final_score = 14;
     */
    finalScore: number;
    /**
     * @generated from protobuf field: OnlinePlayerInfo player_info = 9;
     */
    playerInfo?: OnlinePlayerInfo;
    /**
     * @generated from protobuf field: map<uint32, uint32> flower_ring_catch_count_map = 13;
     */
    flowerRingCatchCountMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 uid = 2;
     */
    uid: number;
    /**
     * @generated from protobuf field: uint32 catch_count = 1;
     */
    catchCount: number;
    /**
     * @generated from protobuf field: uint32 remain_time = 6;
     */
    remainTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class FallSettleInfo$Type extends MessageType<FallSettleInfo> {
    constructor() {
        super("FallSettleInfo", [
            { no: 14, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "player_info", kind: "message", T: () => OnlinePlayerInfo },
            { no: 13, name: "flower_ring_catch_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "catch_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "remain_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<FallSettleInfo>): FallSettleInfo {
        const message = { finalScore: 0, flowerRingCatchCountMap: {}, uid: 0, catchCount: 0, remainTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FallSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FallSettleInfo): FallSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 final_score */ 14:
                    message.finalScore = reader.uint32();
                    break;
                case /* OnlinePlayerInfo player_info */ 9:
                    message.playerInfo = OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* map<uint32, uint32> flower_ring_catch_count_map */ 13:
                    this.binaryReadMap13(message.flowerRingCatchCountMap, reader, options);
                    break;
                case /* uint32 uid */ 2:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 catch_count */ 1:
                    message.catchCount = reader.uint32();
                    break;
                case /* uint32 remain_time */ 6:
                    message.remainTime = reader.uint32();
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
    private binaryReadMap13(map: FallSettleInfo["flowerRingCatchCountMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof FallSettleInfo["flowerRingCatchCountMap"] | undefined, val: FallSettleInfo["flowerRingCatchCountMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FallSettleInfo.flower_ring_catch_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: FallSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 final_score = 14; */
        if (message.finalScore !== 0)
            writer.tag(14, WireType.Varint).uint32(message.finalScore);
        /* OnlinePlayerInfo player_info = 9; */
        if (message.playerInfo)
            OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> flower_ring_catch_count_map = 13; */
        for (let k of Object.keys(message.flowerRingCatchCountMap))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.flowerRingCatchCountMap[k as any]).join();
        /* uint32 uid = 2; */
        if (message.uid !== 0)
            writer.tag(2, WireType.Varint).uint32(message.uid);
        /* uint32 catch_count = 1; */
        if (message.catchCount !== 0)
            writer.tag(1, WireType.Varint).uint32(message.catchCount);
        /* uint32 remain_time = 6; */
        if (message.remainTime !== 0)
            writer.tag(6, WireType.Varint).uint32(message.remainTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FallSettleInfo
 */
export const FallSettleInfo = new FallSettleInfo$Type();
