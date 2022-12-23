"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleIrodoriChessInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessMysteryInfo_1 = require("./IrodoriChessMysteryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleIrodoriChessInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleIrodoriChessInfo", [
            { no: 1, name: "settle_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "mystery_info", kind: "message", T: () => IrodoriChessMysteryInfo_1.IrodoriChessMysteryInfo },
            { no: 15, name: "left_monsters", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "selected_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "building_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { settleScore: 0, leftMonsters: 0, selectedCardIdList: [], buildingPoints: 0 };
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
                case /* uint32 settle_score */ 1:
                    message.settleScore = reader.uint32();
                    break;
                case /* IrodoriChessMysteryInfo mystery_info */ 2:
                    message.mysteryInfo = IrodoriChessMysteryInfo_1.IrodoriChessMysteryInfo.internalBinaryRead(reader, reader.uint32(), options, message.mysteryInfo);
                    break;
                case /* uint32 left_monsters */ 15:
                    message.leftMonsters = reader.uint32();
                    break;
                case /* repeated uint32 selected_card_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectedCardIdList.push(reader.uint32());
                    else
                        message.selectedCardIdList.push(reader.uint32());
                    break;
                case /* uint32 building_points */ 8:
                    message.buildingPoints = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* uint32 settle_score = 1; */
        if (message.settleScore !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.settleScore);
        /* IrodoriChessMysteryInfo mystery_info = 2; */
        if (message.mysteryInfo)
            IrodoriChessMysteryInfo_1.IrodoriChessMysteryInfo.internalBinaryWrite(message.mysteryInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 left_monsters = 15; */
        if (message.leftMonsters !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.leftMonsters);
        /* repeated uint32 selected_card_id_list = 10; */
        if (message.selectedCardIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectedCardIdList.length; i++)
                writer.uint32(message.selectedCardIdList[i]);
            writer.join();
        }
        /* uint32 building_points = 8; */
        if (message.buildingPoints !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.buildingPoints);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleIrodoriChessInfo
 */
exports.InBattleIrodoriChessInfo = new InBattleIrodoriChessInfo$Type();
