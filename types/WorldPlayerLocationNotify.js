"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPlayerLocationNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerLocationInfo_1 = require("./PlayerLocationInfo");
const PlayerWorldLocationInfo_1 = require("./PlayerWorldLocationInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WorldPlayerLocationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldPlayerLocationNotify", [
            { no: 5, name: "player_world_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerWorldLocationInfo_1.PlayerWorldLocationInfo },
            { no: 14, name: "player_loc_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerLocationInfo_1.PlayerLocationInfo }
        ]);
    }
    create(value) {
        const message = { playerWorldLocList: [], playerLocList: [] };
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
                case /* repeated PlayerWorldLocationInfo player_world_loc_list */ 5:
                    message.playerWorldLocList.push(PlayerWorldLocationInfo_1.PlayerWorldLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated PlayerLocationInfo player_loc_list */ 14:
                    message.playerLocList.push(PlayerLocationInfo_1.PlayerLocationInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated PlayerWorldLocationInfo player_world_loc_list = 5; */
        for (let i = 0; i < message.playerWorldLocList.length; i++)
            PlayerWorldLocationInfo_1.PlayerWorldLocationInfo.internalBinaryWrite(message.playerWorldLocList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated PlayerLocationInfo player_loc_list = 14; */
        for (let i = 0; i < message.playerLocList.length; i++)
            PlayerLocationInfo_1.PlayerLocationInfo.internalBinaryWrite(message.playerLocList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldPlayerLocationNotify
 */
exports.WorldPlayerLocationNotify = new WorldPlayerLocationNotify$Type();
