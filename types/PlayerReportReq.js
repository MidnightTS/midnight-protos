"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerReportReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReportReasonType_1 = require("./ReportReasonType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerReportReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerReportReq", [
            { no: 5, name: "target_home_module_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", T: () => ["ReportReasonType", ReportReasonType_1.ReportReasonType, "REPORT_REASON_TYPE_"] },
            { no: 11, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "target_home_module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetHomeModuleName: "", targetUid: 0, reason: 0, content: "", targetHomeModuleId: 0 };
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
                case /* string target_home_module_name */ 5:
                    message.targetHomeModuleName = reader.string();
                    break;
                case /* uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
                    break;
                case /* ReportReasonType reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* string content */ 11:
                    message.content = reader.string();
                    break;
                case /* uint32 target_home_module_id */ 15:
                    message.targetHomeModuleId = reader.uint32();
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
        /* string target_home_module_name = 5; */
        if (message.targetHomeModuleName !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.targetHomeModuleName);
        /* uint32 target_uid = 10; */
        if (message.targetUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* ReportReasonType reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        /* string content = 11; */
        if (message.content !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.content);
        /* uint32 target_home_module_id = 15; */
        if (message.targetHomeModuleId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.targetHomeModuleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerReportReq
 */
exports.PlayerReportReq = new PlayerReportReq$Type();
