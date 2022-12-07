"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientLogBodyPing = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientLogBodyPing$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientLogBodyPing", [
            { no: 1, name: "xg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "signal_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "ping", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "servertype", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "serverip", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "serverport", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "pcount", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "plost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "dns", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { xg: "", signalLevel: 0, ping: 0, servertype: "", serverip: "", serverport: "", pcount: 0, plost: 0, dns: "" };
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
                case /* string xg */ 1:
                    message.xg = reader.string();
                    break;
                case /* uint32 signal_level */ 2:
                    message.signalLevel = reader.uint32();
                    break;
                case /* uint32 ping */ 3:
                    message.ping = reader.uint32();
                    break;
                case /* string servertype */ 4:
                    message.servertype = reader.string();
                    break;
                case /* string serverip */ 5:
                    message.serverip = reader.string();
                    break;
                case /* string serverport */ 6:
                    message.serverport = reader.string();
                    break;
                case /* uint32 pcount */ 7:
                    message.pcount = reader.uint32();
                    break;
                case /* uint32 plost */ 8:
                    message.plost = reader.uint32();
                    break;
                case /* string dns */ 9:
                    message.dns = reader.string();
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
        /* string xg = 1; */
        if (message.xg !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.xg);
        /* uint32 signal_level = 2; */
        if (message.signalLevel !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.signalLevel);
        /* uint32 ping = 3; */
        if (message.ping !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.ping);
        /* string servertype = 4; */
        if (message.servertype !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.servertype);
        /* string serverip = 5; */
        if (message.serverip !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.serverip);
        /* string serverport = 6; */
        if (message.serverport !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.serverport);
        /* uint32 pcount = 7; */
        if (message.pcount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.pcount);
        /* uint32 plost = 8; */
        if (message.plost !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.plost);
        /* string dns = 9; */
        if (message.dns !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.dns);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientLogBodyPing
 */
exports.ClientLogBodyPing = new ClientLogBodyPing$Type();
