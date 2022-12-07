"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMailRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MailData_1 = require("./MailData");
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetAllMailRsp", [
            { no: 15, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MailData_1.MailData },
            { no: 12, name: "is_collected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_truncated", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { mailList: [], isCollected: false, retcode: 0, isTruncated: false };
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
                case /* repeated MailData mail_list */ 15:
                    message.mailList.push(MailData_1.MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_collected */ 12:
                    message.isCollected = reader.bool();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_truncated */ 8:
                    message.isTruncated = reader.bool();
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
        /* repeated MailData mail_list = 15; */
        for (let i = 0; i < message.mailList.length; i++)
            MailData_1.MailData.internalBinaryWrite(message.mailList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_collected = 12; */
        if (message.isCollected !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isCollected);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_truncated = 8; */
        if (message.isTruncated !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isTruncated);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllMailRsp
 */
exports.GetAllMailRsp = new GetAllMailRsp$Type();
