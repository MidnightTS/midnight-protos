"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketStoreViewStrategyReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketStoreViewStrategyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketStoreViewStrategyReq", [
            { no: 9, name: "strategy_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "strategy_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { strategyId: 0, strategyList: [] };
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
                case /* uint32 strategy_id */ 9:
                    message.strategyId = reader.uint32();
                    break;
                case /* repeated uint32 strategy_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.strategyList.push(reader.uint32());
                    else
                        message.strategyList.push(reader.uint32());
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
        /* uint32 strategy_id = 9; */
        if (message.strategyId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.strategyId);
        /* repeated uint32 strategy_list = 1; */
        if (message.strategyList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.strategyList.length; i++)
                writer.uint32(message.strategyList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketStoreViewStrategyReq
 */
exports.VintageMarketStoreViewStrategyReq = new VintageMarketStoreViewStrategyReq$Type();
