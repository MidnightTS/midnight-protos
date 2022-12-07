"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFinishNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class OrderFinishNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("OrderFinishNotify", [
            { no: 8, name: "order_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "card_product_remain_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "add_mcoin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { orderId: 0, productId: "", cardProductRemainDays: 0, itemList: [], addMcoin: 0 };
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
                case /* uint32 order_id */ 8:
                    message.orderId = reader.uint32();
                    break;
                case /* string product_id */ 5:
                    message.productId = reader.string();
                    break;
                case /* uint32 card_product_remain_days */ 6:
                    message.cardProductRemainDays = reader.uint32();
                    break;
                case /* repeated ItemParam item_list */ 4:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 add_mcoin */ 14:
                    message.addMcoin = reader.uint32();
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
        /* uint32 order_id = 8; */
        if (message.orderId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.orderId);
        /* string product_id = 5; */
        if (message.productId !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* uint32 card_product_remain_days = 6; */
        if (message.cardProductRemainDays !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.cardProductRemainDays);
        /* repeated ItemParam item_list = 4; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 add_mcoin = 14; */
        if (message.addMcoin !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.addMcoin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OrderFinishNotify
 */
exports.OrderFinishNotify = new OrderFinishNotify$Type();
