"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUgcUpdateRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcType_1 = require("./UgcType");
// @generated message type with reflection information, may provide speed optimized methods
class CheckUgcUpdateRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("CheckUgcUpdateRsp", [
            { no: 6, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] },
            { no: 3, name: "update_ugc_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { ugcType: 0, updateUgcGuidList: [], retcode: 0 };
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
                case /* UgcType ugc_type */ 6:
                    message.ugcType = reader.int32();
                    break;
                case /* repeated uint64 update_ugc_guid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    else
                        message.updateUgcGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* UgcType ugc_type = 6; */
        if (message.ugcType !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.ugcType);
        /* repeated uint64 update_ugc_guid_list = 3; */
        if (message.updateUgcGuidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.updateUgcGuidList.length; i++)
                writer.uint64(message.updateUgcGuidList[i]);
            writer.join();
        }
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CheckUgcUpdateRsp
 */
exports.CheckUgcUpdateRsp = new CheckUgcUpdateRsp$Type();
