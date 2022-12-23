"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportTrackingIOInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReportTrackingIOInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ReportTrackingIOInfoNotify", [
            { no: 13, name: "client_tz", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "Unk3300_DJHKHEFPCDK", kind: "scalar", jsonName: "Unk3300DJHKHEFPCDK", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Unk3300_PIBFPDAMJLE", kind: "scalar", jsonName: "Unk3300PIBFPDAMJLE", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "Unk3300_CNPIGDOEJPB", kind: "scalar", jsonName: "Unk3300CNPIGDOEJPB", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "rydevicetype", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { clientTz: "", unk3300DJHKHEFPCDK: "", unk3300PIBFPDAMJLE: "", unk3300CNPIGDOEJPB: "", rydevicetype: "" };
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
                case /* string client_tz */ 13:
                    message.clientTz = reader.string();
                    break;
                case /* string Unk3300_DJHKHEFPCDK = 10 [json_name = "Unk3300DJHKHEFPCDK"];*/ 10:
                    message.unk3300DJHKHEFPCDK = reader.string();
                    break;
                case /* string Unk3300_PIBFPDAMJLE = 6 [json_name = "Unk3300PIBFPDAMJLE"];*/ 6:
                    message.unk3300PIBFPDAMJLE = reader.string();
                    break;
                case /* string Unk3300_CNPIGDOEJPB = 8 [json_name = "Unk3300CNPIGDOEJPB"];*/ 8:
                    message.unk3300CNPIGDOEJPB = reader.string();
                    break;
                case /* string rydevicetype */ 3:
                    message.rydevicetype = reader.string();
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
        /* string client_tz = 13; */
        if (message.clientTz !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.clientTz);
        /* string Unk3300_DJHKHEFPCDK = 10 [json_name = "Unk3300DJHKHEFPCDK"]; */
        if (message.unk3300DJHKHEFPCDK !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.unk3300DJHKHEFPCDK);
        /* string Unk3300_PIBFPDAMJLE = 6 [json_name = "Unk3300PIBFPDAMJLE"]; */
        if (message.unk3300PIBFPDAMJLE !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.unk3300PIBFPDAMJLE);
        /* string Unk3300_CNPIGDOEJPB = 8 [json_name = "Unk3300CNPIGDOEJPB"]; */
        if (message.unk3300CNPIGDOEJPB !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.unk3300CNPIGDOEJPB);
        /* string rydevicetype = 3; */
        if (message.rydevicetype !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.rydevicetype);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReportTrackingIOInfoNotify
 */
exports.ReportTrackingIOInfoNotify = new ReportTrackingIOInfoNotify$Type();
