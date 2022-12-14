"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResinChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ResinChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ResinChangeNotify", [
            { no: 11, name: "cur_buy_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "next_add_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "cur_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curBuyCount: 0, nextAddTimestamp: 0, curValue: 0 };
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
                case /* uint32 cur_buy_count */ 11:
                    message.curBuyCount = reader.uint32();
                    break;
                case /* uint32 next_add_timestamp */ 13:
                    message.nextAddTimestamp = reader.uint32();
                    break;
                case /* uint32 cur_value */ 10:
                    message.curValue = reader.uint32();
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
        /* uint32 cur_buy_count = 11; */
        if (message.curBuyCount !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curBuyCount);
        /* uint32 next_add_timestamp = 13; */
        if (message.nextAddTimestamp !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.nextAddTimestamp);
        /* uint32 cur_value = 10; */
        if (message.curValue !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ResinChangeNotify
 */
exports.ResinChangeNotify = new ResinChangeNotify$Type();
