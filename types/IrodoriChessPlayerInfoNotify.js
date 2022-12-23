"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessPlayerInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessPlayerInfo_1 = require("./IrodoriChessPlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessPlayerInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessPlayerInfoNotify", [
            { no: 10, name: "player_info", kind: "message", T: () => IrodoriChessPlayerInfo_1.IrodoriChessPlayerInfo }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* IrodoriChessPlayerInfo player_info */ 10:
                    message.playerInfo = IrodoriChessPlayerInfo_1.IrodoriChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
        /* IrodoriChessPlayerInfo player_info = 10; */
        if (message.playerInfo)
            IrodoriChessPlayerInfo_1.IrodoriChessPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessPlayerInfoNotify
 */
exports.IrodoriChessPlayerInfoNotify = new IrodoriChessPlayerInfoNotify$Type();
