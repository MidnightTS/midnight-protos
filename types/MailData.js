"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MailCollectState_1 = require("./MailCollectState");
const MailItem_1 = require("./MailItem");
const MailTextContent_1 = require("./MailTextContent");
// @generated message type with reflection information, may provide speed optimized methods
class MailData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MailData", [
            { no: 1, name: "mail_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "mail_text_content", kind: "message", T: () => MailTextContent_1.MailTextContent },
            { no: 7, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MailItem_1.MailItem },
            { no: 8, name: "send_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "expire_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "importance", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_read", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "is_attachment_got", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "argument_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "collect_state", kind: "enum", opt: true, T: () => ["com.midnights.game.MailCollectState", MailCollectState_1.MailCollectState] }
        ]);
    }
    create(value) {
        const message = { itemList: [], argumentList: [] };
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
                case /* optional uint32 mail_id */ 1:
                    message.mailId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MailTextContent mail_text_content */ 4:
                    message.mailTextContent = MailTextContent_1.MailTextContent.internalBinaryRead(reader, reader.uint32(), options, message.mailTextContent);
                    break;
                case /* repeated com.midnights.game.MailItem item_list */ 7:
                    message.itemList.push(MailItem_1.MailItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 send_time */ 8:
                    message.sendTime = reader.uint32();
                    break;
                case /* optional uint32 expire_time */ 9:
                    message.expireTime = reader.uint32();
                    break;
                case /* optional uint32 importance */ 10:
                    message.importance = reader.uint32();
                    break;
                case /* optional bool is_read */ 11:
                    message.isRead = reader.bool();
                    break;
                case /* optional bool is_attachment_got */ 12:
                    message.isAttachmentGot = reader.bool();
                    break;
                case /* optional uint32 config_id */ 13:
                    message.configId = reader.uint32();
                    break;
                case /* repeated string argument_list */ 14:
                    message.argumentList.push(reader.string());
                    break;
                case /* optional com.midnights.game.MailCollectState collect_state */ 15:
                    message.collectState = reader.int32();
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
        /* optional uint32 mail_id = 1; */
        if (message.mailId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.mailId);
        /* optional com.midnights.game.MailTextContent mail_text_content = 4; */
        if (message.mailTextContent)
            MailTextContent_1.MailTextContent.internalBinaryWrite(message.mailTextContent, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.MailItem item_list = 7; */
        for (let i = 0; i < message.itemList.length; i++)
            MailItem_1.MailItem.internalBinaryWrite(message.itemList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 send_time = 8; */
        if (message.sendTime !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.sendTime);
        /* optional uint32 expire_time = 9; */
        if (message.expireTime !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.expireTime);
        /* optional uint32 importance = 10; */
        if (message.importance !== undefined)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.importance);
        /* optional bool is_read = 11; */
        if (message.isRead !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isRead);
        /* optional bool is_attachment_got = 12; */
        if (message.isAttachmentGot !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isAttachmentGot);
        /* optional uint32 config_id = 13; */
        if (message.configId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.configId);
        /* repeated string argument_list = 14; */
        for (let i = 0; i < message.argumentList.length; i++)
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.argumentList[i]);
        /* optional com.midnights.game.MailCollectState collect_state = 15; */
        if (message.collectState !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.collectState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MailData
 */
exports.MailData = new MailData$Type();
