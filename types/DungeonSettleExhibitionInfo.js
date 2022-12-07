"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonSettleExhibitionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonSettleExhibitionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonSettleExhibitionInfo", [
            { no: 14, name: "player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 13, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo }
        ]);
    }
    create(value) {
        const message = { cardList: [] };
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
                case /* OnlinePlayerInfo player_info */ 14:
                    message.playerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* repeated ExhibitionDisplayInfo card_list */ 13:
                    message.cardList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* OnlinePlayerInfo player_info = 14; */
        if (message.playerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ExhibitionDisplayInfo card_list = 13; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonSettleExhibitionInfo
 */
exports.DungeonSettleExhibitionInfo = new DungeonSettleExhibitionInfo$Type();
