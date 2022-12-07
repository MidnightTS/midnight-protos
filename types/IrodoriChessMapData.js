"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessMapData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessEntranceDetailInfo_1 = require("./IrodoriChessEntranceDetailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessMapData$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessMapData", [
            { no: 7, name: "map_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "equiped_card_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "entrance_detail_info", kind: "message", T: () => IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo }
        ]);
    }
    create(value) {
        const message = { mapId: 0, bestScore: 0, equipedCardList: [] };
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
                case /* uint32 map_id */ 7:
                    message.mapId = reader.uint32();
                    break;
                case /* uint32 best_score */ 4:
                    message.bestScore = reader.uint32();
                    break;
                case /* repeated uint32 equiped_card_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equipedCardList.push(reader.uint32());
                    else
                        message.equipedCardList.push(reader.uint32());
                    break;
                case /* IrodoriChessEntranceDetailInfo entrance_detail_info */ 2:
                    message.entranceDetailInfo = IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.entranceDetailInfo);
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
        /* uint32 map_id = 7; */
        if (message.mapId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.mapId);
        /* uint32 best_score = 4; */
        if (message.bestScore !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.bestScore);
        /* repeated uint32 equiped_card_list = 15; */
        if (message.equipedCardList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.equipedCardList.length; i++)
                writer.uint32(message.equipedCardList[i]);
            writer.join();
        }
        /* IrodoriChessEntranceDetailInfo entrance_detail_info = 2; */
        if (message.entranceDetailInfo)
            IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo.internalBinaryWrite(message.entranceDetailInfo, writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessMapData
 */
exports.IrodoriChessMapData = new IrodoriChessMapData$Type();
