// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "InBattleChessInfo.proto" (syntax proto3)
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
import { ChessCardInfo } from "./ChessCardInfo";
import { ChessPlayerInfo } from "./ChessPlayerInfo";
import { ChessMysteryInfo } from "./ChessMysteryInfo";
/**
 * @generated from protobuf message InBattleChessInfo
 */
export interface InBattleChessInfo {
    /**
     * @generated from protobuf field: uint32 round = 2;
     */
    round: number;
    /**
     * @generated from protobuf field: ChessMysteryInfo mystery_info = 6;
     */
    mysteryInfo?: ChessMysteryInfo;
    /**
     * @generated from protobuf field: map<uint32, ChessPlayerInfo> player_info_map = 15;
     */
    playerInfoMap: {
        [key: number]: ChessPlayerInfo;
    };
    /**
     * @generated from protobuf field: uint32 max_escapable_monsters = 7;
     */
    maxEscapableMonsters: number;
    /**
     * @generated from protobuf field: uint32 escaped_monsters = 11;
     */
    escapedMonsters: number;
    /**
     * @generated from protobuf field: repeated ChessCardInfo selected_card_info_list = 4;
     */
    selectedCardInfoList: ChessCardInfo[];
    /**
     * @generated from protobuf field: uint32 total_round = 13;
     */
    totalRound: number;
    /**
     * @generated from protobuf field: uint32 left_monsters = 5;
     */
    leftMonsters: number;
    /**
     * @generated from protobuf field: repeated uint32 ban_card_tag_list = 1;
     */
    banCardTagList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessInfo$Type extends MessageType<InBattleChessInfo> {
    constructor() {
        super("InBattleChessInfo", [
            { no: 2, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "mystery_info", kind: "message", T: () => ChessMysteryInfo },
            { no: 15, name: "player_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ChessPlayerInfo } },
            { no: 7, name: "max_escapable_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "escaped_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "selected_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChessCardInfo },
            { no: 13, name: "total_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "left_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "ban_card_tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InBattleChessInfo>): InBattleChessInfo {
        const message = { round: 0, playerInfoMap: {}, maxEscapableMonsters: 0, escapedMonsters: 0, selectedCardInfoList: [], totalRound: 0, leftMonsters: 0, banCardTagList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleChessInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleChessInfo): InBattleChessInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 round */ 2:
                    message.round = reader.uint32();
                    break;
                case /* ChessMysteryInfo mystery_info */ 6:
                    message.mysteryInfo = ChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
                    break;
                case /* map<uint32, ChessPlayerInfo> player_info_map */ 15:
                    this.binaryReadMap15(message.playerInfoMap, reader, options);
                    break;
                case /* uint32 max_escapable_monsters */ 7:
                    message.maxEscapableMonsters = reader.uint32();
                    break;
                case /* uint32 escaped_monsters */ 11:
                    message.escapedMonsters = reader.uint32();
                    break;
                case /* repeated ChessCardInfo selected_card_info_list */ 4:
                    message.selectedCardInfoList.push(ChessCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 total_round */ 13:
                    message.totalRound = reader.uint32();
                    break;
                case /* uint32 left_monsters */ 5:
                    message.leftMonsters = reader.uint32();
                    break;
                case /* repeated uint32 ban_card_tag_list */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.banCardTagList.push(reader.uint32());
                    else
                        message.banCardTagList.push(reader.uint32());
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
    private binaryReadMap15(map: InBattleChessInfo["playerInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof InBattleChessInfo["playerInfoMap"] | undefined, val: InBattleChessInfo["playerInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field InBattleChessInfo.player_info_map");
            }
        }
        map[key ?? 0] = val ?? ChessPlayerInfo.create();
    }
    internalBinaryWrite(message: InBattleChessInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 round = 2; */
        if (message.round !== 0)
            writer.tag(2, WireType.Varint).uint32(message.round);
        /* ChessMysteryInfo mystery_info = 6; */
        if (message.mysteryInfo)
            ChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, ChessPlayerInfo> player_info_map = 15; */
        for (let k of Object.keys(message.playerInfoMap)) {
            writer.tag(15, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            ChessPlayerInfo.internalBinaryWrite(message.playerInfoMap[k as any], writer, options);
            writer.join().join();
        }
        /* uint32 max_escapable_monsters = 7; */
        if (message.maxEscapableMonsters !== 0)
            writer.tag(7, WireType.Varint).uint32(message.maxEscapableMonsters);
        /* uint32 escaped_monsters = 11; */
        if (message.escapedMonsters !== 0)
            writer.tag(11, WireType.Varint).uint32(message.escapedMonsters);
        /* repeated ChessCardInfo selected_card_info_list = 4; */
        for (let i = 0; i < message.selectedCardInfoList.length; i++)
            ChessCardInfo.internalBinaryWrite(message.selectedCardInfoList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 total_round = 13; */
        if (message.totalRound !== 0)
            writer.tag(13, WireType.Varint).uint32(message.totalRound);
        /* uint32 left_monsters = 5; */
        if (message.leftMonsters !== 0)
            writer.tag(5, WireType.Varint).uint32(message.leftMonsters);
        /* repeated uint32 ban_card_tag_list = 1; */
        if (message.banCardTagList.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.banCardTagList.length; i++)
                writer.uint32(message.banCardTagList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleChessInfo
 */
export const InBattleChessInfo = new InBattleChessInfo$Type();
