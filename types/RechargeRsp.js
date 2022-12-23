"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RechargeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RechargeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("RechargeRsp", [
            { no: 10, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "is_show_minors_hint", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { productId: "", isShowMinorsHint: false, retcode: 0 };
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
                case /* string product_id */ 10:
                    message.productId = reader.string();
                    break;
                case /* bool is_show_minors_hint */ 1:
                    message.isShowMinorsHint = reader.bool();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
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
        /* string product_id = 10; */
        if (message.productId !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* bool is_show_minors_hint = 1; */
        if (message.isShowMinorsHint !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isShowMinorsHint);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RechargeRsp
 */
exports.RechargeRsp = new RechargeRsp$Type();
