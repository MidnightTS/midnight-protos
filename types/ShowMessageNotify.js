"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowMessageNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MsgParam_1 = require("./MsgParam");
const SvrMsgId_1 = require("./SvrMsgId");
// @generated message type with reflection information, may provide speed optimized methods
class ShowMessageNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ShowMessageNotify", [
            { no: 9, name: "msg_id", kind: "enum", T: () => ["SvrMsgId", SvrMsgId_1.SvrMsgId, "SVR_MSG_ID_"] },
            { no: 10, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MsgParam_1.MsgParam }
        ]);
    }
    create(value) {
        const message = { msgId: 0, params: [] };
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
                case /* SvrMsgId msg_id */ 9:
                    message.msgId = reader.int32();
                    break;
                case /* repeated MsgParam params */ 10:
                    message.params.push(MsgParam_1.MsgParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* SvrMsgId msg_id = 9; */
        if (message.msgId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.msgId);
        /* repeated MsgParam params = 10; */
        for (let i = 0; i < message.params.length; i++)
            MsgParam_1.MsgParam.internalBinaryWrite(message.params[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShowMessageNotify
 */
exports.ShowMessageNotify = new ShowMessageNotify$Type();
