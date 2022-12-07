"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingIOInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TrackingIOInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TrackingIOInfo", [
            { no: 10, name: "Unk3300_KGGPDKGDELG", kind: "scalar", jsonName: "Unk3300KGGPDKGDELG", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "Unk3300_PIBFPDAMJLE", kind: "scalar", jsonName: "Unk3300PIBFPDAMJLE", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Unk3300_NMDNLHLAKAM", kind: "scalar", jsonName: "Unk3300NMDNLHLAKAM", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "Unk3300_GEJJKDLGFPH", kind: "scalar", jsonName: "Unk3300GEJJKDLGFPH", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "Unk3300_CNPIGDOEJPB", kind: "scalar", jsonName: "Unk3300CNPIGDOEJPB", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Unk3300_CCOGBICMHKG", kind: "scalar", jsonName: "Unk3300CCOGBICMHKG", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "Unk3300_DJHKHEFPCDK", kind: "scalar", jsonName: "Unk3300DJHKHEFPCDK", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KGGPDKGDELG: "", unk3300PIBFPDAMJLE: "", unk3300NMDNLHLAKAM: "", unk3300GEJJKDLGFPH: "", unk3300CNPIGDOEJPB: "", unk3300CCOGBICMHKG: "", unk3300DJHKHEFPCDK: "" };
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
                case /* string Unk3300_KGGPDKGDELG = 10 [json_name = "Unk3300KGGPDKGDELG"];*/ 10:
                    message.unk3300KGGPDKGDELG = reader.string();
                    break;
                case /* string Unk3300_PIBFPDAMJLE = 12 [json_name = "Unk3300PIBFPDAMJLE"];*/ 12:
                    message.unk3300PIBFPDAMJLE = reader.string();
                    break;
                case /* string Unk3300_NMDNLHLAKAM = 7 [json_name = "Unk3300NMDNLHLAKAM"];*/ 7:
                    message.unk3300NMDNLHLAKAM = reader.string();
                    break;
                case /* string Unk3300_GEJJKDLGFPH = 5 [json_name = "Unk3300GEJJKDLGFPH"];*/ 5:
                    message.unk3300GEJJKDLGFPH = reader.string();
                    break;
                case /* string Unk3300_CNPIGDOEJPB = 2 [json_name = "Unk3300CNPIGDOEJPB"];*/ 2:
                    message.unk3300CNPIGDOEJPB = reader.string();
                    break;
                case /* string Unk3300_CCOGBICMHKG = 9 [json_name = "Unk3300CCOGBICMHKG"];*/ 9:
                    message.unk3300CCOGBICMHKG = reader.string();
                    break;
                case /* string Unk3300_DJHKHEFPCDK = 1 [json_name = "Unk3300DJHKHEFPCDK"];*/ 1:
                    message.unk3300DJHKHEFPCDK = reader.string();
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
        /* string Unk3300_KGGPDKGDELG = 10 [json_name = "Unk3300KGGPDKGDELG"]; */
        if (message.unk3300KGGPDKGDELG !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.unk3300KGGPDKGDELG);
        /* string Unk3300_PIBFPDAMJLE = 12 [json_name = "Unk3300PIBFPDAMJLE"]; */
        if (message.unk3300PIBFPDAMJLE !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.unk3300PIBFPDAMJLE);
        /* string Unk3300_NMDNLHLAKAM = 7 [json_name = "Unk3300NMDNLHLAKAM"]; */
        if (message.unk3300NMDNLHLAKAM !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.unk3300NMDNLHLAKAM);
        /* string Unk3300_GEJJKDLGFPH = 5 [json_name = "Unk3300GEJJKDLGFPH"]; */
        if (message.unk3300GEJJKDLGFPH !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.unk3300GEJJKDLGFPH);
        /* string Unk3300_CNPIGDOEJPB = 2 [json_name = "Unk3300CNPIGDOEJPB"]; */
        if (message.unk3300CNPIGDOEJPB !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.unk3300CNPIGDOEJPB);
        /* string Unk3300_CCOGBICMHKG = 9 [json_name = "Unk3300CCOGBICMHKG"]; */
        if (message.unk3300CCOGBICMHKG !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.unk3300CCOGBICMHKG);
        /* string Unk3300_DJHKHEFPCDK = 1 [json_name = "Unk3300DJHKHEFPCDK"]; */
        if (message.unk3300DJHKHEFPCDK !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.unk3300DJHKHEFPCDK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TrackingIOInfo
 */
exports.TrackingIOInfo = new TrackingIOInfo$Type();
