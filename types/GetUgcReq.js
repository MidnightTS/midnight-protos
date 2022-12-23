"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUgcReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RecordUsage_1 = require("./RecordUsage");
const GetUgcType_1 = require("./GetUgcType");
const UgcType_1 = require("./UgcType");
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetUgcReq", [
            { no: 6, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] },
            { no: 12, name: "get_ugc_type", kind: "enum", T: () => ["GetUgcType", GetUgcType_1.GetUgcType, "GET_UGC_TYPE_"] },
            { no: 13, name: "ugc_record_usage", kind: "enum", T: () => ["RecordUsage", RecordUsage_1.RecordUsage, "RECORD_USAGE_"] },
            { no: 7, name: "is_require_brief", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { ugcGuid: 0n, ugcType: 0, getUgcType: 0, ugcRecordUsage: 0, isRequireBrief: false };
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
                case /* uint64 ugc_guid */ 6:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* UgcType ugc_type */ 2:
                    message.ugcType = reader.int32();
                    break;
                case /* GetUgcType get_ugc_type */ 12:
                    message.getUgcType = reader.int32();
                    break;
                case /* RecordUsage ugc_record_usage */ 13:
                    message.ugcRecordUsage = reader.int32();
                    break;
                case /* bool is_require_brief */ 7:
                    message.isRequireBrief = reader.bool();
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
        /* uint64 ugc_guid = 6; */
        if (message.ugcGuid !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* UgcType ugc_type = 2; */
        if (message.ugcType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.ugcType);
        /* GetUgcType get_ugc_type = 12; */
        if (message.getUgcType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.getUgcType);
        /* RecordUsage ugc_record_usage = 13; */
        if (message.ugcRecordUsage !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.ugcRecordUsage);
        /* bool is_require_brief = 7; */
        if (message.isRequireBrief !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isRequireBrief);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetUgcReq
 */
exports.GetUgcReq = new GetUgcReq$Type();
