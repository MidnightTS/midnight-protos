"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGPlayCardCostInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayCardCostInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGPlayCardCostInfo", [
            { no: 9, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cost_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { cardId: 0, costMap: [] };
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
                case /* uint32 card_id */ 9:
                    message.cardId = reader.uint32();
                    break;
                case /* repeated Uint32Pair cost_map */ 12:
                    message.costMap.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 card_id = 9; */
        if (message.cardId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cardId);
        /* repeated Uint32Pair cost_map = 12; */
        for (let i = 0; i < message.costMap.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.costMap[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayCardCostInfo
 */
exports.GCGPlayCardCostInfo = new GCGPlayCardCostInfo$Type();
