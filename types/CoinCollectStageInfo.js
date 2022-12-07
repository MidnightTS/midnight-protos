"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinCollectStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CoinCollectPlayerInfo_1 = require("./CoinCollectPlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CoinCollectStageInfo", [
            { no: 9, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CoinCollectPlayerInfo_1.CoinCollectPlayerInfo },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playIndex: 0, playerInfoList: [], levelId: 0 };
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
                case /* uint32 play_index */ 9:
                    message.playIndex = reader.uint32();
                    break;
                case /* repeated CoinCollectPlayerInfo player_info_list */ 11:
                    message.playerInfoList.push(CoinCollectPlayerInfo_1.CoinCollectPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 play_index = 9; */
        if (message.playIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* repeated CoinCollectPlayerInfo player_info_list = 11; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            CoinCollectPlayerInfo_1.CoinCollectPlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectStageInfo
 */
exports.CoinCollectStageInfo = new CoinCollectStageInfo$Type();
