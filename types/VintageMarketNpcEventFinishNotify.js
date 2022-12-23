"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketNpcEventFinishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketNpcEventFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketNpcEventFinishNotify", [
            { no: 3, name: "coin_a", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "coin_c", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "unlock_strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { coinA: 0, coinC: 0, unlockStrategyList: [] };
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
                case /* uint32 coin_a */ 3:
                    message.coinA = reader.uint32();
                    break;
                case /* uint32 coin_c */ 9:
                    message.coinC = reader.uint32();
                    break;
                case /* repeated uint32 unlock_strategy_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockStrategyList.push(reader.uint32());
                    else
                        message.unlockStrategyList.push(reader.uint32());
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
        /* uint32 coin_a = 3; */
        if (message.coinA !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.coinA);
        /* uint32 coin_c = 9; */
        if (message.coinC !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.coinC);
        /* repeated uint32 unlock_strategy_list = 12; */
        if (message.unlockStrategyList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockStrategyList.length; i++)
                writer.uint32(message.unlockStrategyList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketNpcEventFinishNotify
 */
exports.VintageMarketNpcEventFinishNotify = new VintageMarketNpcEventFinishNotify$Type();
