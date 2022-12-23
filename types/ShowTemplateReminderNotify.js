"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowTemplateReminderNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShowTemplateReminderNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ShowTemplateReminderNotify", [
            { no: 6, name: "Unk3300_LABCNBEGCED", kind: "scalar", jsonName: "Unk3300LABCNBEGCED", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "template_reminder_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_AENIIBBBPJC", kind: "scalar", jsonName: "Unk3300AENIIBBBPJC", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "param_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300LABCNBEGCED: false, paramList: [], templateReminderId: 0, unk3300AENIIBBBPJC: false, paramUidList: [] };
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
                case /* bool Unk3300_LABCNBEGCED = 6 [json_name = "Unk3300LABCNBEGCED"];*/ 6:
                    message.unk3300LABCNBEGCED = reader.bool();
                    break;
                case /* repeated int32 param_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.int32());
                    else
                        message.paramList.push(reader.int32());
                    break;
                case /* uint32 template_reminder_id */ 2:
                    message.templateReminderId = reader.uint32();
                    break;
                case /* bool Unk3300_AENIIBBBPJC = 12 [json_name = "Unk3300AENIIBBBPJC"];*/ 12:
                    message.unk3300AENIIBBBPJC = reader.bool();
                    break;
                case /* repeated uint32 param_uid_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramUidList.push(reader.uint32());
                    else
                        message.paramUidList.push(reader.uint32());
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
        /* bool Unk3300_LABCNBEGCED = 6 [json_name = "Unk3300LABCNBEGCED"]; */
        if (message.unk3300LABCNBEGCED !== false)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.unk3300LABCNBEGCED);
        /* repeated int32 param_list = 4; */
        if (message.paramList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.int32(message.paramList[i]);
            writer.join();
        }
        /* uint32 template_reminder_id = 2; */
        if (message.templateReminderId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.templateReminderId);
        /* bool Unk3300_AENIIBBBPJC = 12 [json_name = "Unk3300AENIIBBBPJC"]; */
        if (message.unk3300AENIIBBBPJC !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.unk3300AENIIBBBPJC);
        /* repeated uint32 param_uid_list = 7; */
        if (message.paramUidList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramUidList.length; i++)
                writer.uint32(message.paramUidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowTemplateReminderNotify
 */
exports.ShowTemplateReminderNotify = new ShowTemplateReminderNotify$Type();
