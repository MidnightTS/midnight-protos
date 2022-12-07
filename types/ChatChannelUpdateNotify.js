"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatChannelUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatChannelInfo_1 = require("./ChatChannelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChatChannelUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChatChannelUpdateNotify", [
            { no: 2, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "channel_info", kind: "message", T: () => ChatChannelInfo_1.ChatChannelInfo },
            { no: 15, name: "is_create", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { channelId: 0, isCreate: false };
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
                case /* uint32 channel_id */ 2:
                    message.channelId = reader.uint32();
                    break;
                case /* ChatChannelInfo channel_info */ 5:
                    message.channelInfo = ChatChannelInfo_1.ChatChannelInfo.internalBinaryRead(reader, reader.uint32(), options, message.channelInfo);
                    break;
                case /* bool is_create */ 15:
                    message.isCreate = reader.bool();
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
        /* uint32 channel_id = 2; */
        if (message.channelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.channelId);
        /* ChatChannelInfo channel_info = 5; */
        if (message.channelInfo)
            ChatChannelInfo_1.ChatChannelInfo.internalBinaryWrite(message.channelInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_create = 15; */
        if (message.isCreate !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isCreate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChatChannelUpdateNotify
 */
exports.ChatChannelUpdateNotify = new ChatChannelUpdateNotify$Type();
