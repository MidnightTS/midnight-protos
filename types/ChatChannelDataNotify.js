"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatChannelDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatChannelInfo_1 = require("./ChatChannelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChatChannelDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ChatChannelDataNotify", [
            { no: 5, name: "channel_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChatChannelInfo_1.ChatChannelInfo },
            { no: 3, name: "channel_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { channelInfoList: [], channelList: [] };
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
                case /* repeated ChatChannelInfo channel_info_list */ 5:
                    message.channelInfoList.push(ChatChannelInfo_1.ChatChannelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 channel_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.channelList.push(reader.uint32());
                    else
                        message.channelList.push(reader.uint32());
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
        /* repeated ChatChannelInfo channel_info_list = 5; */
        for (let i = 0; i < message.channelInfoList.length; i++)
            ChatChannelInfo_1.ChatChannelInfo.internalBinaryWrite(message.channelInfoList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 channel_list = 3; */
        if (message.channelList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.channelList.length; i++)
                writer.uint32(message.channelList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChatChannelDataNotify
 */
exports.ChatChannelDataNotify = new ChatChannelDataNotify$Type();
