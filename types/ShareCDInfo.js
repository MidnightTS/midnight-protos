"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCDInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ShareCDInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ShareCDInfo", [
            { no: 1, name: "cd_start_time", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "share_cd_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cdStartTime: 0n, shareCdId: 0, index: 0 };
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
                case /* uint64 cd_start_time */ 1:
                    message.cdStartTime = reader.uint64().toBigInt();
                    break;
                case /* uint32 share_cd_id */ 12:
                    message.shareCdId = reader.uint32();
                    break;
                case /* uint32 index */ 13:
                    message.index = reader.uint32();
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
        /* uint64 cd_start_time = 1; */
        if (message.cdStartTime !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.cdStartTime);
        /* uint32 share_cd_id = 12; */
        if (message.shareCdId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.shareCdId);
        /* uint32 index = 13; */
        if (message.index !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ShareCDInfo
 */
exports.ShareCDInfo = new ShareCDInfo$Type();
