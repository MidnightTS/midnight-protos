"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityInvocationFixedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityInvokeEntry_1 = require("./AbilityInvokeEntry");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFixedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityInvocationFixedNotify", [
            { no: 7, name: "Unk3300_LDIAOMFIBPL", kind: "message", jsonName: "Unk3300LDIAOMFIBPL", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 3, name: "Unk3300_ONGNOHLIIBO", kind: "message", jsonName: "Unk3300ONGNOHLIIBO", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 10, name: "Unk3300_AHDFHHFHEFM", kind: "message", jsonName: "Unk3300AHDFHHFHEFM", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 1, name: "Unk3300_GAFFBFFKDIC", kind: "message", jsonName: "Unk3300GAFFBFFKDIC", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 4, name: "Unk3300_EMGKKHKLIEG", kind: "message", jsonName: "Unk3300EMGKKHKLIEG", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 9, name: "Unk3300_KFMHLLHECCJ", kind: "message", jsonName: "Unk3300KFMHLLHECCJ", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry }
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
                case /* AbilityInvokeEntry Unk3300_LDIAOMFIBPL = 7 [json_name = "Unk3300LDIAOMFIBPL"];*/ 7:
                    message.unk3300LDIAOMFIBPL = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300LDIAOMFIBPL);
                    break;
                case /* AbilityInvokeEntry Unk3300_ONGNOHLIIBO = 3 [json_name = "Unk3300ONGNOHLIIBO"];*/ 3:
                    message.unk3300ONGNOHLIIBO = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300ONGNOHLIIBO);
                    break;
                case /* AbilityInvokeEntry Unk3300_AHDFHHFHEFM = 10 [json_name = "Unk3300AHDFHHFHEFM"];*/ 10:
                    message.unk3300AHDFHHFHEFM = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300AHDFHHFHEFM);
                    break;
                case /* AbilityInvokeEntry Unk3300_GAFFBFFKDIC = 1 [json_name = "Unk3300GAFFBFFKDIC"];*/ 1:
                    message.unk3300GAFFBFFKDIC = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300GAFFBFFKDIC);
                    break;
                case /* AbilityInvokeEntry Unk3300_EMGKKHKLIEG = 4 [json_name = "Unk3300EMGKKHKLIEG"];*/ 4:
                    message.unk3300EMGKKHKLIEG = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EMGKKHKLIEG);
                    break;
                case /* AbilityInvokeEntry Unk3300_KFMHLLHECCJ = 9 [json_name = "Unk3300KFMHLLHECCJ"];*/ 9:
                    message.unk3300KFMHLLHECCJ = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.unk3300KFMHLLHECCJ);
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
        /* AbilityInvokeEntry Unk3300_LDIAOMFIBPL = 7 [json_name = "Unk3300LDIAOMFIBPL"]; */
        if (message.unk3300LDIAOMFIBPL)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300LDIAOMFIBPL, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_ONGNOHLIIBO = 3 [json_name = "Unk3300ONGNOHLIIBO"]; */
        if (message.unk3300ONGNOHLIIBO)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300ONGNOHLIIBO, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_AHDFHHFHEFM = 10 [json_name = "Unk3300AHDFHHFHEFM"]; */
        if (message.unk3300AHDFHHFHEFM)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300AHDFHHFHEFM, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_GAFFBFFKDIC = 1 [json_name = "Unk3300GAFFBFFKDIC"]; */
        if (message.unk3300GAFFBFFKDIC)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300GAFFBFFKDIC, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_EMGKKHKLIEG = 4 [json_name = "Unk3300EMGKKHKLIEG"]; */
        if (message.unk3300EMGKKHKLIEG)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300EMGKKHKLIEG, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityInvokeEntry Unk3300_KFMHLLHECCJ = 9 [json_name = "Unk3300KFMHLLHECCJ"]; */
        if (message.unk3300KFMHLLHECCJ)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.unk3300KFMHLLHECCJ, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvocationFixedNotify
 */
exports.AbilityInvocationFixedNotify = new AbilityInvocationFixedNotify$Type();
