"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullPrivateChatRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChatInfo_1 = require("./ChatInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PullPrivateChatRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PullPrivateChatRsp", [
            { no: 6, name: "chat_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChatInfo_1.ChatInfo },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { chatInfo: [], retcode: 0 };
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
                case /* repeated ChatInfo chat_info */ 6:
                    message.chatInfo.push(ChatInfo_1.ChatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
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
        /* repeated ChatInfo chat_info = 6; */
        for (let i = 0; i < message.chatInfo.length; i++)
            ChatInfo_1.ChatInfo.internalBinaryWrite(message.chatInfo[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PullPrivateChatRsp
 */
exports.PullPrivateChatRsp = new PullPrivateChatRsp$Type();
