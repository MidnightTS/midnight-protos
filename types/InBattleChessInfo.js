"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleChessInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChessCardInfo_1 = require("./ChessCardInfo");
const ChessPlayerInfo_1 = require("./ChessPlayerInfo");
const ChessMysteryInfo_1 = require("./ChessMysteryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleChessInfo", [
            { no: 2, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "mystery_info", kind: "message", T: () => ChessMysteryInfo_1.ChessMysteryInfo },
            { no: 15, name: "player_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ChessPlayerInfo_1.ChessPlayerInfo } },
            { no: 7, name: "max_escapable_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "escaped_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "selected_card_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChessCardInfo_1.ChessCardInfo },
            { no: 13, name: "total_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "left_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "ban_card_tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { round: 0, playerInfoMap: {}, maxEscapableMonsters: 0, escapedMonsters: 0, selectedCardInfoList: [], totalRound: 0, leftMonsters: 0, banCardTagList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 round */ 2:
                    message.round = reader.uint32();
                    break;
                case /* ChessMysteryInfo mystery_info */ 6:
                    message.mysteryInfo = ChessMysteryInfo_1.ChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
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
                    message.selectedCardInfoList.push(ChessCardInfo_1.ChessCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 total_round */ 13:
                    message.totalRound = reader.uint32();
                    break;
                case /* uint32 left_monsters */ 5:
                    message.leftMonsters = reader.uint32();
                    break;
                case /* repeated uint32 ban_card_tag_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
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
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ChessPlayerInfo_1.ChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field InBattleChessInfo.player_info_map");
            }
        }
        map[key ?? 0] = val ?? ChessPlayerInfo_1.ChessPlayerInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 round = 2; */
        if (message.round !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.round);
        /* ChessMysteryInfo mystery_info = 6; */
        if (message.mysteryInfo)
            ChessMysteryInfo_1.ChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, ChessPlayerInfo> player_info_map = 15; */
        for (let k of Object.keys(message.playerInfoMap)) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            ChessPlayerInfo_1.ChessPlayerInfo.internalBinaryWrite(message.playerInfoMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 max_escapable_monsters = 7; */
        if (message.maxEscapableMonsters !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.maxEscapableMonsters);
        /* uint32 escaped_monsters = 11; */
        if (message.escapedMonsters !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.escapedMonsters);
        /* repeated ChessCardInfo selected_card_info_list = 4; */
        for (let i = 0; i < message.selectedCardInfoList.length; i++)
            ChessCardInfo_1.ChessCardInfo.internalBinaryWrite(message.selectedCardInfoList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 total_round = 13; */
        if (message.totalRound !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.totalRound);
        /* uint32 left_monsters = 5; */
        if (message.leftMonsters !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.leftMonsters);
        /* repeated uint32 ban_card_tag_list = 1; */
        if (message.banCardTagList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.banCardTagList.length; i++)
                writer.uint32(message.banCardTagList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleChessInfo
 */
exports.InBattleChessInfo = new InBattleChessInfo$Type();
