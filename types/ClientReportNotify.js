"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientReportNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientReportNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientReportNotify", [
            { no: 15, name: "Unk3300_JHJDJEBAFCM", kind: "scalar", jsonName: "Unk3300JHJDJEBAFCM", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "Unk3300_AMLEAJLJDFO", kind: "scalar", jsonName: "Unk3300AMLEAJLJDFO", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300JHJDJEBAFCM: "", unk3300AMLEAJLJDFO: "" };
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
                case /* string Unk3300_JHJDJEBAFCM = 15 [json_name = "Unk3300JHJDJEBAFCM"];*/ 15:
                    message.unk3300JHJDJEBAFCM = reader.string();
                    break;
                case /* string Unk3300_AMLEAJLJDFO = 10 [json_name = "Unk3300AMLEAJLJDFO"];*/ 10:
                    message.unk3300AMLEAJLJDFO = reader.string();
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
        /* string Unk3300_JHJDJEBAFCM = 15 [json_name = "Unk3300JHJDJEBAFCM"]; */
        if (message.unk3300JHJDJEBAFCM !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.unk3300JHJDJEBAFCM);
        /* string Unk3300_AMLEAJLJDFO = 10 [json_name = "Unk3300AMLEAJLJDFO"]; */
        if (message.unk3300AMLEAJLJDFO !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.unk3300AMLEAJLJDFO);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientReportNotify
 */
exports.ClientReportNotify = new ClientReportNotify$Type();
