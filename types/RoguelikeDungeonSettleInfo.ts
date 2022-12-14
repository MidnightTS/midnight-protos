// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RoguelikeDungeonSettleInfo.proto" (syntax proto3)
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
import { RoguelikeSettleCoinInfo } from "./RoguelikeSettleCoinInfo";
/**
 * @generated from protobuf message RoguelikeDungeonSettleInfo
 */
export interface RoguelikeDungeonSettleInfo {
    /**
     * @generated from protobuf field: uint32 stage_id = 9;
     */
    stageId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GMMECMPDJMI = 8 [json_name = "Unk3300GMMECMPDJMI"];
     */
    unk3300GMMECMPDJMI: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_PBELMOJKKHP = 4 [json_name = "Unk3300PBELMOJKKHP"];
     */
    unk3300PBELMOJKKHP: number;
    /**
     * @generated from protobuf field: uint32 cur_level = 14;
     */
    curLevel: number;
    /**
     * @generated from protobuf field: bool Unk3300_AHIEENGKPFA = 10 [json_name = "Unk3300AHIEENGKPFA"];
     */
    unk3300AHIEENGKPFA: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_BPLKJMIOKHM = 15 [json_name = "Unk3300BPLKJMIOKHM"];
     */
    unk3300BPLKJMIOKHM: boolean;
    /**
     * @generated from protobuf field: map<uint32, RoguelikeSettleCoinInfo> finished_challenge_cell_num_map = 6;
     */
    finishedChallengeCellNumMap: {
        [key: number]: RoguelikeSettleCoinInfo;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class RoguelikeDungeonSettleInfo$Type extends MessageType<RoguelikeDungeonSettleInfo> {
    constructor() {
        super("RoguelikeDungeonSettleInfo", [
            { no: 9, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_GMMECMPDJMI", kind: "scalar", jsonName: "Unk3300GMMECMPDJMI", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_PBELMOJKKHP", kind: "scalar", jsonName: "Unk3300PBELMOJKKHP", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_AHIEENGKPFA", kind: "scalar", jsonName: "Unk3300AHIEENGKPFA", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "Unk3300_BPLKJMIOKHM", kind: "scalar", jsonName: "Unk3300BPLKJMIOKHM", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "finished_challenge_cell_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => RoguelikeSettleCoinInfo } }
        ]);
    }
    create(value?: PartialMessage<RoguelikeDungeonSettleInfo>): RoguelikeDungeonSettleInfo {
        const message = { stageId: 0, unk3300GMMECMPDJMI: 0, unk3300PBELMOJKKHP: 0, curLevel: 0, unk3300AHIEENGKPFA: false, unk3300BPLKJMIOKHM: false, finishedChallengeCellNumMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RoguelikeDungeonSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RoguelikeDungeonSettleInfo): RoguelikeDungeonSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 stage_id */ 9:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GMMECMPDJMI = 8 [json_name = "Unk3300GMMECMPDJMI"];*/ 8:
                    message.unk3300GMMECMPDJMI = reader.uint32();
                    break;
                case /* uint32 Unk3300_PBELMOJKKHP = 4 [json_name = "Unk3300PBELMOJKKHP"];*/ 4:
                    message.unk3300PBELMOJKKHP = reader.uint32();
                    break;
                case /* uint32 cur_level */ 14:
                    message.curLevel = reader.uint32();
                    break;
                case /* bool Unk3300_AHIEENGKPFA = 10 [json_name = "Unk3300AHIEENGKPFA"];*/ 10:
                    message.unk3300AHIEENGKPFA = reader.bool();
                    break;
                case /* bool Unk3300_BPLKJMIOKHM = 15 [json_name = "Unk3300BPLKJMIOKHM"];*/ 15:
                    message.unk3300BPLKJMIOKHM = reader.bool();
                    break;
                case /* map<uint32, RoguelikeSettleCoinInfo> finished_challenge_cell_num_map */ 6:
                    this.binaryReadMap6(message.finishedChallengeCellNumMap, reader, options);
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
    private binaryReadMap6(map: RoguelikeDungeonSettleInfo["finishedChallengeCellNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof RoguelikeDungeonSettleInfo["finishedChallengeCellNumMap"] | undefined, val: RoguelikeDungeonSettleInfo["finishedChallengeCellNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = RoguelikeSettleCoinInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field RoguelikeDungeonSettleInfo.finished_challenge_cell_num_map");
            }
        }
        map[key ?? 0] = val ?? RoguelikeSettleCoinInfo.create();
    }
    internalBinaryWrite(message: RoguelikeDungeonSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 stage_id = 9; */
        if (message.stageId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.stageId);
        /* uint32 Unk3300_GMMECMPDJMI = 8 [json_name = "Unk3300GMMECMPDJMI"]; */
        if (message.unk3300GMMECMPDJMI !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300GMMECMPDJMI);
        /* uint32 Unk3300_PBELMOJKKHP = 4 [json_name = "Unk3300PBELMOJKKHP"]; */
        if (message.unk3300PBELMOJKKHP !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300PBELMOJKKHP);
        /* uint32 cur_level = 14; */
        if (message.curLevel !== 0)
            writer.tag(14, WireType.Varint).uint32(message.curLevel);
        /* bool Unk3300_AHIEENGKPFA = 10 [json_name = "Unk3300AHIEENGKPFA"]; */
        if (message.unk3300AHIEENGKPFA !== false)
            writer.tag(10, WireType.Varint).bool(message.unk3300AHIEENGKPFA);
        /* bool Unk3300_BPLKJMIOKHM = 15 [json_name = "Unk3300BPLKJMIOKHM"]; */
        if (message.unk3300BPLKJMIOKHM !== false)
            writer.tag(15, WireType.Varint).bool(message.unk3300BPLKJMIOKHM);
        /* map<uint32, RoguelikeSettleCoinInfo> finished_challenge_cell_num_map = 6; */
        for (let k of Object.keys(message.finishedChallengeCellNumMap)) {
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            RoguelikeSettleCoinInfo.internalBinaryWrite(message.finishedChallengeCellNumMap[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoguelikeDungeonSettleInfo
 */
export const RoguelikeDungeonSettleInfo = new RoguelikeDungeonSettleInfo$Type();
