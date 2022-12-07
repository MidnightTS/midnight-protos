"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMailResultNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MailData_1 = require("./MailData");
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GetAllMailResultNotify", [
            { no: 13, name: "Unk3300_LMCAADPAICM", kind: "scalar", jsonName: "Unk3300LMCAADPAICM", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "transaction", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "is_collected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MailData_1.MailData },
            { no: 6, name: "Unk3300_PGJIHELKCEA", kind: "scalar", jsonName: "Unk3300PGJIHELKCEA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LMCAADPAICM: 0, transaction: "", isCollected: false, retcode: 0, mailList: [], unk3300PGJIHELKCEA: 0 };
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
                case /* uint32 Unk3300_LMCAADPAICM = 13 [json_name = "Unk3300LMCAADPAICM"];*/ 13:
                    message.unk3300LMCAADPAICM = reader.uint32();
                    break;
                case /* string transaction */ 14:
                    message.transaction = reader.string();
                    break;
                case /* bool is_collected */ 12:
                    message.isCollected = reader.bool();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated MailData mail_list */ 2:
                    message.mailList.push(MailData_1.MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_PGJIHELKCEA = 6 [json_name = "Unk3300PGJIHELKCEA"];*/ 6:
                    message.unk3300PGJIHELKCEA = reader.uint32();
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
        /* uint32 Unk3300_LMCAADPAICM = 13 [json_name = "Unk3300LMCAADPAICM"]; */
        if (message.unk3300LMCAADPAICM !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300LMCAADPAICM);
        /* string transaction = 14; */
        if (message.transaction !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.transaction);
        /* bool is_collected = 12; */
        if (message.isCollected !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isCollected);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated MailData mail_list = 2; */
        for (let i = 0; i < message.mailList.length; i++)
            MailData_1.MailData.internalBinaryWrite(message.mailList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_PGJIHELKCEA = 6 [json_name = "Unk3300PGJIHELKCEA"]; */
        if (message.unk3300PGJIHELKCEA !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300PGJIHELKCEA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllMailResultNotify
 */
exports.GetAllMailResultNotify = new GetAllMailResultNotify$Type();
