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
            { no: 15, name: "report_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "report_value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { reportType: "", reportValue: "" };
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
                case /* string report_type */ 15:
                    message.reportType = reader.string();
                    break;
                case /* string report_value */ 10:
                    message.reportValue = reader.string();
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
        /* string report_type = 15; */
        if (message.reportType !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.reportType);
        /* string report_value = 10; */
        if (message.reportValue !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.reportValue);
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
