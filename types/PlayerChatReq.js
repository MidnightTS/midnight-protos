"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerChatReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatInfo_1 = require("./ChatInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerChatReq", [
            { no: 3, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "chat_info", kind: "message", T: () => ChatInfo_1.ChatInfo }
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
                case /* uint32 channel_id */ 3:
                    message.channelId = reader.uint32();
                    break;
                case /* ChatInfo chat_info */ 9:
                    message.chatInfo = ChatInfo_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options, message.chatInfo);
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
        /* uint32 channel_id = 3; */
        if (message.channelId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.channelId);
        /* ChatInfo chat_info = 9; */
        if (message.chatInfo)
            ChatInfo_1.ChatInfo.internalBinaryWrite(message.chatInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerChatReq
 */
exports.PlayerChatReq = new PlayerChatReq$Type();
