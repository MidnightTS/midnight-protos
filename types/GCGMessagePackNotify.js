"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMessagePackNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGMessagePack_1 = require("./GCGMessagePack");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessagePackNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMessagePackNotify", [
            { no: 2, name: "server_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "msg_pack_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGMessagePack_1.GCGMessagePack }
        ]);
    }
    create(value) {
        const message = { serverSeq: 0, msgPackList: [] };
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
                case /* uint32 server_seq */ 2:
                    message.serverSeq = reader.uint32();
                    break;
                case /* repeated GCGMessagePack msg_pack_list */ 12:
                    message.msgPackList.push(GCGMessagePack_1.GCGMessagePack.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 server_seq = 2; */
        if (message.serverSeq !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.serverSeq);
        /* repeated GCGMessagePack msg_pack_list = 12; */
        for (let i = 0; i < message.msgPackList.length; i++)
            GCGMessagePack_1.GCGMessagePack.internalBinaryWrite(message.msgPackList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMessagePackNotify
 */
exports.GCGMessagePackNotify = new GCGMessagePackNotify$Type();
