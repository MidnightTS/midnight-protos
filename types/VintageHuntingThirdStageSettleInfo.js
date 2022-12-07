"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageHuntingThirdStageSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageHuntingThirdStageSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageHuntingThirdStageSettleInfo", [
            { no: 2, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "left_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isSuccess: false, leftTime: 0 };
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
                case /* bool is_success */ 2:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 left_time */ 3:
                    message.leftTime = reader.uint32();
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
        /* bool is_success = 2; */
        if (message.isSuccess !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 left_time = 3; */
        if (message.leftTime !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.leftTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageHuntingThirdStageSettleInfo
 */
exports.VintageHuntingThirdStageSettleInfo = new VintageHuntingThirdStageSettleInfo$Type();
