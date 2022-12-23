"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRechargeDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ProductPriceTier_1 = require("./ProductPriceTier");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRechargeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerRechargeDataNotify", [
            { no: 7, name: "product_price_tier_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProductPriceTier_1.ProductPriceTier },
            { no: 6, name: "card_product_remain_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { productPriceTierList: [], cardProductRemainDays: 0 };
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
                case /* repeated ProductPriceTier product_price_tier_list */ 7:
                    message.productPriceTierList.push(ProductPriceTier_1.ProductPriceTier.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 card_product_remain_days */ 6:
                    message.cardProductRemainDays = reader.uint32();
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
        /* repeated ProductPriceTier product_price_tier_list = 7; */
        for (let i = 0; i < message.productPriceTierList.length; i++)
            ProductPriceTier_1.ProductPriceTier.internalBinaryWrite(message.productPriceTierList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 card_product_remain_days = 6; */
        if (message.cardProductRemainDays !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardProductRemainDays);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerRechargeDataNotify
 */
exports.PlayerRechargeDataNotify = new PlayerRechargeDataNotify$Type();
