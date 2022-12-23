"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustTrackingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AdjustTrackingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AdjustTrackingInfo", [
            { no: 2, name: "Unk3300_CHCOHLGBHLB", kind: "scalar", jsonName: "Unk3300CHCOHLGBHLB", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "Unk3300_GAMLJPFKCGC", kind: "scalar", jsonName: "Unk3300GAMLJPFKCGC", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "Unk3300_ONNMBNODPIA", kind: "scalar", jsonName: "Unk3300ONNMBNODPIA", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Unk3300_MHDOPAMDMPL", kind: "scalar", jsonName: "Unk3300MHDOPAMDMPL", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "Unk3300_INAIEOMCIEM", kind: "scalar", jsonName: "Unk3300INAIEOMCIEM", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "Unk3300_KLKFLIIOFKK", kind: "scalar", jsonName: "Unk3300KLKFLIIOFKK", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CHCOHLGBHLB: "", unk3300GAMLJPFKCGC: "", unk3300ONNMBNODPIA: "", unk3300MHDOPAMDMPL: "", unk3300INAIEOMCIEM: "", unk3300KLKFLIIOFKK: "" };
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
                case /* string Unk3300_CHCOHLGBHLB = 2 [json_name = "Unk3300CHCOHLGBHLB"];*/ 2:
                    message.unk3300CHCOHLGBHLB = reader.string();
                    break;
                case /* string Unk3300_GAMLJPFKCGC = 9 [json_name = "Unk3300GAMLJPFKCGC"];*/ 9:
                    message.unk3300GAMLJPFKCGC = reader.string();
                    break;
                case /* string Unk3300_ONNMBNODPIA = 4 [json_name = "Unk3300ONNMBNODPIA"];*/ 4:
                    message.unk3300ONNMBNODPIA = reader.string();
                    break;
                case /* string Unk3300_MHDOPAMDMPL = 6 [json_name = "Unk3300MHDOPAMDMPL"];*/ 6:
                    message.unk3300MHDOPAMDMPL = reader.string();
                    break;
                case /* string Unk3300_INAIEOMCIEM = 7 [json_name = "Unk3300INAIEOMCIEM"];*/ 7:
                    message.unk3300INAIEOMCIEM = reader.string();
                    break;
                case /* string Unk3300_KLKFLIIOFKK = 3 [json_name = "Unk3300KLKFLIIOFKK"];*/ 3:
                    message.unk3300KLKFLIIOFKK = reader.string();
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
        /* string Unk3300_CHCOHLGBHLB = 2 [json_name = "Unk3300CHCOHLGBHLB"]; */
        if (message.unk3300CHCOHLGBHLB !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.unk3300CHCOHLGBHLB);
        /* string Unk3300_GAMLJPFKCGC = 9 [json_name = "Unk3300GAMLJPFKCGC"]; */
        if (message.unk3300GAMLJPFKCGC !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.unk3300GAMLJPFKCGC);
        /* string Unk3300_ONNMBNODPIA = 4 [json_name = "Unk3300ONNMBNODPIA"]; */
        if (message.unk3300ONNMBNODPIA !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.unk3300ONNMBNODPIA);
        /* string Unk3300_MHDOPAMDMPL = 6 [json_name = "Unk3300MHDOPAMDMPL"]; */
        if (message.unk3300MHDOPAMDMPL !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.unk3300MHDOPAMDMPL);
        /* string Unk3300_INAIEOMCIEM = 7 [json_name = "Unk3300INAIEOMCIEM"]; */
        if (message.unk3300INAIEOMCIEM !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.unk3300INAIEOMCIEM);
        /* string Unk3300_KLKFLIIOFKK = 3 [json_name = "Unk3300KLKFLIIOFKK"]; */
        if (message.unk3300KLKFLIIOFKK !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.unk3300KLKFLIIOFKK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdjustTrackingInfo
 */
exports.AdjustTrackingInfo = new AdjustTrackingInfo$Type();
