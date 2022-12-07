"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMessagePack = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGMessage_1 = require("./GCGMessage");
const GCGActionType_1 = require("./GCGActionType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessagePack$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMessagePack", [
            { no: 9, name: "action_type", kind: "enum", T: () => ["GCGActionType", GCGActionType_1.GCGActionType] },
            { no: 5, name: "msg_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGMessage_1.GCGMessage },
            { no: 7, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { actionType: 0, msgList: [], controllerId: 0 };
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
                case /* GCGActionType action_type */ 9:
                    message.actionType = reader.int32();
                    break;
                case /* repeated GCGMessage msg_list */ 5:
                    message.msgList.push(GCGMessage_1.GCGMessage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 controller_id */ 7:
                    message.controllerId = reader.uint32();
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
        /* GCGActionType action_type = 9; */
        if (message.actionType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.actionType);
        /* repeated GCGMessage msg_list = 5; */
        for (let i = 0; i < message.msgList.length; i++)
            GCGMessage_1.GCGMessage.internalBinaryWrite(message.msgList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 controller_id = 7; */
        if (message.controllerId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMessagePack
 */
exports.GCGMessagePack = new GCGMessagePack$Type();