"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BargainOfferPriceRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BargainResultType_1 = require("./BargainResultType");
// @generated message type with reflection information, may provide speed optimized methods
class BargainOfferPriceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BargainOfferPriceRsp", [
            { no: 12, name: "result_param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "bargain_result", kind: "enum", T: () => ["BargainResultType", BargainResultType_1.BargainResultType, "BARGAIN_RESULT_TYPE_"] },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "cur_mood", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { resultParam: 0, bargainResult: 0, retcode: 0, curMood: 0 };
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
                case /* uint32 result_param */ 12:
                    message.resultParam = reader.uint32();
                    break;
                case /* BargainResultType bargain_result */ 10:
                    message.bargainResult = reader.int32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* int32 cur_mood */ 7:
                    message.curMood = reader.int32();
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
        /* uint32 result_param = 12; */
        if (message.resultParam !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.resultParam);
        /* BargainResultType bargain_result = 10; */
        if (message.bargainResult !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.bargainResult);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* int32 cur_mood = 7; */
        if (message.curMood !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.curMood);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BargainOfferPriceRsp
 */
exports.BargainOfferPriceRsp = new BargainOfferPriceRsp$Type();
