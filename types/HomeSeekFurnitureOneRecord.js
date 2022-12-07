"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSeekFurnitureOneRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeSeekFurniturePlayerScore_1 = require("./HomeSeekFurniturePlayerScore");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSeekFurnitureOneRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeSeekFurnitureOneRecord", [
            { no: 12, name: "timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "engaged_player_score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeSeekFurniturePlayerScore_1.HomeSeekFurniturePlayerScore }
        ]);
    }
    create(value) {
        const message = { timestamp: 0, engagedPlayerScoreList: [] };
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
                case /* uint32 timestamp */ 12:
                    message.timestamp = reader.uint32();
                    break;
                case /* repeated HomeSeekFurniturePlayerScore engaged_player_score_list */ 5:
                    message.engagedPlayerScoreList.push(HomeSeekFurniturePlayerScore_1.HomeSeekFurniturePlayerScore.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 timestamp = 12; */
        if (message.timestamp !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.timestamp);
        /* repeated HomeSeekFurniturePlayerScore engaged_player_score_list = 5; */
        for (let i = 0; i < message.engagedPlayerScoreList.length; i++)
            HomeSeekFurniturePlayerScore_1.HomeSeekFurniturePlayerScore.internalBinaryWrite(message.engagedPlayerScoreList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeSeekFurnitureOneRecord
 */
exports.HomeSeekFurnitureOneRecord = new HomeSeekFurnitureOneRecord$Type();
