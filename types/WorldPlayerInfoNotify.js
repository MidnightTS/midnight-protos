"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPlayerInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
const PlayerWidgetInfo_1 = require("./PlayerWidgetInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldPlayerInfoNotify", [
            { no: 7, name: "player_widget_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerWidgetInfo_1.PlayerWidgetInfo },
            { no: 12, name: "player_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "player_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OnlinePlayerInfo_1.OnlinePlayerInfo }
        ]);
    }
    create(value) {
        const message = { playerWidgetInfoList: [], playerUidList: [], playerInfoList: [] };
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
                case /* repeated PlayerWidgetInfo player_widget_info_list */ 7:
                    message.playerWidgetInfoList.push(PlayerWidgetInfo_1.PlayerWidgetInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 player_uid_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.playerUidList.push(reader.uint32());
                    else
                        message.playerUidList.push(reader.uint32());
                    break;
                case /* repeated OnlinePlayerInfo player_info_list */ 15:
                    message.playerInfoList.push(OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated PlayerWidgetInfo player_widget_info_list = 7; */
        for (let i = 0; i < message.playerWidgetInfoList.length; i++)
            PlayerWidgetInfo_1.PlayerWidgetInfo.internalBinaryWrite(message.playerWidgetInfoList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 player_uid_list = 12; */
        if (message.playerUidList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.playerUidList.length; i++)
                writer.uint32(message.playerUidList[i]);
            writer.join();
        }
        /* repeated OnlinePlayerInfo player_info_list = 15; */
        for (let i = 0; i < message.playerInfoList.length; i++)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfoList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldPlayerInfoNotify
 */
exports.WorldPlayerInfoNotify = new WorldPlayerInfoNotify$Type();
