"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairFallSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FallSettleInfo_1 = require("./FallSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairFallSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairFallSettleInfo", [
            { no: 3, name: "settle_info", kind: "message", T: () => FallSettleInfo_1.FallSettleInfo },
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isNewRecord: false };
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
                case /* FallSettleInfo settle_info */ 3:
                    message.settleInfo = FallSettleInfo_1.FallSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
                    break;
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
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
        /* FallSettleInfo settle_info = 3; */
        if (message.settleInfo)
            FallSettleInfo_1.FallSettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isNewRecord);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairFallSettleInfo
 */
exports.FleurFairFallSettleInfo = new FleurFairFallSettleInfo$Type();
