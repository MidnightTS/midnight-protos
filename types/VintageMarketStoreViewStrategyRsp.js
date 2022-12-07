"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketStoreViewStrategyRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketStoreViewStrategyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketStoreViewStrategyRsp", [
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "strategy_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, strategyList: [], strategyId: 0 };
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
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 strategy_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.strategyList.push(reader.uint32());
                    else
                        message.strategyList.push(reader.uint32());
                    break;
                case /* uint32 strategy_id */ 4:
                    message.strategyId = reader.uint32();
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
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 strategy_list = 6; */
        if (message.strategyList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.strategyList.length; i++)
                writer.uint32(message.strategyList[i]);
            writer.join();
        }
        /* uint32 strategy_id = 4; */
        if (message.strategyId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.strategyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketStoreViewStrategyRsp
 */
exports.VintageMarketStoreViewStrategyRsp = new VintageMarketStoreViewStrategyRsp$Type();
