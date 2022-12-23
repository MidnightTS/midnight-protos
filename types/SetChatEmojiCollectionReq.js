"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetChatEmojiCollectionReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatEmojiCollectionData_1 = require("./ChatEmojiCollectionData");
// @generated message type with reflection information, may provide speed optimized methods
class SetChatEmojiCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SetChatEmojiCollectionReq", [
            { no: 13, name: "chat_emoji_collection_data", kind: "message", T: () => ChatEmojiCollectionData_1.ChatEmojiCollectionData }
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
                case /* ChatEmojiCollectionData chat_emoji_collection_data */ 13:
                    message.chatEmojiCollectionData = ChatEmojiCollectionData_1.ChatEmojiCollectionData.internalBinaryRead(reader, reader.uint32(), options, message.chatEmojiCollectionData);
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
        /* ChatEmojiCollectionData chat_emoji_collection_data = 13; */
        if (message.chatEmojiCollectionData)
            ChatEmojiCollectionData_1.ChatEmojiCollectionData.internalBinaryWrite(message.chatEmojiCollectionData, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetChatEmojiCollectionReq
 */
exports.SetChatEmojiCollectionReq = new SetChatEmojiCollectionReq$Type();
