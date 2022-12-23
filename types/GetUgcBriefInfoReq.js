"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUgcBriefInfoReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcType_1 = require("./UgcType");
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcBriefInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetUgcBriefInfoReq", [
            { no: 5, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { ugcGuid: 0n, ugcType: 0 };
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
                case /* uint64 ugc_guid */ 5:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* UgcType ugc_type */ 1:
                    message.ugcType = reader.int32();
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
        /* uint64 ugc_guid = 5; */
        if (message.ugcGuid !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* UgcType ugc_type = 1; */
        if (message.ugcType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetUgcBriefInfoReq
 */
exports.GetUgcBriefInfoReq = new GetUgcBriefInfoReq$Type();
