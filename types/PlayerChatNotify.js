"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerChatNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatInfo_1 = require("./ChatInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerChatNotify", [
            { no: 11, name: "chat_info", kind: "message", T: () => ChatInfo_1.ChatInfo },
            { no: 13, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { channelId: 0 };
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
                case /* ChatInfo chat_info */ 11:
                    message.chatInfo = ChatInfo_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options, message.chatInfo);
                    break;
                case /* uint32 channel_id */ 13:
                    message.channelId = reader.uint32();
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
        /* ChatInfo chat_info = 11; */
        if (message.chatInfo)
            ChatInfo_1.ChatInfo.internalBinaryWrite(message.chatInfo, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 channel_id = 13; */
        if (message.channelId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.channelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerChatNotify
 */
exports.PlayerChatNotify = new PlayerChatNotify$Type();
