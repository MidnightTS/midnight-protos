"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLiveInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RequestLiveInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("RequestLiveInfoRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "Unk3300_BDOGCPKPLOK", kind: "scalar", jsonName: "Unk3300BDOGCPKPLOK", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "Unk3300_DNGGIOIKLHC", kind: "scalar", jsonName: "Unk3300DNGGIOIKLHC", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "live_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300BDOGCPKPLOK: "", unk3300DNGGIOIKLHC: "", liveId: 0 };
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
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* string Unk3300_BDOGCPKPLOK = 11 [json_name = "Unk3300BDOGCPKPLOK"];*/ 11:
                    message.unk3300BDOGCPKPLOK = reader.string();
                    break;
                case /* string Unk3300_DNGGIOIKLHC = 6 [json_name = "Unk3300DNGGIOIKLHC"];*/ 6:
                    message.unk3300DNGGIOIKLHC = reader.string();
                    break;
                case /* uint32 live_id */ 10:
                    message.liveId = reader.uint32();
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
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* string Unk3300_BDOGCPKPLOK = 11 [json_name = "Unk3300BDOGCPKPLOK"]; */
        if (message.unk3300BDOGCPKPLOK !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.unk3300BDOGCPKPLOK);
        /* string Unk3300_DNGGIOIKLHC = 6 [json_name = "Unk3300DNGGIOIKLHC"]; */
        if (message.unk3300DNGGIOIKLHC !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.unk3300DNGGIOIKLHC);
        /* uint32 live_id = 10; */
        if (message.liveId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.liveId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RequestLiveInfoRsp
 */
exports.RequestLiveInfoRsp = new RequestLiveInfoRsp$Type();
